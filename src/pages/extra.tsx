import { Component } from "types/Component";
import React from "react";
import { useI18n } from "@drawilet/nextjs-i18n";

import Layout from "@/components/Layout/Layout";

export const _i18n = {
  title: "This is a extra page",
};

const HomePage: Component = () => {
  const i18n = useI18n();

  return (
    <Layout
      meta={{
        title: i18n("title"),
      }}
    >
      <h1>{i18n("title")}</h1>
    </Layout>
  );
};

export default HomePage;
