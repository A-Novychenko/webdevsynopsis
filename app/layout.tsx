import {NavLinkList} from "@/components/Navigation/NavLinkList/NavLinkList";
import "./globals.css";
import type {Metadata} from "next";
import {Inter} from "next/font/google";

import styles from "./page.module.css";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "WDS",
  description: "WDS",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavLinkList />
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
