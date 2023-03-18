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
import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import { Icon } from "@iconify-icon/react";
import { useMediaQuery } from "usehooks-ts";

export default function Home() {
  const { t } = useTranslation(["home", "common"]);
  const terminalElement = useRef<HTMLDivElement>(null);
  const terminalElement2 = useRef<HTMLDivElement>(null);
  const terminalElement3 = useRef<HTMLDivElement>(null);
  const typedContainer = useRef<HTMLParagraphElement>(null);
  const [typed, setTyped] = useState<Typed>();

  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    const typed = new Typed(typedContainer.current, {
      strings: [
        "Welcome to my website!",
        "I hope you enjoy it!",
        "If you do, make sure to contact me!",
        "If you do, make sure to share it!",
      ],
      typeSpeed: 20,
      backSpeed: 10,
      backDelay: 1500,
      startDelay: 1000,
      showCursor: isDesktop,
    });
    setTyped(typed);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <Head>
        <title>Pablo Valverde - Portfolio</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Layout>
        <section className="py-16 px-8 container mx-auto">
          <div className="flex flex-col gap-8 md:flex-row">
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
            <motion.div
              onViewportEnter={() => {
                if (typed) {
                  typed.reset();
                }
              }}
              className="flex-1 flex items-center"
              ref={terminalElement}
            >
              <motion.div
                drag={isDesktop}
                dragElastic={{ top: 0.5, bottom: 0.5, left: 0.5, right: 0 }}
                dragConstraints={{
                  left: -50,
                  right: 0,
                  top: -80,
                  bottom: 150,
                }}
                ref={terminalElement2}
                className="w-full z-[5] select-none"
              >
                <div
                  ref={terminalElement3}
                  className="coding inverse-toggle pr-5 shadow-lg text-gray-100 text-sm subpixel-antialiased 
              bg-gray-700 backdrop-blur-sm bg-opacity-80  pb-6  rounded-lg leading-normal overflow-hidden"
                >
                  <div className="top py-4 px-5 w-max group mb-2 flex">
                    <button
                      onClick={() => {
                        terminalElement.current?.remove();
                      }}
                      className="h-3 w-3 grid place-items-center bg-red-500 rounded-full"
                    >
                      <Icon
                        className="text-red-500 group-hover:text-red-900"
                        width={10}
                        icon="maki:cross"
                      />
                    </button>
                    <button
                      onClick={() => {
                        terminalElement.current?.remove();
                      }}
                      className="ml-2 h-3 w-3 grid place-items-center bg-orange-300 rounded-full"
                    >
                      <Icon
                        className="text-orange-300 group-hover:text-orange-900"
                        width={10}
                        icon="ic:round-horizontal-rule"
                      />
                    </button>
                    <button
                      onClick={() => {
                        if (
                          terminalElement2.current &&
                          terminalElement3.current
                        ) {
                          if (
                            terminalElement2.current.style.height === "100%" &&
                            terminalElement3.current.style.height === "100%"
                          ) {
                            terminalElement2.current.style.height = "auto";
                            terminalElement3.current.style.height = "auto";
                          } else {
                            terminalElement2.current.style.height = "100%";
                            terminalElement3.current.style.height = "100%";
                          }
                        }
                      }}
                      className="ml-2 h-3 w-3 grid place-items-center bg-green-500 rounded-full"
                    >
                      <Icon
                        width={8}
                        className="text-green-500 group-hover:text-green-900"
                        icon="el:resize-full"
                      />
                    </button>
                  </div>
                  <div className="px-5 flex">
                    <span className="text-green-500">pablo:~$</span>
                    <p
                      ref={typedContainer}
                      className="typing items-center pl-2"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
        <SkillsSection />
        <ProjectsSection />
        <AboutMeSection />
        <ContactSection />
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
