import { Proportions } from "lucide-react";
import React from "react";

const ReportsPage = () => {
  return (
    <div>
      <div className="flex items-center gap-2  px-3 text-lg text-slate-800">
        <Proportions size={20} strokeWidth={2} />
        <span className="text-xl font-bold">Reports</span>
      </div>
    </div>
  );
};

export default ReportsPage;
