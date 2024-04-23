import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { LuLayoutDashboard, LuUsers2, LuTicket } from "react-icons/lu";

const routes = [
  { path: "/dashboard", icon: LuLayoutDashboard, text: "Dashboard" },
  { path: "/contacts", icon: LuUsers2, text: "Contacts" },
  { path: "/deals", icon: AiOutlineDollarCircle, text: "Deals" },
  { path: "/tickets", icon: LuTicket, text: "Tickets" },
];

export const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <div className="sidebar text-white h-screen w-64 fixed left-0 top-0">
      <div className="p-5">
        <h2 className="text-2xl mb-3 text-lime-500">Salesdesk</h2>
        <ul className="flex-col mt-5 text-sm">
          {routes.map((route, index) => (
            <li
              key={index}
              className={`mb-3 flex items-center ${
                pathname === route.path
                  ? "bg-lime-500 text-white rounded-full hover:bg-lime-600"
                  : ""
              }`}
            >
              <route.icon className="mr-2 ml-5" />
              <Link to={route.path} className="block py-2">
                {route.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
