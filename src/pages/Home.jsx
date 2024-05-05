import React from "react";
import { NavBar } from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import { LuRocket } from "react-icons/lu";

export function HomePage() {
  const navigate = useNavigate();
  return (
    <div>
      <NavBar />
      <div className="relative px-6 pt-14 lg:px-8 ">
        <div className="py-5 sm:py-10 lg:py-56 justify-items-centre">
          <div className="justify-items-start w-full text-center">
            <h1 className="text-6xl font-semibold text-white inline-flex items-center justify-center">
              <p>
                <LuRocket className="ml-2" />
              </p>
              <p className="ml-2 bg-clip-text text-white">Rocketship</p>
            </h1>
            <h2 className="text-xl text-gray-500 dark:text-lime-500">
              A CRM Project
            </h2>
            <button
              className="bg-lime-500 hover:bg-lime-600 text-white font-bold mt-5 py-2 px-4 rounded-full"
              onClick={() => navigate("/login")}
            >
              Check it out!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
