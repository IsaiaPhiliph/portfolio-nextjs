import { Icon } from "@iconify/react";
import { useTranslation } from "next-i18next";
import Link from "next/link";

export default function ContactSection() {
  const { t } = useTranslation(["common", "home"]);

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
        <p className="text-customGray flex-1">
          {t("home:contact-section-text")}
        </p>
        <div className="flex flex-1 w-full justify-center lg:justify-end">
          <div className="flex gap-6 border w-full border-customGray p-8 flex-col">
            <p>{t("home:contact-section-message-me")}</p>
            <div className="flex gap-4 items-center">
              <Icon
                className="text-customGray"
                width={32}
                icon="ic:baseline-discord"
              />
              <span className="text-customGray text-xs md:text-base">
                IsaiaPhiliph#0915
              </span>
            </div>
            <div className="flex gap-4 items-center">
              <Icon className="text-customGray" width={32} icon="mdi:email" />
              <Link
                href="mailto:pablovalverdellamas@gmail.com"
                className="text-customGray text-xs md:text-base overflow-hidden text-ellipsis w-full"
              >
                pablovalverdellamas@gmail.com
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
