import { Teams_List } from "@/lib/teamsList";
import React from "react";

const designations = [
  "Frontend Developer",
  "Backend Developer",
  "QA Tester",
  "QA Analyst",
  "Data Analyst",
  "Project Manager",
  "Research Scientist",
  "Cloud Architect",
  "Security Specialist",
];

const teams = [
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
  return (
    <div>
      <form className="space-y-4 text-sm">
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
              placeholder="enter full name"
              className="border px-2 py-1"
              required={true}
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
              placeholder="enter email address"
              className="border px-2 py-1"
              required={true}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="text-xs text-slate-600 font-semibold"
            >
              password*
            </label>
            <input
              type="password"
              placeholder="set a temporary password"
              className="border px-2 py-1"
              required={true}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="team"
              className="text-xs text-slate-600 font-semibold"
            >
              Assign*
            </label>
            <select
              name="team"
              id="team"
              className="border h-full p-1"
              required={true}
            >
              <option value="" className="text-muted-foreground">
                Select a team
              </option>
              {teams.map((team: any, index: number) => (
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
              Assign*
            </label>
            <select
              name="designation"
              id="designation"
              className="border h-full p-1"
              required={true}
            >
              <option value="" className="text-muted-foreground">
                Select a designation
              </option>
              {designations.map((designation: any, index: number) => (
                <option value={designation} key={index}>
                  {designation}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="bg-slate-800 hover:bg-slate-900 text-white px-4 py-2 rounded flex items-center gap-2"
        >
          Add{" "}
          <span className="-mt-1">
            {/* <UserCheck size={16} strokeWidth={3} /> */}
          </span>
        </button>
      </form>
    </div>
  );
};

export default AddMember;
