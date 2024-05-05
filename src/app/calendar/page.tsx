import React from "react";
import { Calendar } from "lucide-react";
const CalendarPage = () => {
  return (
    <div>
      <div className="flex items-center gap-2  px-3 text-lg text-slate-800">
        <Calendar size={20} strokeWidth={2} />
        <span className="text-xl font-bold">Calendar</span>
      </div>
    </div>
  );
};

export default CalendarPage;
