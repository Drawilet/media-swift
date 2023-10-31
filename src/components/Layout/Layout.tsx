import React from "react";
import { Component } from "../../../types/Component";
import Header from "./Header/Header";

const Layout: Component = ({ children }) => {
  return (
    <>
      <Header />
      <main className="px-5 py-2 ">{children}</main>
    </>
  );
};

export default Layout;
