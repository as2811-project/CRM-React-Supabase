import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { Sidebar } from "../../layouts/SideLayout";

// Sample contacts data
const contacts = [
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
];

export const ContactDetailsPage = () => {
  const { id } = useParams();

  // Remove after building out backend
  const contact = contacts.find((c) => c.id === parseInt(id));

  // If contact is not found, return a message
  if (!contact) {
    return <div className="text-white">Contact not found</div>;
  }

  return (
    <div>
      <Sidebar />
      <div className="dashboard-content mx-auto ml-64">
        <h1 className="text-2xl font-light mb-3 text-lime-500">
          Contact Details
        </h1>

        {/* Contact Summary Section */}
        <div className="bg-neutral-800 rounded-lg shadow-md p-5 mb-4">
          <div className="flex items-center mb-4">
            <img
              src={contact.img_url}
              alt={contact.name}
              className="w-20 h-20 rounded-full mr-4"
            />
            <div>
              <h2 className="text-xl font-semibold text-lime-500">
                {contact.name}
              </h2>
              <p className="text-gray-400">{contact.email}</p>
            </div>
          </div>
          <div className="flex items-center">
            <button className="hover:bg-blue-500 text-white px-3 py-1 rounded-md mr-2">
              <FaEdit />
            </button>
            <button className="hover:bg-red-500 text-white px-3 py-1 rounded-md">
              <FaTrash />
            </button>
          </div>
        </div>

        {/* Details Section */}
        <div className="bg-neutral-800 rounded-lg shadow-md p-8 mb-4">
          <h2 className="text-xl font-semibold text-lime-500 mb-4">Details</h2>
          {/* Add details here */}
        </div>

        {/* Email Conversations Section */}
        <div className="bg-neutral-800 rounded-lg shadow-md p-8">
          <h2 className="text-xl font-semibold text-lime-500 mb-4">
            Email Conversations
          </h2>
          {/* Add email conversations here */}
        </div>
      </div>
    </div>
  );
};
