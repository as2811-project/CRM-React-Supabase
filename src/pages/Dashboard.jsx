import React from "react";
//import { SideNav } from "../components/SideNav.jsx";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

export const Dashboard = () => {
  // Sample data for contacts, deals, and tickets
  const contacts = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "987-654-3210",
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike@example.com",
      phone: "555-123-4567",
    },
  ];

  const deals = [
    { id: 1, name: "Deal 1", amount: 1000, status: "Pending" },
    { id: 2, name: "Deal 2", amount: 5000, status: "Won" },
    { id: 3, name: "Deal 3", amount: 2000, status: "Lost" },
  ];

  const tickets = [
    { id: 1, title: "Ticket 1", status: "Open" },
    { id: 2, title: "Ticket 2", status: "Closed" },
    { id: 3, title: "Ticket 3", status: "In Progress" },
  ];

  const revenueData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Revenue",
        data: [5000, 3000, 7000, 4000, 6000, 8000],
        fill: true,
        backgroundColor: "#171717", // Fill color
        borderColor: "#84cc16", // Line color
        tension: 0.4, // Smooth curve
      },
    ],
  };

  // Configuration for the area plot
  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: "Month",
        },
        ticks: {
          color: "white", // X-axis ticks color
        },
      },
      y: {
        title: {
          display: true,
          text: "Revenue",
        },
        ticks: {
          color: "white", // X-axis ticks color
        },
        grid: {
          display: false, // Remove grid lines on the y-axis
        },
      },
    },
    plugins: {
      legend: {
        display: false,
        labels: {
          color: "white", // Legend label color
        },
      },
    },
  };
  const tasks = [
    { id: 1, title: "Call Jane", description: "Discuss services with Jane" },
    { id: 2, title: "Task 2", description: "Description of Task 2" },
    { id: 3, title: "Task 3", description: "Description of Task 3" },
    // Add more tasks as needed
  ];

  const meetings = [
    { id: 1, title: "Meeting 1", time: "10:00 AM" },
    { id: 2, title: "Meeting 2", time: "2:00 PM" },
    { id: 3, title: "Meeting 3", time: "4:00 PM" },
    // Add more meetings as needed
  ];

  return (
    <div>
      {/* <SideNav /> */}
      <div className="container mx-auto mt-5">
        <h1 className="text-2xl font-light mb-3 text-white">Dashboard</h1>
        <p className="mb-5 text-white text-sm">
          Here's an overview of your business.
        </p>

        <div className="grid grid-cols-3 gap-4">
          {/* Summary of Contacts */}
          <div className="bg-neutral-900 p-5 rounded-lg hover:shadow-2xl">
            <h2 className="text-lg font-semibold mb-3 text-white">Contacts</h2>
            <p className="text-xl font-bold mb-2 text-lime-600">
              {contacts.length}
            </p>
            <p className="text-white">Total contacts</p>
          </div>

          {/* Summary of Deals */}
          <div className="bg-neutral-900 p-5 rounded-lg hover:shadow-2xl">
            <h2 className="text-lg font-semibold mb-3 text-white">Deals</h2>
            <p className="text-xl font-bold mb-2 text-lime-600">
              {deals.length}
            </p>
            <p className="text-white">Total deals</p>
          </div>

          {/* Summary of Tickets */}
          <div className="bg-neutral-900 p-5 rounded-lg hover:shadow-2xl">
            <h2 className="text-lg font-semibold mb-3 text-white">Tickets</h2>
            <p className="text-xl font-bold mb-2 text-lime-600">
              {tickets.length}
            </p>
            <p className="text-white">Total tickets</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div
            className="mt-5 bg-neutral-900 p-5 rounded-lg hover:shadow-2xl"
            style={{ width: "100%", height: "300px" }}
          >
            <h2 className="text-lg font-semibold text-white">Revenue</h2>
            <Line data={revenueData} options={options} />
          </div>
          <div className="mt-5 bg-neutral-900 p-5 rounded-lg hover:shadow-2xl">
            <h2 className="text-lg font-semibold mb-3 text-white">Tasks</h2>
            {/* Tasks content */}
            <ul className="flex-col">
              {tasks.map((task) => (
                <li key={task.id} className="mb-2 text-white">
                  <input type="checkbox" id={`task-${task.id}`} />
                  <label
                    htmlFor={`task-${task.id}`}
                    className="ml-2 text-lime-700 font-semibold text-white"
                  >
                    {task.title}
                  </label>
                  <p>{task.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-5 bg-neutral-900 p-5 rounded-lg hover:shadow-2xl">
          <h2 className="text-lg font-semibold mb-3 text-white">
            Upcoming Schedule
          </h2>
          {/* Meetings content */}
          <ul className="flex-col">
            {meetings.map((meeting) => (
              <li key={meeting.id} className="mb-2 text-white">
                {meeting.title} - {meeting.time}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
