import React, { useState } from "react";
import { Sidebar } from "../layouts/SideLayout";
import { FaEdit, FaTrash } from "react-icons/fa";

export const ContactsPage = () => {
  // Sample contacts data
  const [contacts, setContacts] = useState([
    {
      id: 1,
      img_url:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "John Doe",
      email: "john@example.com",
    },
    {
      id: 2,
      img_url:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Jane Smith",
      email: "jane@example.com",
    },
    {
      id: 3,
      img_url:
        "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Alice Johnson",
      email: "alice@example.com",
    },
  ]);

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
        <div className="flex flex-col">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className="bg-neutral-900 rounded-lg shadow-md p-4 mb-4 flex justify-between items-center"
            >
              <div>
                <h2 className="text-white text-lg font-semibold hover:text-lime-500">
                  {contact.name}
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
