import React, { useEffect, useState } from "react";
import { Sidebar } from "../layouts/SideLayout";
import { FaEdit, FaTrash } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { HiOutlineFilter } from "react-icons/hi";

export const AccountsPage = () => {
  const navigate = useNavigate();
  const [accounts, setAccounts] = useState([]);
  useEffect(() => {
    fetch("/api/accounts/view")
      .then((response) => response.json())
      .then((data) => setAccounts(data));
  }, []);

  // const handleEdit = (id) => {
  //   // Handle edit functionality
  //   console.log(`Edit account with ID: ${id}`);
  // };

  // const handleRemove = (id) => {
  //   // Handle remove functionality
  //   setContacts(contacts.filter((account) => account.id !== id));
  // };

  return (
    <div>
      <Sidebar />
      <div className="dashboard-content mx-auto ml-64">
        <h1 className="text-2xl font-light mb-3 text-white">Accounts</h1>
        <button className="bg-lime-500 hover:bg-lime-600 text-white text-sm font-bold mb-5 px-3 py-1.5 rounded-full text-center inline-flex items-center">
          <HiOutlineFilter />
          Filter
        </button>
        <div className="flex flex-col">
          {accounts.map((account) => (
            <div
              key={account.account_id}
              className="bg-neutral-900 text-white rounded-lg shadow-md p-4 mb-4 flex justify-between items-center"
            >
              <div>
                <h2
                  className="text-lg hover:text-lime-500 font-semibold cursor-pointer"
                  onClick={() => navigate(`${account.account_id}`)}
                >
                  {account.company_name}
                </h2>
                <p className="text-white">{account.phone_number}</p>
              </div>
              <div className="flex items-center">
                <button
                  className="hover:bg-lime-500 text-white p-3 rounded-full mr-2"
                  //onClick={() => handleEdit(account.id)}
                >
                  <FaEdit />
                </button>
                <button
                  className="hover:bg-red-500 text-white p-3 rounded-full"
                  //onClick={() => handleRemove(account.id)}
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
