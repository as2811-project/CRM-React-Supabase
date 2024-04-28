import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoOpenOutline } from "react-icons/io5";
import { Sidebar } from "../layouts/SideLayout";

export const TicketsPage = () => {
  const navigate = useNavigate();
  const [tickets, setTickets] = useState([
    {
      id: 1,
      title: "Ticket 1",
      description: "This is the description for ticket 1.",
    },
    {
      id: 2,
      title: "Ticket 2",
      description: "This is the description for ticket 2.",
    },
    {
      id: 3,
      title: "Ticket 3",
      description: "This is the description for ticket 3.",
    },
  ]);

  return (
    <div>
      <Sidebar />
      <div className="dashboard-content mx-auto ml-64">
        <h1 className="text-2xl font-light mb-3 text-white">Tickets</h1>
        <div className="flex flex-col">
          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              className="bg-neutral-900 text-white rounded-lg shadow-md p-4 mb-4 flex justify-between items-center"
            >
              <div>
                <h2
                  className="text-lg hover:text-lime-500 font-normal cursor-pointer"
                  onClick={() => navigate(`${ticket.id}`)}
                >
                  {ticket.title}
                </h2>
                <p className="text-white text-xs">{ticket.description}</p>
              </div>
              <div className="flex items-center">
                <button
                  className="hover:bg-lime-500 text-white p-3 rounded-full mr-2"
                  onClick={() => navigate(`${ticket.id}`)}
                >
                  <IoOpenOutline />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
