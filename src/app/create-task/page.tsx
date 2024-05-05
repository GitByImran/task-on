import { PenSquare } from "lucide-react";
import React from "react";

const CreateTaskPage = () => {
  return (
    <div className="">
      <div className="flex items-center gap-2  px-3 text-lg text-slate-800">
        <PenSquare size={20} strokeWidth={2} />
        <span className="text-xl font-bold">Create Task</span>
      </div>
    </div>
  );
};

export default CreateTaskPage;
