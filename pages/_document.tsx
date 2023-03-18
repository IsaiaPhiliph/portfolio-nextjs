import { Html, Head, Main, NextScript, DocumentProps } from "next/document";
import i18nextConfig from "../next-i18next.config";
import { Fira_Code } from "next/font/google";

export default function Document({ __NEXT_DATA__ }: DocumentProps) {
  const currentLocale =
    __NEXT_DATA__.locale ?? i18nextConfig.i18n.defaultLocale;
  return (
    <Html lang={currentLocale}>
      <Head />
      <body className={`bg-background text-white`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
