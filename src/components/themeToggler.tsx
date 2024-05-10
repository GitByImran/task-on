"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

const ThemeToggler = ({ showLabel }: any) => {
  const { setTheme, theme } = useTheme();
  return (
    <div className="flex items-center gap-2">
      {theme === "light" ? (
        <button className="flex items-center gap-2">
          <Moon size={20} onClick={() => setTheme("dark")} className={``} />
          {showLabel && <span>Dark Mode</span>}
        </button>
      ) : (
        <button className="flex items-center gap-2">
          <Sun size={20} onClick={() => setTheme("light")} className={``} />
          {showLabel && <span>Light Mode</span>}
        </button>
      )}
    </div>
  );
};

export default ThemeToggler;
