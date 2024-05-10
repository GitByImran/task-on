"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Dash_Menus } from "@/shared/menus";
import Link from "next/link";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import ThemeToggler from "./themeToggler";
import Profile from "@/shared/profile";

const Sidebar = () => {
  const { theme } = useTheme();
  const [showLabel, setShowLabel] = useState(true);
  const pathname = usePathname();
  const isActive = (path: any) => pathname === path;

  return (
    <div className="p-4 h-screen overflow-y-auto flex flex-col space-y-8">
      <div
        className="logo flex items-center gap-2"
        onClick={() => setShowLabel(!showLabel)}
      >
        <img src="/logo.png" alt="" className="h-6 w-6" />
        {showLabel && (
          <h2 className="text-2xl font-bold capitalize">
            task <sup className="text-md font-normal lowercase">on</sup>
          </h2>
        )}
      </div>

      <ul className="space-y-4">
        {Dash_Menus.map((menu, index) => (
          <li key={index} className={isActive(menu.goto) ? "" : ""}>
            <Link href={menu.goto} className="flex items-center gap-2">
              <span>{menu.icon}</span>
              {showLabel && (
                <span className={`whitespace-nowrap`}>{menu.label}</span>
              )}
            </Link>
          </li>
        ))}
        <li className="flex items-center gap-2">
          <ThemeToggler showLabel={showLabel} />
        </li>
      </ul>
      <Profile showLabel={showLabel} />
    </div>
  );
};

export default Sidebar;
