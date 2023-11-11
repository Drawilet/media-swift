import { Component } from "../../../types/Component";
import Head from "next/head";
import React from "react";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout: Component<{ title?: string }> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title ? `${title} -` : ""} Media Swift</title>
      </Head>

      <Header />
      <main className="px-10 py-2 ">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
