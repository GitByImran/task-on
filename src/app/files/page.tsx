import { Files } from "lucide-react";
import React from "react";

const FilesPage = () => {
  return (
    <div className="space-y-8 p-4">
      <div className="flex items-center gap-2  px-3 text-lg text-accent-foreground">
        <Files size={20} strokeWidth={2} />
        <span className="text-xl font-bold text-accent-foreground">Files</span>
      </div>
    </div>
  );
};

export default FilesPage;
