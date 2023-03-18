import AnchorButton from "@/components/AnchorButton";
import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Layout from "@/components/Layout";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import { Fira_Code } from "next/font/google";
import AboutMeSection from "@/components/AboutMeSection";
import ContactSection from "@/components/ContactSection";
import { TypeAnimation } from "react-type-animation";
import Head from "next/head";

const firaCode = Fira_Code({ subsets: ["latin"] });

export default function Home() {
  const { t } = useTranslation(["home", "common"]);
  return (
    <>
      <Head>
        <title>Pablo Valverde - Portfolio</title>
      </Head>
      <main className={`${firaCode.className}`}>
        <Layout>
          <section className="py-16 px-8 container mx-auto">
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="flex flex-col flex-1 gap-8">
                <h1 className="text-4xl">
                  <span className="font-medium">{t("home:big-text-1")}</span>
                  <span className="text-primary font-semibold">
                    {t("home:big-text-2")}
                  </span>
                  <span className="font-medium">{t("home:big-text-3")}</span>
                  <span className="text-primary font-semibold">
                    {t("home:big-text-4")}
                    {/* <Translate key=""/> */}
                  </span>
                </h1>
                <p className="text-gray">{t("home:text-2")}</p>
                <AnchorButton variant="primary" href="/">
                  {t("home:contact-button")}
                </AnchorButton>
              </div>
              <div className="flex-1 flex items-center">
                <div className="w-full">
                  <div
                    className="coding inverse-toggle px-5 shadow-lg text-gray-100 text-sm subpixel-antialiased 
              bg-gray-800  pb-6 pt-4 rounded-lg leading-normal overflow-hidden"
                  >
                    <div className="top mb-2 flex">
                      <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                      <div className="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
                      <div className="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="mt-4 flex">
                      <span className="text-green-400">pablo:~$</span>
                      <p className="flex-1 typing items-center pl-2">
                        <TypeAnimation
                          sequence={[
                            "Welcome to my website!", // Types 'One'
                            1500, // Waits 1s
                            "I hope you enjoy it!", // Deletes 'One' and types 'Two'
                            1000, // Waits 2s
                            "If you do, make sure to share it!", // Types 'Three' without deleting 'Two'
                            2000,
                          ]}
                          wrapper="span"
                          cursor={true}
                          repeat={Infinity}
                          speed={60}
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <SkillsSection />
          <ProjectsSection />
          <AboutMeSection />
          <ContactSection />
        </Layout>
      </main>
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
