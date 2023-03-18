import { Html, Head, Main, NextScript, DocumentProps } from "next/document";
import i18nextConfig from "../next-i18next.config";

export default function Document({ __NEXT_DATA__ }: DocumentProps) {
  const currentLocale =
    __NEXT_DATA__.locale ?? i18nextConfig.i18n.defaultLocale;
  return (
    <Html lang={currentLocale}>
      <Head>
        <title>Pablo Valverde - Portfolio</title>
        <meta
          name="description"
          content="Pablo Valverde Llamas portfolio, showing his skills and projects"
        />
      </Head>

      <body className={`bg-background text-white`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
