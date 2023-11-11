import { Component } from "types/Component";
import { Meta } from "types/Meta";

import NextHead from "next/head";

const Head: Component<{ meta?: Meta }> = ({ meta }) => {
  const title = meta?.title ? `${meta.title} - ` : "" + "Media Swift";

  return (
    <NextHead>
      <title>{title}</title>

      <meta name="description" content={meta?.description} />

      <meta name="keywords" content={meta?.keywords + " , Media Swift"} />

      <meta name="author" content="drawilet" />

      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta name="robots" content="index, follow" />

      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
    </NextHead>
  );
};

export default Head;
