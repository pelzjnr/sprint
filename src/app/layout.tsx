import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sprint",
  description: "browser automation api",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
