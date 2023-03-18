import { Icon } from "@iconify-icon/react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);

  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const toggle = () => (theme == "dark" ? setTheme("light") : setTheme("dark"));

  console.log(theme, systemTheme);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <AnimatePresence mode="popLayout">
        {theme === "dark" && (
          <motion.button
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            onClick={toggle}
            className="grid place-items-center"
          >
            <Icon width={24} icon="material-symbols:dark-mode-outline" />
          </motion.button>
        )}
      </AnimatePresence>
      <AnimatePresence mode="popLayout">
        {theme !== "dark" && (
          <motion.button
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            onClick={toggle}
            className="grid place-items-center"
          >
            <Icon width={24} icon="material-symbols:light-mode-outline-sharp" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
