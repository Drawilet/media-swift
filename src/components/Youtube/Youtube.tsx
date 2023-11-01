import React, { ChangeEventHandler, useState } from "react";
import Img from "next/image";
import { videoFormat } from "ytdl-core";

interface Info {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  formats: videoFormat[];
}
const Youtube = () => {
  const [data, setData] = useState({ url: "", format: "" });
  const [info, setInfo] = useState<Info | undefined>(undefined);

  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement
  > = (e) => setData({ ...data, [e.target.id]: e.target.value });

  const getInfo = () => {
    setInfo(undefined);

    fetch("/api/youtube/info?url=" + data.url)
      .then((res) => res.json())
      .then((info) => {
        if (info.error) return alert(info.error);
        setInfo(info);
        setData({ ...data, format: info.formats[0].itag });

        console.log(info.formats);
      });
  };

  const download = async () => {
    if (!info) return;

    const res = await fetch(
      `/api/youtube/download?videoId=${info.id}&&format=${data.format}`
    );
    const blob = await res.blob();

    const url = window.URL.createObjectURL(blob);
    const filename = `${info.title}.${blob.type.split("/")[1]}`;

    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();

    window.URL.revokeObjectURL(url);
  };

  const getQuality = (format: videoFormat) => {
    if (format.qualityLabel) return format.qualityLabel;
    if (format.audioQuality) {
      if (format.audioQuality === "AUDIO_QUALITY_LOW") return "Low";
      if (format.audioQuality === "AUDIO_QUALITY_MEDIUM") return "Medium";
      if (format.audioQuality === "AUDIO_QUALITY_HIGH") return "High";
    }
    if (format.quality) return format.quality;
    return "Unknown";
  };

  return (
    <div className="flex justify-center flex-wrap md:flex-col lg:w-1/2 mx-auto">
      <h1 className="text-2xl text-center mb-4 w-full">Youtube Downloader</h1>
      <div className="join mb-6 w-full">
        <input
          id="url"
          className="input input-bordered join-item w-full"
          placeholder="Paste your link here"
          value={data.url}
          onChange={handleChange}
        />

        <button
          className="btn btn-primary join-item capitalize"
          onClick={getInfo}
        >
          Search
        </button>
      </div>

      {info && (
        <div className="card lg:card-side bg-base-100 shadow-xl max-sm:w-full">
          <figure className="pl-4">
            <Img
              src={info.thumbnail}
              alt={info.title}
              width={info.formats[0].width}
              height={info.formats[0].height}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{info.title}</h2>
            <p>{info.description}</p>

            <div className="join w-full">
              <select
                id="format"
                value={data.format}
                onChange={handleChange}
                className="select select-bordered join-item w-full"
              >
                {info.formats.map((format) => (
                  <option
                    key={format.itag}
                    value={format.itag}
                    className="flex justify-around"
                  >
                    {format.mimeType?.split(";")[0].toUpperCase()} (
                    {getQuality(format)})
                  </option>
                ))}
              </select>

              <button
                className="btn join-item bg-green-500 hover:bg-green-600 text-gray-100 capitalize"
                onClick={download}
              >
                Download
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Youtube;
