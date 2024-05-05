import {
  Calendar,
  Files,
  Folders,
  LayoutDashboard,
  ListChecks,
  Mail,
  PenSquare,
  Proportions,
  Settings,
  Users,
} from "lucide-react";

export const Dash_Menus = [
  {
    label: "Dashboard",
    icon: <LayoutDashboard size={16} />,
    goto: "/dashboard",
  },
  { label: "Create Task", icon: <PenSquare size={16} />, goto: "/create-task" },
  { label: "Projects", icon: <Folders size={16} />, goto: "/projects" },
  { label: "Tasks", icon: <ListChecks size={16} />, goto: "/tasks" },
  { label: "Calendar", icon: <Calendar size={16} />, goto: "/calendar" },
  { label: "Teams", icon: <Users size={16} />, goto: "/teams" },
  { label: "Messages", icon: <Mail size={16} />, goto: "/messages" },
  { label: "Files", icon: <Files size={16} />, goto: "/files" },
  { label: "Reports", icon: <Proportions size={16} />, goto: "/reports" },
  { label: "Settings", icon: <Settings size={16} />, goto: "/settings" },
];

export const Nav_Menus = [];
