import type { AppProps } from "next/app";

import Loading from "@/components/Loading/Loading";
import Notifications from "@/components/Notifications/Notifications";

import "@/styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Notifications />
      <Loading />

      <Component {...pageProps} />
    </>
  );
}
