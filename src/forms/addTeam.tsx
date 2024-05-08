import { Plus, X } from "lucide-react";
import React from "react";

const AddTeam = () => {
  return (
    <form className="flex flex-wrap gap-2 text-sm">
      <input
        type="text"
        placeholder="Enter team name"
        className="w-full border px-2 py-1"
      />
      <input
        type="text"
        placeholder="Enter team designation"
        className="w-full border px-2 py-1"
      />
      <button
        type="submit"
        className="bg-slate-800 hover:bg-slate-900 text-white px-4 py-2 rounded flex items-center gap-2"
      >
        Add{" "}
        <span className="-mt-1">
          {/* <Plus size={16} strokeWidth={3} /> */}
        </span>
      </button>
      <button className="bg-red-600 hover:bg-red-800 text-white px-4 py-2 rounded flex items-center gap-2">
        Discard
        {/* <X size={16} strokeWidth={3} /> */}
      </button>
    </form>
  );
};

export default AddTeam;
