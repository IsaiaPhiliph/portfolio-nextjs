import { Icon } from "@iconify-icon/react";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);

  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  const variants: { [name: string]: Variants } = {
    button: {
      initial: {
        opacity: 0,
        scale: 0,
      },
      animate: {
        opacity: 1,
        scale: 1,
      },
      exit: {
        opacity: 0,
        scale: 0,
      },
    },
  };

  if (!mounted) {
    return (
      <div className="min-w-[24px]">
        <AnimatePresence mode="popLayout">
          <motion.button
            variants={variants.button}
            initial="initial"
            animate="animate"
            exit="exit"
            onClick={() => setTheme("light")}
            className="grid place-items-center"
          >
            <Icon width={24} icon="material-symbols:light-mode-outline-sharp" />
          </motion.button>
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="min-w-[24px]">
      <AnimatePresence mode="popLayout">
        {currentTheme === "light" && (
          <motion.button
            variants={variants.button}
            initial="initial"
            animate="animate"
            exit="exit"
            onClick={() => setTheme("dark")}
            className="grid place-items-center"
          >
            <Icon width={24} icon="material-symbols:dark-mode-outline" />
          </motion.button>
        )}
      </AnimatePresence>
      <AnimatePresence mode="popLayout">
        {currentTheme === "dark" && (
          <motion.button
            variants={variants.button}
            initial="initial"
            animate="animate"
            exit="exit"
            onClick={() => setTheme("light")}
            className="grid place-items-center"
          >
            <Icon width={24} icon="material-symbols:light-mode-outline-sharp" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
