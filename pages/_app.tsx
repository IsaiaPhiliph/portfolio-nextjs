import { ThemeProvider } from "next-themes";
import "@/styles/globals.css";
import { appWithTranslation, useTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider disableTransitionOnChange attribute="class">
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  );
}

export default appWithTranslation(App);
