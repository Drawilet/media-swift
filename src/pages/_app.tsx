import type { AppProps } from "next/app";

import { I18nProvider } from "@drawilet/nextjs-i18n";

import Loading from "@/components/Loading/Loading";
import Notifications from "@/components/Notifications/Notifications";

import "@/styles/globals.css";

import resources from "../locales/data.json";
import { useRouter } from "next/router";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <I18nProvider resources={resources} router={router}>
      <Notifications />
      <Loading />

      <Component {...pageProps} />
    </I18nProvider>
  );
}
