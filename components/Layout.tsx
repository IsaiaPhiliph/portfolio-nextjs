import { Fira_Code } from "next/font/google";
import Header from "./Header";
import { useLocalStorage } from "usehooks-ts";
import { useEffect, useState } from "react";

const firaCode = Fira_Code({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${firaCode.className} flex-1 flex flex-col`}>
      <div className="bg-white dark:bg-background flex-1 text-gray-700 dark:text-white">
        <Header />
        <main className="flex flex-col flex-1">{children}</main>
      </div>
    </div>
  );
}
