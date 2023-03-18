import Layout from "@/components/Layout";
import { firstChatToUpper } from "@/utils/utils";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

export default function AboutMePage() {
  const { t } = useTranslation(["common"]);

  return (
    <>
      <Head>
        <title>
          Pablo Valverde - {firstChatToUpper(t("common:header.about-me"))}
        </title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Layout>
        <div className="flex-1">
          <section className="pt-16 px-8 container mx-auto">
            <div className="flex gap-8 items-center">
              <h2 className="font-medium text-xl md:text-4xl">
                <span className="text-primary">#</span>
                {t("header.about-me")}
              </h2>
            </div>
          </section>
          <section className="py-16 px-8 container mx-auto">
            <div className="flex flex-col gap-4">
              <p>{t("about-me.first-paragraph")}</p>
              <p>{t("about-me.second-paragraph")}</p>
              <p>{t("about-me.third-paragraph")}</p>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "home"])),
      // Will be passed to the page component as props
    },
  };
}
