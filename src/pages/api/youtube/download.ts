import { NextApiRequest, NextApiResponse } from "next";
import ytdl from "ytdl-core";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { videoId: id, format } = req.query;

  if (!id) {
    return res.status(400).json({ error: "Missing videoId parameter" });
  }

  try {
    const videoUrl = `https://www.youtube.com/watch?v=${id}`;
    const info = await ytdl.getInfo(videoUrl);

    const videoFormat = info.formats.filter(
      (f) => f.itag === parseInt(format as string)
    )[0];
    const filename = `${info.videoDetails.title}.${videoFormat.container}`;

    res.setHeader("Content-Disposition", `attachment; filename="${filename}"`);
    res.setHeader("Content-Type", `${videoFormat.mimeType}`);
    ytdl(videoUrl, { format: videoFormat }).pipe(res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to download video" });
  }
}
