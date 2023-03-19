import Link, { LinkProps } from "next/link";
import { useRef, useState } from "react";
import LanguageSelector from "./LanguageSelector";
import { Icon } from "@iconify-icon/react";
import { useTranslation } from "next-i18next";
import { AnimatePresence, motion } from "framer-motion";
import ThemeSwitcher from "./ThemeSwitcher";
import { useRouter } from "next/router";
import { useOnClickOutside } from "usehooks-ts";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const router = useRouter();

  const { t } = useTranslation("common");

  const mobileMenu = useRef<HTMLDivElement>(null);

  useOnClickOutside(mobileMenu, () => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  });

  const links = [
    {
      title: t("header.home"),
      href: "/",
    },
    {
      title: t("header.projects"),
      href: "/projects",
    },
    {
      title: t("header.about-me"),
      href: "/about-me",
    },
    {
      title: t("header.contact"),
      href: "/contact",
    },
  ];

  const Links = links.map(({ title, href }) => (
    <>
      <LinkWithHashtag active={router.pathname === href} href={href}>
        {title}
      </LinkWithHashtag>
    </>
  ));

  return (
    <header
      ref={mobileMenu}
      className="flex flex-col lg:flex-row pb-2 lg:gap-4 lg:px-8 pt-8 container mx-auto justify-between"
    >
      <div className="flex px-8 lg:px-0 justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
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
          <span className="font-bold text-regular lg:text-xl whitespace-nowrap">
            Pablo Valverde Llamas
          </span>
        </Link>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 lg:hidden grid place-items-center"
        >
          <Icon width={24} icon="ic:baseline-menu" />
        </button>
      </div>
      <AnimatePresence mode="popLayout">
        {menuOpen && (
          <motion.div
            initial={{ y: -100, x: 0, opacity: 0, zIndex: 10 }}
            animate={{ y: 0, x: 0, opacity: 1, zIndex: 10 }}
            exit={{ x: -400, opacity: 0, zIndex: 10 }}
            className="relative lg:hidden"
          >
            <div
              className={`${
                menuOpen
                  ? "flex absolute px-8 border-b-4 shadow-lg border-b-primary dark:bg-background bg-white bg-opacity-80 backdrop-blur-sm dark:bg-opacity-95 w-full z-10"
                  : "hidden"
              } gap-8 py-8 flex-col items-start`}
            >
              {...Links}
              <div className="flex gap-8 items-center">
                <LanguageSelector />
                <ThemeSwitcher />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="hidden lg:block">
        <div className={`flex gap-8 py-4`}>
          {...Links}
          <LanguageSelector />
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}

function LinkWithHashtag({
  children,
  active,
  ...rest
}: { children: React.ReactNode; active: boolean } & LinkProps) {
  return (
    <div className="relative">
      <Link {...rest} className="font-medium whitespace-nowrap">
        <span className="text-primary">#</span>
        {children}
      </Link>
      {active && (
        <motion.hr
          layoutId="link_underline"
          className="border-primary border-1 absolute left-2.5 right-0"
        />
      )}
    </div>
  );
}
