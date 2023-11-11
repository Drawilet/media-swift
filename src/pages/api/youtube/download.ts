import { NextApiRequest, NextApiResponse } from "next";
import ytmux from "ytdl-core-muxer";
import ffmpeg from "fluent-ffmpeg";
import { path as ffmpegPath } from "@ffmpeg-installer/ffmpeg";
import ytdl from "ytdl-core";

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

    ytmux(videoUrl, { quality: videoFormat.itag }).pipe(res);
  } catch (error) {
    res.status(500).json({ error: "Failed to download video" });
  }
}
