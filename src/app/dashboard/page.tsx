"use client";

import AddMember from "@/forms/addMember";
import AddTeam from "@/forms/addTeam";
import { Teams_List } from "@/lib/teamsList";
import { LayoutDashboard, Plus, Search, X } from "lucide-react";
import React, { useState } from "react";

const testUsers = [
  { name: "John Doe", designation: "Developer" },
  { name: "Jane Smith", designation: "Designer" },
  { name: "Michael Johnson", designation: "Designer" },
  { name: "Emily Davis", designation: "Designer" },
  { name: "Daniel Wilson", designation: "Developer" },
  { name: "Sarah Brown", designation: "Tester" },
  { name: "David Martinez", designation: "Tester" },
  { name: "Jessica Anderson", designation: "Developer" },
  { name: "Christopher Taylor", designation: "Tester" },
  { name: "Amanda Thomas", designation: "Tester" },
];

const DashboardPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter users based on search query
  const filteredUsers = testUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.designation.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8 p-4">
      <div className="flex items-center gap-2 text-lg text-slate-800">
        <LayoutDashboard size={20} strokeWidth={2} />
        <span className="text-xl font-bold">Dashboard</span>
      </div>

      <main className="dash-contents grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="border rounded shadow overflow-hidden p-4 space-y-4 col-span-1 sm:col-span-2">
          <h2 className="font-bold text-slate-600">Create new member</h2>

          <AddMember />
        </div>
        <div className="border rounded shadow overflow-hidden p-4 space-y-4 col-span-1">
          <h2 className="font-bold text-slate-600">Create new team</h2>

          <AddTeam />
        </div>
        <div className="border rounded shadow overflow-hidden p-4 space-y-4 col-span-1">
          <h2 className="font-bold text-slate-600">Find user</h2>
          <div className="text-sm">
            <input
              type="text"
              placeholder="name / designation"
              className="border w-full h-full px-3 py-1"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="mt-2 max-h-20 overflow-y-auto">
              {filteredUsers.map((user, index) => (
                <p key={index} className="px-3 py-1 cursor-pointer">
                  {user.name} - {user.designation}
                </p>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
