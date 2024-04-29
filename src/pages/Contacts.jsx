import React, { useEffect, useState } from "react";
import { supabase } from "../utils/supabase.js";
import { Sidebar } from "../layouts/SideLayout";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { HiOutlineFilter } from "react-icons/hi";

export const ContactsPage = () => {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function getContacts() {
      const { data: contacts } = await supabase.from("Contacts").select();
      setContacts(contacts);
    }
    getContacts();
  }, []);

  const handleEdit = (id) => {
    // Handle edit functionality
    console.log(`Edit contact with ID: ${id}`);
  };

  const handleRemove = (id) => {
    // Handle remove functionality
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <div>
      <Sidebar />
      <div className="dashboard-content mx-auto ml-64">
        <h1 className="text-2xl font-light mb-3 text-white">Contacts</h1>
        <button className="bg-lime-500 hover:bg-lime-600 text-white text-sm font-bold mb-5 px-3 py-1.5 rounded-full text-center inline-flex items-center">
          <HiOutlineFilter />
          Filter
        </button>
        <div className="flex flex-col">
          {contacts.map((contact) => (
            <div
              key={contact.contact_id}
              className="bg-neutral-900 text-white rounded-lg shadow-md p-4 mb-4 flex justify-between items-center"
            >
              <div>
                <h2
                  className="text-lg hover:text-lime-500 font-semibold cursor-pointer"
                  onClick={() => navigate(`${contact.contact_id}`)}
                >
                  {contact.first_name} {contact.last_name}
                </h2>
                <p className="text-white">{contact.email}</p>
              </div>
              <div className="flex items-center">
                <button
                  className="hover:bg-lime-500 text-white p-3 rounded-full mr-2"
                  onClick={() => handleEdit(contact.id)}
                >
                  <FaEdit />
                </button>
                <button
                  className="hover:bg-red-500 text-white p-3 rounded-full"
                  onClick={() => handleRemove(contact.id)}
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
