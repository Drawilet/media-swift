import { Meta } from "types/Meta";
import { Component } from "types/Component";

import React from "react";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Head from "./Head";

const Layout: Component<{
  meta?: Meta;
}> = ({ children, meta }) => {
  return (
    <>
    <Head  meta={meta}/>
      <Header />
      <main className="px-10 py-2 ">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
