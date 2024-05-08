"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Dash_Menus } from "@/shared/menus";
import Link from "next/link";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const Sidebar = () => {
  const { setTheme, theme } = useTheme();
  const pathname = usePathname();
  const isActive = (path: any) => pathname === path;

  console.log(theme);

  return (
    <div className="p-4 h-screen overflow-y-auto flex flex-col space-y-8">
      <div className="logo">
        <h2 className="text-3xl font-bold capitalize">
          task <sup className="text-lg font-semibold lowercase">on</sup>
        </h2>
      </div>

      <ul className="space-y-4">
        {Dash_Menus.map((menu, index) => (
          <li key={index} className={isActive(menu.goto) ? "" : ""}>
            <Link href={menu.goto} className="flex items-center gap-2">
              <span>{menu.icon}</span>
              <span className={`whitespace-nowrap`}>{menu.label}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="">
        {/* <img
          src="/dummy-avatar.png"
          alt="profile"
          className="h-8 w-8 object-cover overflow-hidden rounded-full"
        /> */}
        <div className="flex items-center gap-2">
          <button>
            <Sun
              size={30}
              onClick={() => setTheme("light")}
              className={`${theme === "light" && "text-cyan-500"} p-1`}
            />
          </button>
          <button>
            <Moon
              size={30}
              onClick={() => setTheme("dark")}
              className={`${theme === "dark" && "text-cyan-500"} p-1`}
            />
          </button>
          <button>
            <Monitor
              size={30}
              onClick={() => setTheme("system")}
              className={`p-1`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
