import { Icon } from "@iconify-icon/react";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import { motion, Variants } from "framer-motion";
interface Skill {
  id: string;
  title: string;
  description: string;
  icon: string;
  monoIcon: string;
}

export default function SkillsSection() {
  const skills: Skill[] = [
    {
      id: "html",
      title: "HTML",
      description: "HTML...",
      icon: "vscode-icons:file-type-html",
      monoIcon: "akar-icons:html-fill",
    },
    {
      id: "css",
      title: "CSS",
      description: "CSS...",
      icon: "vscode-icons:file-type-css",
      monoIcon: "akar-icons:css-fill",
    },
    {
      id: "js",
      title: "Javascript",
      description: "Javascript...",
      icon: "logos:javascript",
      monoIcon: "simple-icons:javascript",
    },
    {
      id: "ts",
      title: "Typescript",
      description: "Typescript...",
      icon: "logos:typescript-icon",
      monoIcon: "akar-icons:typescript-fill",
    },
    {
      id: "docker",
      title: "Docker",
      description: "docker...",
      icon: "logos:docker-icon",
      monoIcon: "fa6-brands:docker",
    },
    {
      id: "mysql",
      title: "MySQL",
      description: "MySQL...",
      icon: "logos:mysql",
      monoIcon: "simple-icons:mysql",
    },
    {
      id: "pg",
      title: "Postgres",
      description: "Postgres...",
      icon: "logos:postgresql",
      monoIcon: "akar-icons:postgresql-fill",
    },
    {
      id: "mongo",
      title: "MongoDB",
      description: "MongoDB...",
      icon: "logos:mongodb",
      monoIcon: "simple-icons:mongodb",
    },
    {
      id: "github",
      title: "Github",
      description: "github...",
      icon: "logos:github-icon",
      monoIcon: "radix-icons:github-logo",
    },
    {
      id: "react",
      title: "React",
      description: "react...",
      icon: "logos:react",
      monoIcon: "akar-icons:react-fill",
    },
    {
      id: "vite",
      title: "Vite",
      description: "vite...",
      icon: "logos:vitejs",
      monoIcon: "simple-icons:vite",
    },
    {
      id: "nextjs",
      title: "Next",
      description: "Nextjs...",
      icon: "logos:nextjs",
      monoIcon: "akar-icons:nextjs-fill",
    },
    {
      id: "tailwind",
      title: "Tailwindcss",
      description: "Tailwind...",
      icon: "vscode-icons:file-type-tailwind",
      monoIcon: "simple-icons:tailwindcss",
    },
    {
      id: "openai",
      title: "OpenAI",
      description: "OpenAI...",
      icon: "logos:openai-icon",
      monoIcon: "simple-icons:openai",
    },
    {
      id: "socket",
      title: "Websockets",
      description: "websockets...",
      icon: "logos:socket-io",
      monoIcon: "simple-icons:socketdotio",
    },
  ];

  const [selectedSkill, setSelectedSkill] = useState<Skill>(skills[0]);

  const { t } = useTranslation("common");

  const variants: { [name: string]: Variants } = {
    container: {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.03,
        },
      },
    },
    item: {
      hidden: { opacity: 0, y: -75 },
      show: { opacity: 1, y: 0 },
    },
  };

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
        <motion.div
          variants={variants.container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-1 justify-center flex-wrap   gap-4 items-start "
        >
          {skills.map((skill) => (
            <motion.div variants={variants.item} key={skill.id}>
              <SkillIcon
                active={skill.id === selectedSkill.id}
                onClick={() => setSelectedSkill(skill)}
                skill={skill}
              />
            </motion.div>
          ))}
        </motion.div>
        <div className="flex flex-1">
          <div className="flex flex-col">
            <p className="p-4 border border-customGray font-bold">
              {selectedSkill.title}
            </p>
            <div className="p-4 flex flex-col gap-4 border border-t-0 border-customGray dark:text-customGray">
              <p>{selectedSkill.description}</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                voluptate, commodi culpa aspernatur dignissimos a aliquam fugit
                maiores sapiente cum tempora deleniti laboriosam nemo molestiae
                recusandae consectetur optio praesentium? Optio? Lorem ipsum
                dolor sit amet consectetur adipisicing elit.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                voluptate, commodi culpa aspernatur dignissimos a aliquam fugit
                maiores sapiente cum tempora deleniti laboriosam nemo molestiae
                recusandae consectetur optio praesentium? Optio? Lorem ipsum
                dolor sit amet consectetur adipisicing elit.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                voluptate, commodi culpa aspernatur dignissimos a aliquam fugit
                maiores sapiente cum tempora deleniti laboriosam nemo molestiae
                recusandae consectetur optio praesentium? Optio? Lorem ipsum
                dolor sit amet consectetur adipisicing elit.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                voluptate, commodi culpa aspernatur dignissimos a aliquam fugit
                maiores sapiente cum tempora deleniti laboriosam nemo molestiae
                recusandae consectetur optio praesentium? Optio? Lorem ipsum
                dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
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
      className={`${
        active
          ? "text-primary"
          : "dark:text-customGray text-gray-700 hover:text-primary"
      }  relative transition-all ring-primary h-18 w-18 p-2 grid place-items-center rounded-sm`}
    >
      <Icon width={48} height={48} icon={skill.monoIcon} />
      {active && (
        <motion.div
          layoutId="skillSelected"
          className="ring-4 ring-primary rounded-sm absolute inset-0"
        />
      )}
    </button>
  );
};
