import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Header from "./Component/Header";
import FooterCta from "./Component/FooterCta";

export const metadata: Metadata = {
  title: "LearningLoom",
  description: "Education learning landing page"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <FooterCta />
      </body>
    </html>
  );
}
