import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { LuLayoutDashboard, LuUsers2, LuBox } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { LuRocket } from "react-icons/lu";
import { IoBusinessOutline } from "react-icons/io5";
import { IoAnalyticsOutline } from "react-icons/io5";

const routes = [
  { path: "/dashboard", icon: LuLayoutDashboard, text: "Dashboard" },
  { path: "/contacts", icon: LuUsers2, text: "Contacts" },
  { path: "/deals", icon: AiOutlineDollarCircle, text: "Deals" },
  { path: "/accounts", icon: IoBusinessOutline, text: "Accounts" },
  { path: "/tickets", icon: MdOutlineMailOutline, text: "Emails" },
  { path: "/products", icon: LuBox, text: "Products" },
  { path: "/tasks", icon: FaTasks, text: "Tasks" },
  { path: "/analytics", icon: IoAnalyticsOutline, text: "Analytics" },
];

export const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <div className="sidebar text-white h-screen w-56 fixed left-0 top-0 pr-5 bg-neutral-800 rounded-md">
      <div className="p-5">
        <h2 className="text-2xl mb-3 ml-2 text-center font-semibold inline-flex items-center">
          <LuRocket className="mr-2" /> Rocketship
        </h2>
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
