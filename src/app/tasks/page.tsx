import { ListChecks } from "lucide-react";
import React from "react";

const TasksPage = () => {
  return (
    <div className="space-y-8 p-4">
      <div className="flex items-center gap-2  px-3 text-lg text-accent-foreground">
        <ListChecks size={20} strokeWidth={2} />
        <span className="text-xl font-bold">Tasks</span>
      </div>
    </div>
  );
};

export default TasksPage;
