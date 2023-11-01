import type { AppProps } from "next/app";

import "@/styles/globals.css";
import Layout from "@/components/Layout/Layout";
import Loading from "@/components/Loading/Loading";

export default function MyApp({ Component , pageProps }: AppProps) {
  return (
    <>
      <Loading />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
