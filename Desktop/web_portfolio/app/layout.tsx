import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Janak Chhatkuli | Portfolio",
  description: "Computer Engineering Student and DevOps Enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${roboto.variable} antialiased selection:bg-cyan-500/30 selection:text-white`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}

