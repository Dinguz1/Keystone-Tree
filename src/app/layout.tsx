import type { Metadata } from "next";
import "./globals.css";
import { Suspense } from "react";
import Navbar from "@/components/Navbar";
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
            <Navbar />
            {children}
          </Providers>
        </body>
      </html>
    </Suspense>
  );
}
