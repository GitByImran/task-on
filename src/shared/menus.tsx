import {
  BellDot,
  Calendar,
  Files,
  Folders,
  LayoutDashboard,
  ListChecks,
  PenSquare,
  Proportions,
  Users,
} from "lucide-react";

export const Dash_Menus = [
  {
    label: "Dashboard",
    icon: <LayoutDashboard size={20} />,
    goto: "/",
  },
  { label: "Create Task", icon: <PenSquare size={20} />, goto: "/create-task" },
  { label: "Projects", icon: <Folders size={20} />, goto: "/projects" },
  { label: "Tasks", icon: <ListChecks size={20} />, goto: "/tasks" },
  {
    label: "Notifications",
    icon: <BellDot size={20} />,
    goto: "/notifications",
  },
  { label: "Calendar", icon: <Calendar size={20} />, goto: "/calendar" },
  { label: "Teams", icon: <Users size={20} />, goto: "/teams" },
  { label: "Files", icon: <Files size={20} />, goto: "/files" },
  { label: "Reports", icon: <Proportions size={20} />, goto: "/reports" },
];

export const Nav_Menus = [];
