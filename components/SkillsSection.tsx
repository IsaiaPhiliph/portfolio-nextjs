import { Icon } from "@iconify/react";
import { useState } from "react";
import { useTranslation } from "next-i18next";

interface Skill {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export default function SkillsSection() {
  const skills: Skill[] = [
    {
      id: "html",
      title: "HTML",
      description: "HTML...",
      icon: "vscode-icons:file-type-html",
    },
    {
      id: "css",
      title: "CSS",
      description: "CSS...",
      icon: "vscode-icons:file-type-css",
    },
    {
      id: "js",
      title: "Javascript",
      description: "Javascript...",
      icon: "logos:javascript",
    },
    {
      id: "ts",
      title: "Typescript",
      description: "Typescript...",
      icon: "logos:typescript-icon",
    },
    {
      id: "docker",
      title: "Docker",
      description: "docker...",
      icon: "logos:docker-icon",
    },
    {
      id: "mysql",
      title: "MySQL",
      description: "MySQL...",
      icon: "logos:mysql",
    },
    {
      id: "pg",
      title: "Postgres",
      description: "Postgres...",
      icon: "logos:postgresql",
    },
    {
      id: "mongo",
      title: "MongoDB",
      description: "MongoDB...",
      icon: "logos:mongodb",
    },
    {
      id: "github",
      title: "Github",
      description: "github...",
      icon: "logos:github-icon",
    },
    {
      id: "react",
      title: "React",
      description: "react...",
      icon: "logos:react",
    },
    {
      id: "vite",
      title: "Vite",
      description: "vite...",
      icon: "logos:vitejs",
    },
    {
      id: "nextjs",
      title: "Next",
      description: "Nextjs...",
      icon: "logos:nextjs",
    },
    {
      id: "tailwind",
      title: "Tailwindcss",
      description: "Tailwind...",
      icon: "vscode-icons:file-type-tailwind",
    },
    {
      id: "openai",
      title: "OpenAI",
      description: "OpenAI...",
      icon: "logos:openai-icon",
    },
    {
      id: "socket",
      title: "Websockets",
      description: "websockets...",
      icon: "logos:socket-io",
    },
  ];

  const [selectedSkill, setSelectedSkill] = useState<Skill>(skills[0]);

  const { t } = useTranslation("common");

  return (
    <section className="py-16 px-8 container mx-auto">
      <div className="flex gap-8 items-center pb-12">
        <h2 className="font-medium text-xl md:text-4xl">
          <span className="text-primary">#</span>
          {t("skills")}
        </h2>
        <hr className="flex-1 text-primary" />
      </div>
      <div className="flex flex-col lg:flex-row items-start gap-8">
        <div className="flex flex-1 flex-wrap   gap-4 items-start ">
          {skills.map((skill) => (
            <SkillIcon
              key={skill.id}
              active={skill.id === selectedSkill.id}
              onClick={() => setSelectedSkill(skill)}
              skill={skill}
            />
          ))}
        </div>
        <div className="flex flex-1">
          <div className="flex flex-col">
            <p className="p-4 border border-customGray font-bold">
              {selectedSkill.title}
            </p>
            <p className="p-4 border border-t-0 border-customGray text-customGray">
              {selectedSkill.description}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              voluptate, commodi culpa aspernatur dignissimos a aliquam fugit
              maiores sapiente cum tempora deleniti laboriosam nemo molestiae
              recusandae consectetur optio praesentium? Optio? Lorem ipsum dolor
              sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const SkillIcon = ({
  skill,
  onClick,
  active,
}: {
  skill: Skill;
  onClick: () => void;
  active: boolean;
}) => {
  return (
    <button
      title={skill.title}
      onClick={onClick}
      className={`bg-white transition-all ring-primary h-18 w-18 p-2 grid place-items-center rounded-sm ${
        active ? "ring-4 " : "hover:ring-2 "
      }`}
    >
      <Icon width={48} height={48} icon={skill.icon} />
    </button>
  );
};
