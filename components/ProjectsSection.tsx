import { Icon } from "@iconify/react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import AnchorButton, { AnchorButtonProps } from "./AnchorButton";

interface Project {
  tags: string;
  name: string;
  description: string;
  links?: {
    text: string;
    href: string;
    icon?: string;
    variant: AnchorButtonProps["variant"];
  }[];
  image: string;
}

export default function ProjectsSection() {
  const { t } = useTranslation("common");
  const projects: Project[] = [
    {
      name: "r/place-clone",
      tags: "HTML, CSS, Javascript, Nodejs",
      description: "A clone of reddit r/place, where you can draw pixels",
      links: [
        {
          text: "Visit",
          href: "https://place.isaiaphiliph.com",
          variant: "primary",
          icon: "mdi:web",
        },
        {
          text: "Client",
          href: "https://github.com/IsaiaPhiliph/rplace-clone-client",
          icon: "fe:github",
          variant: "gray",
        },
        {
          text: "Server",
          href: "https://github.com/IsaiaPhiliph/rplace-clone-server",
          icon: "fe:github",
          variant: "gray",
        },
      ],
      image: "/images/projects/rplace-clone.png",
    },
    {
      name: "gigachat",
      tags: "OpenAI, NextJS, Tailwindcss",
      description:
        "Application like chatgpt that uses OpenAI chat api in a separate server to generate responses",
      links: [
        {
          text: "Visit",
          href: "https://chat.isaiaphiliph.com",
          variant: "primary",
          icon: "mdi:web",
        },
        {
          text: "Github",
          href: "https://github.com/IsaiaPhiliph/gigachat-website",
          icon: "fe:github",
          variant: "gray",
        },
      ],
      image: "/images/projects/gigachat.png",
    },
    {
      name: "preguntabot",
      tags: "discord bot, discord api, OpenAI, Docker",
      description:
        "Discord bot that generates a trivia with AI based on a topic and difficulty that the user request",
      links: [
        {
          text: "Github",
          href: "",
          icon: "fe:github",
          variant: "gray",
        },
      ],
      image: "/images/projects/preguntabot.png",
    },
  ];
  return (
    <section className="py-16 px-8 container mx-auto">
      <div className="flex gap-8 justify-between items-center pb-12">
        <h2 className="font-medium text-xl md:text-4xl">
          <span className="text-primary">#</span>
          {t("projects")}
        </h2>
        <hr className="flex-1 hidden sm:block text-primary" />
        <Link
          className="text-lg md:text-2xl  md:pl-8 flex gap-4 items-center"
          href="/projects"
        >
          <span className="whitespace-nowrap">{t("viewAll")}</span>
          <Icon
            width={28}
            icon="material-symbols:keyboard-double-arrow-right"
          />
        </Link>
      </div>
      <div className="flex flex-col lg:flex-row gap-4">
        {projects.map(({ image, name, tags, links, description }, i) => (
          <div
            key={i}
            className="flex border border-customGray flex-1 flex-col"
          >
            <div className="relative aspect-video border-b border-customGray">
              <Image
                alt={`preview of ${name} project, by Pablo Valverde Llamas`}
                src={image}
                fill
                className="object-cover"
              />
            </div>
            <p className="border-b border-customGray p-2 text-customGray">
              {tags}
            </p>
            <div className="flex p-4 flex-1 flex-col gap-4">
              <p className="text-2xl font-semibold">{name}</p>
              <p className="text-customGray">{description}</p>
            </div>
            <div className="flex flex-wrap p-4 gap-4">
              {links?.map((link) => (
                <AnchorButton
                  icon={link.icon}
                  variant={link.variant}
                  href={link.href}
                >
                  {link.text}
                </AnchorButton>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center pt-8">
        <AnchorButton variant="primary" href={"/projects"}>
          {t("viewAll")}
        </AnchorButton>
      </div>
    </section>
  );
}
