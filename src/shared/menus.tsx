import {
  Calendar,
  File,
  Folder,
  LayoutDashboard,
  ListChecks,
  Mail,
  Proportions,
  Settings,
  Users,
} from "lucide-react";

export const Dash_Menus = [
  { label: "Dashboard", icon: <LayoutDashboard size={20} />, goto: "/" },
  { label: "Projects", icon: <Folder size={20} />, goto: "/projects" },
  { label: "Tasks", icon: <ListChecks size={20} />, goto: "/tasks" },
  { label: "Calendar", icon: <Calendar size={20} />, goto: "/calendar" },
  { label: "Teams", icon: <Users size={20} />, goto: "/teams" },
  { label: "Messages", icon: <Mail size={20} />, goto: "/messages" },
  { label: "Files", icon: <File size={20} />, goto: "/files" },
  { label: "Reports", icon: <Proportions size={20} />, goto: "/reports" },
  { label: "Settings", icon: <Settings size={20} />, goto: "/settings" },
];

export const Nav_Menus = [];
