import type { Metadata } from "next";
import "./globals.css";
import PlausibleProvider from "next-plausible";

export const metadata: Metadata = {
  title: "The Tiny Colossus",
  description: "The Tiny Colossus Game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <PlausibleProvider
          domain="littlecolossus.com"
          customDomain="https://analytics.codeink.be"
        />
      </head>
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
