import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useParams } from "react-router-dom";

export const ContactDetailsPage = ({ contacts }) => {
  const { id } = useParams(); // Assuming you're using React Router for routing

  // Sample contact data (you may fetch it from an API or wherever you store it)

  // Find the contact with the matching id
  const contact = contacts.find((contact) => contact.id === parseInt(id));

  if (!contact) {
    return <div>Contact not found!</div>;
  }

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-2xl font-light mb-3 text-lime-500">
        Contact Details
      </h1>

      {/* Contact Summary Section */}
      <div className="bg-black rounded-lg shadow-md p-8 mb-8">
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
          <button className="bg-blue-500 text-white px-3 py-1 rounded-md mr-2">
            <FaEdit />
          </button>
          <button className="bg-red-500 text-white px-3 py-1 rounded-md">
            <FaTrash />
          </button>
        </div>
      </div>

      {/* Details Section */}
      <div className="bg-black rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-xl font-semibold text-lime-500 mb-4">Details</h2>
        {/* Add details here */}
      </div>

      {/* Email Conversations Section */}
      <div className="bg-black rounded-lg shadow-md p-8">
        <h2 className="text-xl font-semibold text-lime-500 mb-4">
          Email Conversations
        </h2>
        {/* Add email conversations here */}
      </div>
    </div>
  );
};
