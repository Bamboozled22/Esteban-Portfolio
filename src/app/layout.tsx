import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const switzer = localFont({
  src: [
    {
      path: "../fonts/Switzer-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Switzer-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-switzer",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Esteban Abinal-Bally",
  description:
    "World designer portfolio. Esteban Abinal-Bally is a world level designer at Ubisoft Montreal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={switzer.variable}>
      <body>{children}</body>
    </html>
  );
}
