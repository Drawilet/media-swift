import Youtube from "@/components/Youtube/Youtube";
import React from "react";

const features = [
  {
    title: "Download Videos in Various Formats",
    description:
      "Choose from a wide range of video formats to suit your needs.",
    icon: "fa-regular fa-file-video",
  },
  {
    title: "Fast and Easy Conversion",
    description: "Experience quick and hassle-free video conversion.",
    icon: "fa-regular fa-clock",
  },
  {
    title: "Compatible with Multiple Platforms",
    description:
      "Enjoy cross-platform compatibility on various devices and operating systems.",
    icon: "fa-solid fa-desktop",
  },
];

const HomePage = () => {
  return (
    <>
      <Youtube />

      <div className="mt-10">
        <h3 className="text-2xl text-center">
          Why Choose Our Video Downloader?
        </h3>

     <div className="flex flex-wrap">
     {features.map((feature) => (
          <div
            className="card bg-base-100 shadow-xl max-w-md mx-auto mt-10"
            key={feature.title}
          >
            <div className="card-body">
              <i className={`${feature.icon} text-5xl text-center`}></i>
              <h2 className="card-title">{feature.title}</h2>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
     </div>
      </div>
    </>
  );
};

export default HomePage;
