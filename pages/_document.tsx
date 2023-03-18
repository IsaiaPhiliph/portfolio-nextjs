import { Html, Head, Main, NextScript, DocumentProps } from "next/document";
import i18nextConfig from "../next-i18next.config";

export default function Document({ __NEXT_DATA__ }: DocumentProps) {
  const currentLocale =
    __NEXT_DATA__.locale ?? i18nextConfig.i18n.defaultLocale;
  return (
    <Html className="min-h-screen flex flex-col" lang={currentLocale}>
      <Head>
        <meta
          name="description"
          content="Pablo Valverde Llamas portfolio, showing his skills and projects"
        />
      </Head>

      <body className="flex-1 flex flex-col">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
