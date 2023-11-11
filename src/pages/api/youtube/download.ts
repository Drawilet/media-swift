import { NextApiRequest, NextApiResponse } from "next";
import ffmpeg from "fluent-ffmpeg";
import { path as ffmpegPath } from "@ffmpeg-installer/ffmpeg";
import ytdl from "ytdl-core";
import { spawn } from "child_process";

ffmpeg.setFfmpegPath(ffmpegPath);

export const config = {
  api: {
    responseLimit: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { videoId: id, format } = req.query;

  if (!id) return res.status(400).json({ error: "Missing videoId parameter" });

  try {
    const videoUrl = `https://www.youtube.com/watch?v=${id}`;
    const info = await ytdl.getInfo(videoUrl);

    const videoFormat = info.formats.filter(
      (f) => f.itag === parseInt(format as string)
    )[0];

    const filename = `${info.videoDetails.title}.${videoFormat.container}`;

    res.setHeader("Content-Disposition", `attachment; filename="${filename}"`);
    res.setHeader("Content-Type", `${videoFormat.mimeType}`);

    const ffmpegProcess = spawn(
      ffmpegPath,
      [
        "-loglevel",
        "8",
        "-hide_banner",
        "-i",
        "pipe:3",
        "-i",
        "pipe:4",
        "-map",
        "0:a",
        "-map",
        "1:v",
        "-c",
        "copy",
        "-f",
        "matroska",
        "pipe:5",
      ],
      {
        windowsHide: true,
        stdio: ["inherit", "inherit", "inherit", "pipe", "pipe", "pipe"],
      }
    );

    if (!videoFormat.hasAudio) {
      const audioStream = ytdl.downloadFromInfo(info, {
        quality: "highestaudio",
      });
      audioStream.pipe(ffmpegProcess.stdio[3] as NodeJS.WritableStream);
    }

    const videoStream = ytdl.downloadFromInfo(info, {
      format: videoFormat,
    });
    videoStream.pipe(ffmpegProcess.stdio[4] as NodeJS.WritableStream);

    //@ts-ignore
    (ffmpegProcess.stdio[5] as NodeJS.ReadableStream).pipe(res);
  } catch (error) {
    res.status(500).json({ error: "Failed to download video" });
  }
}
