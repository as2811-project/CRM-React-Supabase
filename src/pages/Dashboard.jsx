import React from "react";
//import { SideNav } from "../components/SideNav.jsx";
import { ContactsCard } from "../components/ContactsCard";
import { DealsCard } from "../components/DealsCard";
import { RevPlot } from "../components/RevPlotCard";
import { TasksCard } from "../components/TasksCard";
import { Meetings } from "../components/ScheduleCard";
import { Sidebar } from "../layouts/SideLayout";

export const Dashboard = () => {
  return (
    <div>
      <Sidebar />
      <div className="dashboard-content mx-auto ml-64">
        <h1 className="text-2xl font-light mb-3 text-white">Dashboard</h1>
        <p className="mb-5 text-white text-sm">
          Here's an overview of your business.
        </p>

        <div className="grid grid-cols-2 gap-4">
          {/* Summary of Contacts */}
          <ContactsCard />
          {/* Summary of Deals */}
          <DealsCard />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <RevPlot />
          <TasksCard />
        </div>
        <Meetings />
      </div>
    </div>
  );
};

export default Dashboard;
