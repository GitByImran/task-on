import React from "react";
import { Calendar } from "lucide-react";
const CalendarPage = () => {
  return (
    <div className="space-y-8 p-4">
      <div className="flex items-center gap-2  px-3 text-lg text-accent-foreground">
        <Calendar size={20} strokeWidth={2} />
        <span className="text-xl font-bold text-accent-foreground">
          Calendar
        </span>
      </div>
    </div>
  );
};

export default CalendarPage;
