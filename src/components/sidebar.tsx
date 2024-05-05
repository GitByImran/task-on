"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Dash_Menus } from "@/shared/menus";
import Link from "next/link";

const Sidebar = () => {
  const pathname = usePathname();
  const isActive = (path: any) => pathname === path;

  return (
    <div className="p-4 space-y-4 h-screen overflow-y-auto flex flex-col justify-between">
      <div className="space-y-4">
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
      </div>
      <div className="">
        <img
          src="/dummy-avatar.png"
          alt="profile"
          className="h-8 w-8 object-cover overflow-hidden rounded-full"
        />
        <button></button>
      </div>
    </div>
  );
};

export default Sidebar;
