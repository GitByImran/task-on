import { Users } from "lucide-react";
import React from "react";

const TeamsPage = () => {
  return (
    <div>
      <div className="flex items-center gap-2  px-3 text-lg text-slate-800">
        <Users size={20} strokeWidth={2} />
        <span className="text-xl font-bold">Teams</span>
      </div>
    </div>
  );
};

export default TeamsPage;
