import { Files } from "lucide-react";
import React from "react";

const FilesPage = () => {
  return (
    <div>
      <div className="flex items-center gap-2  px-3 text-lg text-slate-800">
        <Files size={20} strokeWidth={2} />
        <span className="text-xl font-bold">Files</span>
      </div>
    </div>
  );
};

export default FilesPage;
