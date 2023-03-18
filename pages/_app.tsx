import Header from "@/components/Header";
import "@/styles/globals.css";
import { appWithTranslation, useTranslation } from "next-i18next";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(App);
