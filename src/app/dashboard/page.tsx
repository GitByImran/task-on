import { Teams_List } from "@/lib/teamsList";
import { LayoutDashboard } from "lucide-react";
import React from "react";

const DashboardPage = () => {
  return (
    <div className="space-y-4 p-4">
      <div className="flex items-center gap-2 text-lg text-slate-800">
        <LayoutDashboard size={20} strokeWidth={2} />
        <span className="text-xl font-bold">Dashboard</span>
      </div>

      <main className="dash-contents">
        <section className="details grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="border rounded shadow overflow-hidden p-4 space-y-4">
            <h2 className="font-bold text-slate-600">Completed Projects</h2>
            <p className="font-bold text-cyan-500 text-5xl">
              <span>85</span>+
            </p>
          </div>
          <div className="border rounded shadow overflow-hidden p-4 space-y-4">
            <h2 className="font-bold text-slate-600">Respected Client</h2>
            <p className="font-bold text-cyan-500 text-5xl">
              <span>30</span>+
            </p>
          </div>
          <div className="border rounded shadow overflow-hidden p-4 space-y-4">
            <h2 className="font-bold text-slate-600">Working Days</h2>
            <p className="font-bold text-cyan-500 text-5xl">
              <span>75</span>
            </p>
          </div>
          <div className="border rounded shadow overflow-hidden p-4 space-y-4">
            <h2 className="font-bold text-slate-600">Working Teams</h2>

            <div className="flex flex-wrap gap-2 text-xs">
              <p className="font-bold text-cyan-500 text-5xl">
                <span>{Teams_List.length}</span>
              </p>
              {/* {Teams_List.map((team: any, index: number) => (
                <p className="font-semibold border p-1 capitalize" key={index}>
                  {team.label}
                </p>
              ))} */}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DashboardPage;
