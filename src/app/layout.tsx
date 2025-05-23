import type { Metadata } from "next";
import "./globals.css";
import { Suspense } from "react";
import MainNavBar from "@/components/MainNavBar";
import { Providers } from "@/lib/providers";

export const metadata: Metadata = {
  title: "Project Keystone",
  description: "A TTRPG work in progress",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense>
      <html lang="en">
        <body>
          <Providers>
            <MainNavBar />
            {children}
          </Providers>
        </body>
      </html>
    </Suspense>
  );
}
