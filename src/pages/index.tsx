import { Component } from "types/Component";
import React from "react";
import { useI18n } from "@drawilet/nextjs-i18n";

import Youtube from "@/components/Youtube/Youtube";
import Layout from "@/components/Layout/Layout";

const features = [
  {
    title: "feature1_title",
    description: "feature1_description",
    icon: "fa-solid fa-shield",
  },
  {
    title: "feature2_title",
    description: "feature2_description",
    icon: "fa-regular fa-file-video",
  },
  {
    title: "feature3_title",
    description: "feature3_description",
    icon: "fa-regular fa-clock",
  },
  {
    title: "feature4_title",
    description: "feature4_description",
    icon: "fa-solid fa-desktop",
  },
];

export const _i18n = {
  feature1_title: "Virus-Free",
  feature1_description:
    "Rest assured, our application is completely free of viruses and malware.",
  feature2_title: "Download Videos in Various Formats",
  feature2_description:
    "Choose from a wide range of video formats to suit your needs.",
  feature3_title: "Fast and Easy Conversion",
  feature3_description: "Experience quick and hassle-free video conversion.",
  feature4_title: "Compatible with Multiple Platforms",
  feature4_description:
    "Enjoy cross-platform compatibility on various devices and operating systems.",
  meta_title: "Free YouTube Video Downloader",
  meta_description:
    "Download YouTube videos safely and quickly with Media Swift. Optimize your download experience with our free application.",
  meta_keywords:
    "YouTube downloader, download YouTube videos, video download, secure video download",
  why_us: "Why Choose Our Video Downloader?",
};

const HomePage: Component = () => {
  const i18n = useI18n();

  return (
    <Layout
      meta={{
        title: i18n("meta_title"),
        description: i18n("meta_description"),
        keywords: i18n("meta_keywords"),
      }}
    >
      <Youtube />

      <div className="mt-10">
        <span className="text-2xl text-center block" id="why-us">
          {i18n("why_us")}
        </span>

        <div className="flex flex-wrap">
          {features.map((feature) => (
            <div
              className="card bg-base-100 shadow-xl max-w-md mx-auto mt-10"
              key={feature.title}
            >
              <div className="card-body">
                <i className={`${feature.icon} text-5xl text-center`}></i>
                <h2 className="card-title">{i18n(feature.title)}</h2>
                <p>{i18n(feature.description)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
