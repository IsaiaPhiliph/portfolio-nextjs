import { Fira_Code } from "next/font/google";
import Header from "./Header";
import { useLocalStorage } from "usehooks-ts";
import { useEffect, useState } from "react";

const firaCode = Fira_Code({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${firaCode.className}`}>
      <div className="bg-white dark:bg-background text-gray-700 dark:text-white">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
}
