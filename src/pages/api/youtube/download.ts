import { NextApiRequest, NextApiResponse } from "next";
import ytdl from "ytdl-core";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { videoId: id } = req.query;

  if (!id) {
    return res.status(400).json({ error: "Missing videoId parameter" });
  }

  try {
    const videoUrl = `https://www.youtube.com/watch?v=${id}`;
    const info = await ytdl.getInfo(videoUrl);
    const format = ytdl.chooseFormat(
      info.formats.filter((format) => format.hasVideo && format.hasAudio),
      { quality: "highest" }
    );
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${info.videoDetails.title}.mp4"`
    );
    res.setHeader("Content-Type", "video/mp4");
    ytdl(videoUrl, { format }).pipe(res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to download video" });
  }
}
