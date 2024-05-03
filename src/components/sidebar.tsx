"use client";

import React, { useState } from "react";
import { Dash_Menus } from "@/shared/menus";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";

const Sidebar = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  const [showLabel, setShowLabel] = useState<boolean>(false);

  const handleShowLabel = () => {
    setShowLabel(!showLabel);
  };

  return (
    <div>
      <div className={`${showLabel ? "min-w-[150px]" : "min-w-max"} py-4`}>
        <ul className="space-y-2">
          {showLabel ? (
            <button
              className="px-2 py-2 bg-white text-slate-800 rounded-full hidden sm:block"
              onClick={handleShowLabel}
            >
              <ArrowLeftFromLine size={20} strokeWidth={2} />
            </button>
          ) : (
            <button
              className="px-2 py-2 bg-white text-slate-800 rounded-full hidden sm:block"
              onClick={handleShowLabel}
            >
              <ArrowRightFromLine size={20} strokeWidth={2} />
            </button>
          )}
          {Dash_Menus.map((menu: any, index: number) => (
            <li
              key={index}
              className={`py-2 text-white rounded-lg font-semibold capitalize hover:px-2 hover:bg-white hover:text-slate-800 cursor-pointer ${
                isActive(menu.goto) ? "bg-white text-slate-800 px-2" : ""
              }`}
            >
              <Link
                href={menu.goto}
                className="flex items-center gap-2 h-full w-full"
              >
                <span className="">{menu.icon}</span>
                <span className={`${showLabel ? "block" : "hidden"}`}>
                  {menu.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
