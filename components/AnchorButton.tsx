import { Icon } from "@iconify-icon/react";
import { motion } from "framer-motion";
import Link, { LinkProps } from "next/link";

export type AnchorButtonProps = {
  variant: "primary" | "gray";
  icon?: string;
  children: React.ReactNode;
} & LinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function AnchorButton({
  variant,
  icon,
  children,
  ...rest
}: AnchorButtonProps) {
  return (
    <motion.div
      className="w-max"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        {...rest}
        className={`py-2 flex items-center gap-4 transition-colors hover:bg-opacity-20 
      ${
        variant === "primary"
          ? "hover:bg-primary border-primary hover:text-primary"
          : "hover:bg-customGray border-customGray dark:text-customGray"
      }
      w-max px-4 border`}
      >
        {children}
        {icon && <Icon className="" width={24} icon={icon} />}
      </Link>
    </motion.div>
  );
}
