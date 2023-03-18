import { Icon } from "@iconify-icon/react";
import { motion, Variants } from "framer-motion";
import { useTranslation } from "next-i18next";
import Link from "next/link";

export default function ContactSection() {
  const { t } = useTranslation(["common", "home"]);

  const variants: { [name: string]: Variants } = {
    container: {
      hidden: {
        opacity: 0,
        y: -100,
      },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.5,
          delayChildren: 0.5,
          staggerChildren: 0.3,
        },
      },
    },
    item: {
      hidden: {
        opacity: 0,
        y: -50,
      },
      show: {
        opacity: 1,
        y: 0,
      },
    },
  };

  return (
    <section className="py-16 px-8 container mx-auto">
      <div className="flex gap-8 items-center pb-12">
        <h2 className="font-medium text-xl md:text-4xl">
          <span className="text-primary">#</span>
          {t("header.contact")}
        </h2>
        <hr className="flex-1 text-primary" />
      </div>
      <div className="flex flex-col lg:flex-row lg:items-start items-center gap-16">
        <p className="dark:text-customGray flex-1">
          {t("home:contact-section-text")}
        </p>
        <div className="flex flex-1 w-full justify-center lg:justify-end">
          <motion.div
            variants={variants.container}
            initial="hidden"
            whileInView={"show"}
            viewport={{ amount: "all", once: true }}
            className="flex gap-6 border w-full lg:w-max border-customGray p-8 flex-col"
          >
            <motion.p variants={variants.item} className="font-medium">
              {t("home:contact-section-message-me")}
            </motion.p>
            <motion.div
              variants={variants.item}
              className="flex gap-4 items-center"
            >
              <Icon
                className="dark:text-customGray"
                width={32}
                icon="ic:baseline-discord"
              />
              <span className="dark:text-customGray text-xs md:text-base">
                IsaiaPhiliph#0915
              </span>
            </motion.div>
            <motion.div
              variants={variants.item}
              className="flex gap-4 items-center"
            >
              <Icon
                className="dark:text-customGray"
                width={32}
                icon="mdi:email"
              />
              <Link
                href="mailto:pablovalverdellamas@gmail.com"
                className="dark:text-customGray text-xs md:text-base overflow-hidden text-ellipsis w-full"
              >
                pablovalverdellamas@gmail.com
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
