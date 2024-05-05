import { LayoutDashboard } from "lucide-react";
import React from "react";

const DashboardPage = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2  px-3 text-lg text-slate-800">
        <LayoutDashboard size={20} strokeWidth={2} />
        <span className="text-xl font-bold">Dashboard</span>
      </div>

      <main className="dash-contents"></main>
    </div>
  );
};

export default DashboardPage;
