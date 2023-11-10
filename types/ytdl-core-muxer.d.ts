// ytdl-core-muxer.d.ts
declare module "ytdl-core-muxer" {
  import { Readable } from "stream";
  import {
    videoInfo,
    downloadOptions,
    chooseFormat,
    filterOptions,
    videoFormat,
  } from "ytdl-core";

  interface YtdlCoreMuxer {
    (
      link: string,
      options?: downloadOptions & { highWaterMark?: number }
    ): Readable;
    download: (url: string, options?: downloadOptions) => Readable;
    chooseFormat: (
      formats: videoFormat[] | videoFormat,
      options: chooseFormat
    ) => videoFormat;
    downloadFromInfo: (info: videoInfo, options?: downloadOptions) => Readable;
    filterFormats: (
      formats: videoFormat[] | videoFormat,
      filter: filterOptions | string
    ) => videoFormat[];
    getBasicInfo: typeof import("ytdl-core").getBasicInfo;
    getInfo: typeof import("ytdl-core").getInfo;
    getURLVideoID: typeof import("ytdl-core").getURLVideoID;
    getVideoID: typeof import("ytdl-core").getVideoID;
    validateID: typeof import("ytdl-core").validateID;
    validateURL: typeof import("ytdl-core").validateURL;
  }

  const ytdlCoreMuxer: YtdlCoreMuxer;
  export = ytdlCoreMuxer;
}
