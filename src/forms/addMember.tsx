"use client";

import Loader from "@/components/loader";
import React, { useRef, useState } from "react";

const designations = [
  "Managing Director",
  "Project Manager",
  "Frontend Developer",
  "Backend Developer",
  "QA Tester",
  "QA Analyst",
  "Data Analyst",
  "Research Scientist",
  "Cloud Architect",
  "Security Specialist",
];

const teams = [
  "admin",
  "alpha",
  "bita",
  "delta",
  "thanos",
  "zeus",
  "themis",
  "hydra",
  "titans",
];

const AddMember = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    team: "",
    designation: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Make POST request to server
      const response = await fetch("/api/database/member", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Failed to create member: ${response.statusText}`);
      }

      setFormData({
        name: "",
        email: "",
        password: "",
        team: "",
        designation: "",
      });

      // Member created successfully
      console.log("Member created successfully");
      console.log(response);
      setIsLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form className="space-y-4 text-sm" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-xs text-slate-600 font-semibold"
            >
              Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter full name"
              className="border px-2 py-1"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-xs text-slate-600 font-semibold"
            >
              Email*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter email address"
              className="border px-2 py-1"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="text-xs text-slate-600 font-semibold"
            >
              Password*
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Set a temporary password"
              className="border px-2 py-1"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="team"
              className="text-xs text-slate-600 font-semibold"
            >
              Team*
            </label>
            <select
              name="team"
              id="team"
              value={formData.team}
              onChange={handleInputChange}
              className="border h-full p-1"
              required
            >
              <option value="">Select a team</option>
              {teams.map((team, index) => (
                <option value={team} key={index}>
                  {team}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="designation"
              className="text-xs text-slate-600 font-semibold"
            >
              Designation*
            </label>
            <select
              name="designation"
              id="designation"
              value={formData.designation}
              onChange={handleInputChange}
              className="border h-full p-1"
              required
            >
              <option value="">Select a designation</option>
              {designations.map((designation, index) => (
                <option value={designation} key={index}>
                  {designation}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="bg-slate-800 hover:bg-slate-900 text-white px-4 py-2 rounded flex items-center gap-4"
        >
          Add {isLoading && <Loader />}
        </button>
      </form>
    </div>
  );
};

export default AddMember;
