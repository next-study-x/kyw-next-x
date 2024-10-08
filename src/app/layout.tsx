import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MSWCompoent } from "./_component/MXWCompoent";
import AuthSession from "./_component/AuthSession";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>
        <MSWCompoent />
        <AuthSession>{children}</AuthSession>
      </body>
    </html>
  );
}
