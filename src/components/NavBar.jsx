import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { LuRocket } from "react-icons/lu";

export function NavBar() {
  const navigate = useNavigate();
  const user = sessionStorage.getItem("user_id");
  const username = sessionStorage.getItem("accessToken");

  const logout = () => {
    sessionStorage.removeItem("user_id");
    sessionStorage.removeItem("accessToken");
    handleLogout();
    navigate("/");
  };

  const handleLogout = () => {
    sessionStorage.removeItem("user_id");
  };

  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-neutral-800">
      <nav className="flex p-5 lg:px-8 " aria-label="Global">
        <h2 className="text-2xl ml-2 text-center font-semibold inline-flex text-white items-center">
          <LuRocket className="mr-2" /> Rocketship
        </h2>
        <div className="flex items-center">
          {user && (
            <button onClick={logout} className="mr-4 text-white">
              Logout
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}
