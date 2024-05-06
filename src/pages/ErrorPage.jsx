import React from "react";
import { useNavigate } from "react-router-dom";
import { LuRocket } from "react-icons/lu";

export function Error() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="relative px-6 pt-14 lg:px-8 ">
        <div className="py-5 sm:py-10 lg:py-56 justify-items-centre">
          <div className="justify-items-start w-full text-center">
            <h2 className="text-xl text-gray-500 dark:text-lime-500">
              Access Denied, please login.
            </h2>
            <button
              className="bg-lime-500 hover:bg-lime-600 text-white font-bold mt-5 py-2 px-4 rounded-full"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
