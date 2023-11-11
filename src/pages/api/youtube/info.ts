import { NextApiRequest, NextApiResponse } from "next";
import ytdl from "ytdl-core";

import config from "@/data/config.json";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { url } = req.query;

  if (!url) return res.status(400).json({ error: "Missing URL parameter" });

  try {
    const info = await ytdl.getInfo(url as string).then((info) => {
      let description = info.videoDetails.description;
      if (description) {
        if (description.length > config.youtube.description.maxLength)
          description =
            description.substring(0, config.youtube.description.maxLength) +
            "...";
      } else description = "No description available";

      return {
        id: info.videoDetails.videoId,
        title: info.videoDetails.title,
        description,
        thumbnail: info.videoDetails.thumbnails[0].url,
        formats: info.formats,
      };
    });
    return res.status(200).json(info);
  } catch (error) {
    return res.status(500).json({ error: "Failed to get YouTube info" });
  }
}
