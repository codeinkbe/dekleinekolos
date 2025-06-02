import type { Metadata } from "next";
import "./globals.css";

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
      <body
        className={` antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
