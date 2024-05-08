import { BellDot } from "lucide-react";
import React from "react";

const NotificationsPage = () => {
  return (
    <div className="space-y-8 p-4">
      <div className="flex items-center gap-2  px-3 text-lg text-accent-foreground">
        <BellDot size={20} strokeWidth={2} />
        <span className="text-xl font-bold text-accent-foreground">
          Notifications
        </span>
      </div>
    </div>
  );
};

export default NotificationsPage;
