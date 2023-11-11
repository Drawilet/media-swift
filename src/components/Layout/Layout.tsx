import { Component } from "../../../types/Component";
import Head from "next/head";
import React from "react";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout: Component<{
  meta?: {
    title?: string;
    description?: string;
    keywords?: string;
  };
}> = ({ children, meta }) => {
  return (
    <>
      <Head>
        <title>{meta?.title ? `${meta.title} -` : ""} Media Swift</title>

        <meta name="description" content={meta?.description} />

        <meta name="keywords" content={meta?.keywords + " , Media Swift"} />
      </Head>

      <Header />
      <main className="px-10 py-2 ">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
