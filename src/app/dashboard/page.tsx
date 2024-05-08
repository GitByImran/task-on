"use client";

import MemberList from "@/components/memberList";
import SearchMember from "@/components/searchMember";
import AddMember from "@/forms/addMember";
import AddTeam from "@/forms/addTeam";
import { Teams_List } from "@/lib/teamsList";
import { LayoutDashboard, Plus, Search, X } from "lucide-react";
import React, { useState } from "react";

const DashboardPage = () => {
  return (
    <div className="space-y-8 p-4">
      <div className="flex items-center gap-2  px-3 text-lg text-accent-foreground">
        <LayoutDashboard size={20} strokeWidth={2} />
        <span className="text-xl font-bold">Dashboard</span>
      </div>

      <main className="dash-contents grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="col-span-1 sm:col-span-2 border rounded shadow overflow-hidden p-4 space-y-4">
          <h2 className="font-bold text-slate-600">Create new member</h2>

          <AddMember />
        </div>
        <div className="col-span-1 border rounded shadow overflow-hidden p-4 space-y-4">
          <h2 className="font-bold text-slate-600">Create new team</h2>

          <AddTeam />
        </div>
        <div className="col-span-1 sm:col-span-2 border rounded shadow overflow-hidden p-4 space-y-4">
          <h2 className="font-bold text-slate-600">Make actions</h2>

          <MemberList />
        </div>
        <div className="col-span-1 border rounded shadow overflow-hidden p-4 space-y-4">
          <h2 className="font-bold text-slate-600">Find user</h2>
          <SearchMember />
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
