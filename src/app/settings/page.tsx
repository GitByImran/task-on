"use client";

import AddMember from "@/components/addMember";
import MemberList from "@/components/memberList";
import { Teams_List } from "@/lib/teamsList";
import { ChevronDown, ChevronUp, Settings, UserCheck } from "lucide-react";
import React, { useState } from "react";

const SettingsPage = () => {
  const [addNewMemberForm, setAddNewMemberForm] = useState<boolean>(false);
  const [showAllMemberList, setShowAllMemberList] = useState<boolean>(false);

  return (
    <div className="p-4 space-y-8">
      <div className="flex items-center gap-2  px-3 text-lg text-slate-800">
        <Settings size={20} strokeWidth={2} />
        <span className="text-xl font-bold">Settings</span>
      </div>
      <div className="space-y-4">
        {/*  */}
        <div className="space-y-4 border p-4">
          <div
            className="flex items-center justify-between gap-5 cursor-pointer"
            onClick={() => setAddNewMemberForm(!addNewMemberForm)}
          >
            <h2 className="text-lg text-slate-600 font-bold">
              Add a new member
            </h2>

            {addNewMemberForm ? <ChevronUp /> : <ChevronDown />}
          </div>
          {addNewMemberForm && <AddMember />}
        </div>
        {/*  */}
        <div className="space-y-4 border p-4">
          <div
            className="flex items-center justify-between gap-5 cursor-pointer"
            onClick={() => setShowAllMemberList(!showAllMemberList)}
          >
            <h2 className="text-lg text-slate-600 font-bold">
              Show all member
            </h2>

            {showAllMemberList ? <ChevronUp /> : <ChevronDown />}
          </div>
          {showAllMemberList && <MemberList />}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
