import type { Metadata } from "next";
import { DM_Sans, Poppins } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";

import SvgHome from "@/components/svgs/SvgHome";
import SvgPlace from "@/components/svgs/SvgPlace";
import SvgChat from "@/components/svgs/SvgChat";
import Image from "next/image"; // Keep Image import as it's used for propertyTabs icons
import SvgHeart from "@/components/svgs/SvgHeart";
import SvgAccord2 from "@/components/svgs/SvgAccord2";
import SvgCog from "@/components/svgs/SvgCog";
import DesktopTabItem from "@/components/DesktopTabItem";
import MobileTabItem from "@/components/MobileTabItem";

const tabs = [
  {
    name: "Home",
    icon: <SvgHome />,
    path: "/",
  },
  {
    name: "Leisure", // Assuming SvgPlace is used here
    icon: <SvgPlace />, // SvgPlace is used here
    path: "/leisure", // Path for leisure
  },

  {
    name: "Saves",
    icon: <SvgHeart />, // SvgHeart is used here
    path: "/saves",
  },
  {
    name: "Chats",
    icon: <SvgChat />,
    path: "/chats",
    tag: 10,
  },
  {
    name: "Account",
    icon: (
      <span className="size-6 overflow-hidden bg-pink-200 block rounded-full">
        <Image
          src="/avatar.png"
          width={150}
          height={150}
          alt="Picture of an avatar"
        />
      </span>
    ),
    path: "/account",
  },
];

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "sases",
  description:
    "Find properties for sale or rent with ease. Browse listings, connect with agents, and discover your next home.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${poppins.variable} antialiased`}>
        <div className="flex font-[family-name:var(--font-poppins)] bg-white h-screen min-h-screen w-screen overflow-hidden">
          <div className="fixed bottom-0 w-screen p-2 bg-white shadow-2xl left-0 sm:hidden z-50 pb-8 pt-2">
            <ul className="flex text-xs">
              {tabs.map((tab) => (
                <li key={tab.name} className="flex-shrink-0">
                  <MobileTabItem tab={tab} />
                </li>
              ))}
              <li></li>
            </ul>
          </div>

          <div className="min-w-60 bg-gray-50  h-full border-r border-r-gray-200 md:flex md:flex-col hidden">
            <div className="p-5 px-7 font-semibold text-2xl border-b border-b-gray-200 relative">
              sases
              <button className=" w-7 flex items-center justify-center  absolute -right-3.5 top-0 h-full cursor-pointer">
                <span className="size-6 rounded-full flex justify-center items-center border border-gray-200 bg-white">
                  <SvgAccord2 />
                </span>
              </button>
            </div>
            <ul className="flex flex-col gap-1 text-xs p-3 py-5 flex-1">
              {tabs.map((tab) => (
                <li key={tab.name} className="flex-shrink-0">
                  <DesktopTabItem tab={tab} />
                </li>
              ))}
            </ul>
            <div className="flex gap-4 items-center text-xs p-3 px-6 mb-6">
              <SvgCog />
              <span>System configuration</span>
            </div>
          </div>
          <main className="flex-1 flex-col flex overflow-hidden">
            <Suspense>{children}</Suspense>
          </main>
        </div>
      </body>
    </html>
  );
}
