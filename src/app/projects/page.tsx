"use client";

import React, { useEffect, useState } from "react";
import { Folders } from "lucide-react";

const Projects = () => {
  const [isClient, setIsClient] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const getProjects = localStorage.getItem("projects") || "";
    setProjects(getProjects ? JSON.parse(getProjects) : "");
  }, [isClient]);

  console.log(projects);
  return (
    <div className="p-4 space-y-8">
      <div className="flex items-center gap-2  px-3 text-lg text-accent-foreground">
        <Folders size={20} strokeWidth={2} />
        <span className="text-xl font-bold text-accent-foreground">
          Projects
        </span>
      </div>
      {projects ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project: any) => (
            <div
              key={project.id}
              className="border rounded-lg overflow-hidden shadow"
            >
              <div className="flex items-center gap-2">
                <img src={""} alt={""} className="h-60 w-full object-cover" />
              </div>
              <div className="space-y-4 p-4">
                <p className="text-sm">
                  <span className="mr-1 font-semibold whitespace-nowrap">
                    Title :
                  </span>
                  {project.title}
                </p>

                <p className="text-sm">
                  <span className="mr-1 font-semibold whitespace-nowrap">
                    Brief :
                  </span>
                  {project.brief.length > 100
                    ? `${project.brief.slice(0, 200)}...`
                    : project.brief}
                </p>

                <p className="text-sm">
                  <span className="mr-1 font-semibold whitespace-nowrap">
                    Deadline :
                  </span>
                  {project.deadline}
                </p>

                <div className="flex items-center gap-2 overflow-x-auto pb-2">
                  <span className="text-sm font-semibold whitespace-nowrap">
                    Assign to :
                  </span>
                  {project.teams.map((team: any, index: number) => (
                    <p className="border px-2 py-1 text-sm" key={index}>
                      {team}
                    </p>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <button className="px-4 py-2 bg-cyan-600 hover:bg-cyan-800 text-sm capitalize text-white rounded">
                    Details
                  </button>
                  <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-800 text-sm capitalize text-white rounded">
                    Accept
                  </button>
                  <button className="px-4 py-2 bg-red-600 hover:bg-red-800 text-sm capitalize text-white rounded">
                    Deny
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>No projects created yet!</div>
      )}
    </div>
  );
};

export default Projects;
