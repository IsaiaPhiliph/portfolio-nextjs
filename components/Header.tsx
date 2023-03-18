import Link, { LinkProps } from "next/link";
import { useState } from "react";
import LanguageSelector from "./LanguageSelector";
import { Icon } from "@iconify-icon/react";
import { useTranslation } from "next-i18next";
import { AnimatePresence, motion } from "framer-motion";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { t } = useTranslation("common");

  return (
    <header className="flex flex-col lg:flex-row pb-2 gap-4 px-8 pt-8 container mx-auto justify-between">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <svg
            className="flex-shrink-0"
            width="18"
            height="18"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 0H13V13H19V0H32V13H39V0H52V13V26V39V52H39H26H13H0V39V26V13V0ZM26 26H13V39H26H39V26H26Z"
              fill="currentColor"
            />
          </svg>
          <span className="font-bold text-xl whitespace-nowrap">
            Pablo Valverde Llamas
          </span>
        </div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 lg:hidden grid place-items-center"
        >
          <Icon width={24} icon="ic:baseline-menu" />
        </button>
      </div>
      <div className="relative lg:hidden">
        <div
          className={`${
            menuOpen
              ? "flex absolute dark:bg-background bg-white bg-opacity-80 backdrop-blur-sm dark:bg-opacity-95 w-full z-10"
              : "hidden"
          } gap-8 py-4 flex-col items-start`}
        >
          <LinkWithHashtag href="/">{t("header.home")}</LinkWithHashtag>
          <LinkWithHashtag href="/projects">
            {t("header.projects")}
          </LinkWithHashtag>
          <LinkWithHashtag href="/about-me">
            {t("header.about-me")}
          </LinkWithHashtag>
          <LinkWithHashtag href="/contact">
            {t("header.contact")}
          </LinkWithHashtag>
          <div className="flex gap-8 items-center">
            <LanguageSelector />
            <ThemeSwitcher />
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <div className={`flex gap-8 py-4`}>
          <LinkWithHashtag href="/">{t("header.home")}</LinkWithHashtag>
          <LinkWithHashtag href="/projects">
            {t("header.projects")}
          </LinkWithHashtag>
          <LinkWithHashtag href="/about-me">
            {t("header.about-me")}
          </LinkWithHashtag>
          <LinkWithHashtag href="/contact">
            {t("header.contact")}
          </LinkWithHashtag>
          <LanguageSelector />
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}

function LinkWithHashtag(props: { children: React.ReactNode } & LinkProps) {
  return (
    <Link {...props} className="font-medium whitespace-nowrap">
      <span className="text-primary">#</span>
      {props.children}
    </Link>
  );
}
