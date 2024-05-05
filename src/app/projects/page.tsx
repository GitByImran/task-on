import { AiOutlineProject } from "react-icons/ai";
import React from "react";
import { Folders } from "lucide-react";

const Projects = () => {
  return (
    <div>
      <div className="flex items-center gap-2  px-3 text-lg text-slate-800">
        <Folders size={20} strokeWidth={2} />
        <span className="text-xl font-bold">Projects</span>
      </div>
    </div>
  );
};

export default Projects;
