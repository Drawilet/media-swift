import { Component } from "../../../types/Component";
import React from "react";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout: Component = ({ children }) => {
  return (
    <>
      <Header />
      <main className="px-10 py-2 ">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
