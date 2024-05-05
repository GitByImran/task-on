import PieChartComponent from "@/graphs/pieChart";
import { Settings } from "lucide-react";
import React from "react";

const SettingsPage = () => {
  return (
    <div>
      <div className="flex items-center gap-2  px-3 text-lg text-slate-800">
        <Settings size={20} strokeWidth={2} />
        <span className="text-xl font-bold">Settings</span>
      </div>
    </div>
  );
};

export default SettingsPage;
