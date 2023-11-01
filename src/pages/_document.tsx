import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Free YouTube Video Downloader - Media Swift</title>

        <meta
          name="description"
          content="Download YouTube videos safely and quickly with Media Swift. Optimize your download experience with our free application."
        />

        <meta
          name="keywords"
          content="YouTube downloader, download YouTube videos, video download, Media Swift, secure video download"
        />

        <meta name="author" content="drawilet" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="robots" content="index, follow" />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
          {...{ crossOrigin: "anonymous", referrerPolicy: "no-referrer" }}
        />
      </Head>
      <body className="bg-base-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
