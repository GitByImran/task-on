"use client";
import { PenSquare, Trash } from "lucide-react";
import React, { useState } from "react";

interface UserData {
  id: number;
  name: string;
  email: string;
  team: string;
  designation: string;
}

const userData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    team: "Team A",
    designation: "Developer",
  },
  {
    id: 2,
    name: "Jack smith",
    email: "jane@example.com",
    team: "Team B",
    designation: "Designer",
  },
  {
    id: 3,
    name: "Jane Doe",
    email: "jane@example.com",
    team: "Team C",
    designation: "Tester",
  },
  {
    id: 4,
    name: "Jane Doe",
    email: "jane@example.com",
    team: "Team C",
    designation: "Tester",
  },
  {
    id: 5,
    name: "Jane Doe",
    email: "jane@example.com",
    team: "Team C",
    designation: "Tester",
  },
];

const MemberList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedTeam, setSelectedTeam] = useState<string>("");
  const [selectedDesignation, setSelectedDesignation] = useState<string>("");

  // handle search
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // handle team select change
  const handleTeamChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTeam(e.target.value);
  };

  // handle designation select change
  const handleDesignationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDesignation(e.target.value);
  };

  // handle data based on search query
  let filteredData = userData.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // handle data based on selected team
  if (selectedTeam) {
    filteredData = filteredData.filter((user) => user.team === selectedTeam);
  }

  // handle data based on selected designation
  if (selectedDesignation) {
    filteredData = filteredData.filter(
      (user) => user.designation === selectedDesignation
    );
  }

  return (
    <div className="w-full overflow-x-auto">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <div>
          <input
            type="text"
            placeholder="Search by name..."
            value={searchQuery}
            onChange={handleSearch}
            className="border border-gray-300 rounded px-2 py-1 text-sm"
          />
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <select
            value={selectedTeam}
            onChange={handleTeamChange}
            className="border border-gray-300 rounded px-2 py-1 text-sm"
          >
            <option value="">Select Team</option>
            {Array.from(new Set(userData.map((user) => user.team))).map(
              (team, index) => (
                <option key={index} value={team}>
                  {team}
                </option>
              )
            )}
          </select>
          <select
            value={selectedDesignation}
            onChange={handleDesignationChange}
            className="border border-gray-300 rounded px-2 py-1 text-sm"
          >
            <option value="">Select Designation</option>
            {Array.from(new Set(userData.map((user) => user.designation))).map(
              (designation, index) => (
                <option key={index} value={designation}>
                  {designation}
                </option>
              )
            )}
          </select>
        </div>
      </div>
      <div className="max-h-36 overflow-y-auto">
        <table className="w-full">
          <thead className="sticky top-0">
            <tr className="bg-black/30 backdrop-blur-lg">
              <th className="font-semibold text-left text-sm py-2 px-2">
                Name
              </th>
              <th className="font-semibold text-left text-sm py-2 px-2">
                Email
              </th>
              <th className="font-semibold text-left text-sm py-2 px-2">
                Team
              </th>
              <th className="font-semibold text-left text-sm py-2 px-2">
                Designation
              </th>
              <th className="font-semibold text-left text-sm py-2 px-2">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length >= 1 ? (
              filteredData.map((user) => (
                <tr key={user.id} className="hover:bg-black/30">
                  <td className="text-left text-sm py-2 px-2">{user.name}</td>
                  <td className="text-left text-sm py-2 px-2">{user.email}</td>
                  <td className="text-left text-sm py-2 px-2">{user.team}</td>
                  <td className="text-left text-sm py-2 px-2">
                    {user.designation}
                  </td>
                  <td className="flex items-center gap-2 py-2 px-2">
                    <button className="">
                      <PenSquare size={16} />
                    </button>
                    <button className="">
                      <Trash size={16} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <p className="text-sm p-2">No data found!</p>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MemberList;
