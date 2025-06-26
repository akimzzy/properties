"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { JSX } from "react";

export default function MobileTabItem({
  tab,
}: Readonly<{
  tab:
    | {
        name: string;
        icon: JSX.Element;
        path: string;
        tag?: string | number;
      }
    | {
        name: string;
        icon: JSX.Element;
        path: string;
        tag: number;
      };
}>) {
  const pathname = usePathname();
  return (
    <Link
      href={tab.path}
      className={`flex flex-col gap-2 items-center px-5 py-3 rounded-lg ${
        pathname === tab.path
          ? "text-blue-500 font-semibold"
          : "  text-gray-500"
      }`}
    >
      <span className="relative">
        {tab.icon}

        {tab.tag && (
          <span className="absolute left-1 py-0.5 px-1 bg-blue-500 rounded-full text-white text-[9px] -top-1.5 font-semibold">
            {tab.tag}
          </span>
        )}
      </span>
      <span>{tab.name}</span>
    </Link>
  );
}
