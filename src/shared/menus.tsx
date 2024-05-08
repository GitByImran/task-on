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
    icon: <LayoutDashboard size={16} />,
    goto: "/",
  },
  { label: "Create Task", icon: <PenSquare size={16} />, goto: "/create-task" },
  { label: "Projects", icon: <Folders size={16} />, goto: "/projects" },
  { label: "Tasks", icon: <ListChecks size={16} />, goto: "/tasks" },
  {
    label: "Notifications",
    icon: <BellDot size={16} />,
    goto: "/notifications",
  },
  { label: "Calendar", icon: <Calendar size={16} />, goto: "/calendar" },
  { label: "Teams", icon: <Users size={16} />, goto: "/teams" },
  { label: "Files", icon: <Files size={16} />, goto: "/files" },
  { label: "Reports", icon: <Proportions size={16} />, goto: "/reports" },
];

export const Nav_Menus = [];
