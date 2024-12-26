import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Montserrat } from "next/font/google"

const montserrat = Montserrat(
  {subsets:["latin"]}
)
export const metadata: Metadata = {
  title: "Manuel Latorre",
  description: "Desarrollador Fullstack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
  className={`${montserrat.className} antialiased scrollbar-hide p-5 flex items-center justify-center min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
