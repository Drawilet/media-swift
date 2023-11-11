import { Component } from "types/Component";
import React from "react";

import Youtube from "@/components/Youtube/Youtube";
import Layout from "@/components/Layout/Layout";

const features = [
  {
    title: "Virus-Free",
    description:
      "Rest assured, our application is completely free of viruses and malware.",
    icon: "fa-solid fa-shield",
  },
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

const HomePage: Component = () => {
  return (
    <Layout title="Free YouTube Video Downloader">
      <Youtube />

      <div className="mt-10">
        <span className="text-2xl text-center block" id="why-us">
          Why Choose Our Video Downloader?
        </span>

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
    </Layout>
  );
};

export default HomePage;
