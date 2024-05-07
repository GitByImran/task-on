"use client";
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
            className="border border-gray-300 px-4 py-2 rounded-md"
          />
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <select
            value={selectedTeam}
            onChange={handleTeamChange}
            className="border border-gray-300 px-4 py-2 rounded-md"
          >
            <option value="">Select Team</option>
            {/* Populate select options with unique team names */}
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
            className="border border-gray-300 px-4 py-2 rounded-md"
          >
            <option value="">Select Designation</option>
            {/* Populate select options with unique designations */}
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
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-200 px-4 py-2 text-left">Name</th>
            <th className="border border-gray-200 px-4 py-2 text-left">
              Email
            </th>
            <th className="border border-gray-200 px-4 py-2 text-left">Team</th>
            <th className="border border-gray-200 px-4 py-2 text-left">
              Designation
            </th>
            <th className="border border-gray-200 px-4 py-2 text-left">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((user) => (
            <tr key={user.id} className="hover:bg-gray-100">
              <td className="border border-gray-200 px-4 py-2">{user.name}</td>
              <td className="border border-gray-200 px-4 py-2">{user.email}</td>
              <td className="border border-gray-200 px-4 py-2">{user.team}</td>
              <td className="border border-gray-200 px-4 py-2">
                {user.designation}
              </td>
              <td className="border border-gray-200 px-4 py-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                  Edit
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MemberList;
