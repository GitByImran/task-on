import { ListChecks } from "lucide-react";
import React from "react";

const TasksPage = () => {
  return (
    <div>
      <div className="flex items-center gap-2  px-3 text-lg text-slate-800">
        <ListChecks size={20} strokeWidth={2} />
        <span className="text-xl font-bold">Tasks</span>
      </div>
    </div>
  );
};

export default TasksPage;
