import { CheckCircle, CircleDot, Diamond, Users } from "lucide-react";
import React from "react";

const Teams_List = [
  {
    label: "alpha",
    discipline: "code testing",
    members: [
      {
        name: "John Doe",
        image: "/dummy-avatar.png",
        designation: "QA Tester",
      },
      {
        name: "John Doe",
        image: "/dummy-avatar.png",
        designation: "QA Tester",
      },
      {
        name: "John Doe",
        image: "/dummy-avatar.png",
        designation: "QA Tester",
      },
    ],
  },
  {
    label: "bita",
    discipline: "web development",
    members: [
      {
        name: "Jane Smith",
        image: "/dummy-avatar.png",
        designation: "Frontend Developer",
      },
      {
        name: "Alex Johnson",
        image: "/dummy-avatar.png",
        designation: "Backend Developer",
      },
      {
        name: "Jane Smith",
        image: "/dummy-avatar.png",
        designation: "Frontend Developer",
      },
      {
        name: "Alex Johnson",
        image: "/dummy-avatar.png",
        designation: "Backend Developer",
      },
      {
        name: "Jane Smith",
        image: "/dummy-avatar.png",
        designation: "Frontend Developer",
      },
      {
        name: "Alex Johnson",
        image: "/dummy-avatar.png",
        designation: "Backend Developer",
      },
    ],
  },
  {
    label: "delta",
    discipline: "data analysis",
    members: [
      {
        name: "Emily Brown",
        image: "/dummy-avatar.png",
        designation: "Data Analyst",
      },
      {
        name: "Emily Brown",
        image: "/dummy-avatar.png",
        designation: "Data Analyst",
      },
    ],
  },
  {
    label: "thanos",
    discipline: "security",
    members: [
      {
        name: "Thanos",
        image: "/dummy-avatar.png",
        designation: "Security Specialist",
      },
      {
        name: "Thanos",
        image: "/dummy-avatar.png",
        designation: "Security Specialist",
      },
      {
        name: "Thanos",
        image: "/dummy-avatar.png",
        designation: "Security Specialist",
      },
    ],
  },
  {
    label: "zeus",
    discipline: "cloud computing",
    members: [
      {
        name: "Zeus",
        image: "/dummy-avatar.png",
        designation: "Cloud Architect",
      },
      {
        name: "Zeus",
        image: "/dummy-avatar.png",
        designation: "Cloud Architect",
      },
    ],
  },
  {
    label: "themis",
    discipline: "quality assurance",
    members: [
      {
        name: "Themis",
        image: "/dummy-avatar.png",
        designation: "QA Analyst",
      },
      {
        name: "Themis",
        image: "/dummy-avatar.png",
        designation: "QA Analyst",
      },
      {
        name: "Themis",
        image: "/dummy-avatar.png",
        designation: "QA Analyst",
      },
      {
        name: "Themis",
        image: "/dummy-avatar.png",
        designation: "QA Analyst",
      },
      {
        name: "Themis",
        image: "/dummy-avatar.png",
        designation: "QA Analyst",
      },
    ],
  },
  {
    label: "hydra",
    discipline: "project management",
    members: [
      {
        name: "Hydra",
        image: "/dummy-avatar.png",
        designation: "Project Manager",
      },
      {
        name: "Hydra",
        image: "/dummy-avatar.png",
        designation: "Project Manager",
      },
      {
        name: "Hydra",
        image: "/dummy-avatar.png",
        designation: "Project Manager",
      },
    ],
  },
  {
    label: "titans",
    discipline: "research and development",
    members: [
      {
        name: "Titans",
        image: "/dummy-avatar.png",
        designation: "Research Scientist",
      },
      {
        name: "Titans",
        image: "/dummy-avatar.png",
        designation: "Research Scientist",
      },
      {
        name: "Titans",
        image: "/dummy-avatar.png",
        designation: "Research Scientist",
      },
      {
        name: "Titans",
        image: "/dummy-avatar.png",
        designation: "Research Scientist",
      },
      {
        name: "Titans",
        image: "/dummy-avatar.png",
        designation: "Research Scientist",
      },
    ],
  },
];

const TeamsPage = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-2  px-3 text-lg text-slate-800">
        <Users size={20} strokeWidth={2} />
        <span className="text-xl font-bold">Teams</span>
      </div>
      <main className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {Teams_List.map((team: any, index: number) => (
            <div key={index} className="space-y-2 p-4 border rounded-lg shadow">
              <div className="flex items-center gap-1">
                <CheckCircle size={14} fill="green" stroke="white" />
                {/* todo: this will replace with team logo */}
                <h2 className="font-semibold capitalize">{team.label}</h2>
              </div>

              <h2 className="text-sm font-semibold capitalize text-slate-500">
                {team.discipline}
              </h2>
              <div className="flex flex-wrap items-center gap-1">
                {team.members.map((member: any, index: number) => (
                  <img
                    key={index}
                    src={member.image}
                    alt=""
                    title={member.name}
                    className="h-8 w-8 rounded-full object-cover overflow-hidden"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default TeamsPage;
