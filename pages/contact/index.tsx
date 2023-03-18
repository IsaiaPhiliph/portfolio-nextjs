import Layout from "@/components/Layout";
import { firstChatToUpper } from "@/utils/utils";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

export default function ContactPage() {
  const { t } = useTranslation(["common"]);

  return (
    <>
      <Head>
        <title>
          Pablo Valverde - {firstChatToUpper(t("common:header.contact"))}
        </title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Layout>
        <section className="py-16 px-8 container mx-auto">
          <div className="flex gap-8 items-center pb-12">
            <h2 className="font-medium text-xl md:text-4xl">
              <span className="text-primary">#</span>
              {t("header.contact")}
            </h2>
          </div>
          <p>{t("common:wip")}</p>
        </section>
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
