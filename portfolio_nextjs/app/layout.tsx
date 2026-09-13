import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Andre Afrillian – Product-minded Technologist",
  description:
    "Product-minded technologist turning complex ideas into useful digital experiences. Combining product thinking, systems, data, AI, and interaction.",
  icons: {
    icon: "/assets/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`relative min-h-screen overflow-x-hidden bg-white ${plusJakartaSans.className} text-[#1a1d1a] antialiased`}>
        {children}
      </body>
    </html>
  );
}
