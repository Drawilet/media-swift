import React, { ChangeEventHandler, useState } from "react";
import Img from "next/image";

const HomePage = () => {
  const [URL, setURL] = useState("");
  const handleURLChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setURL(e.target.value);

  const [info, setInfo] = useState<
    | {
        id: string;
        title: string;
        description: string;
        thumbnail: string;
      }
    | undefined
  >(undefined);
  const getInfo = () => {
    fetch("/api/youtube/info?url=" + URL)
      .then((res) => res.json())
      .then((info) => {
        setInfo(info);
      });
  };

  const download = async () => {
    if (!info) return;

    const res = await fetch(`/api/youtube/download?videoId=${info.id}`);
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

  return (
    <div className="flex justify-center flex-wrap">
      <h1 className="text-2xl text-center mb-4">Youtube Video Downloader</h1>
      <div className="join mb-6">
        <input
          id="url"
          className="input input-bordered join-item"
          placeholder="Pase your link here"
          value={URL}
          onChange={handleURLChange}
        />

        <button
          className="btn join-item capitalize bg-red-600 text-gray-100 "
          onClick={getInfo}
        >
          Download
        </button>
      </div>

      {info && (
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure className="relative h-44">
            <Img
              src={info.thumbnail}
              alt="Video thumbnail"
              fill
              objectFit="contain"
              loading="lazy"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{info.title}</h2>
            <p>{info.description}</p>
            <div className="card-actions justify-end">
              <button
                className="btn bg-green-500 text-gray-100 capitalize"
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

export default HomePage;
