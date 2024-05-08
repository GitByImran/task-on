"use client";

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

const SearchMember = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter users based on search query
  const filteredUsers = testUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.designation.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="text-sm">
      <input
        type="text"
        placeholder="name / designation"
        className="border w-full h-full px-3 py-1"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="mt-2 max-h-36 overflow-y-auto">
        {filteredUsers.map((user, index) => (
          <p key={index} className="px-3 py-1 cursor-pointer">
            {user.name} - {user.designation}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SearchMember;
