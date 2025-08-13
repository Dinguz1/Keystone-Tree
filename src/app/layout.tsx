import type { Metadata } from "next";
import "./globals.css";
import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
        <body className="bg-(--bg-primary) text-(--color-primary) flex flex-col gap-2 min-h-screen items-center">
          <main className="min-h-screen flex flex-col justify-between">
            <Navbar />
            <div className="px-8 my-12 xl:my-8">
              {children}
            </div>
            <Footer />
          </main>
        </body>
      </html>
    </Suspense>
  );
}
