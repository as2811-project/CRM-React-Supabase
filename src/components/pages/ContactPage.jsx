import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { Sidebar } from "../../layouts/SideLayout";
import { supabase } from "../../utils/supabase";
import { CiUser } from "react-icons/ci";
export const ContactDetailsPage = () => {
  const { id } = useParams();
  const [contact, setContact] = useState();

  useEffect(() => {
    async function getContact() {
      const { data: contact } = await supabase
        .from("Contacts")
        .select()
        .eq("contact_id", id);
      setContact(contact);
    }
    getContact();
  }, [id]);
  // Remove after building out backend
  //const contact = contacts.find((c) => c.id === parseInt(id));

  // If contact is not found, return a message
  if (!contact) {
    return <div className="text-white">Contact not found</div>;
  }

  return (
    <div>
      <Sidebar />
      <div className="dashboard-content mx-auto ml-64">
        <h1 className="text-2xl font-semibold mb-3 text-lime-500">
          Contact Details
        </h1>

        {/* Contact Summary Section */}
        <div className="bg-neutral-800 rounded-lg shadow-md p-5 mb-4">
          <div className="flex items-center mb-4">
            {contact[0].img_url ? (
              <img
                src={contact[0].img_url}
                alt={contact[0].first_name}
                className="w-20 h-20 rounded-full mr-4"
              />
            ) : (
              <CiUser className="w-20 h-20 text-neutral-300 mr-4" />
            )}
            <div>
              <h2 className="text-xl font-semibold text-lime-500">
                {contact[0].first_name} {contact[0].last_name}
              </h2>
              <p className="text-gray-400">{contact[0].email}</p>
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
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-neutral-300">First Name</p>
              <p className="text-sm font-semibold text-neutral-100">
                {contact[0].first_name}
              </p>
            </div>
            <div>
              <p className="text-sm text-neutral-300">Last Name</p>
              <p className="text-sm font-semibold text-neutral-100">
                {contact[0].last_name}
              </p>
            </div>
            <div>
              <p className="text-sm text-neutral-300">Email</p>
              <p className="text-sm font-semibold text-neutral-100">
                {contact[0].email}
              </p>
            </div>
            <div>
              <p className="text-sm text-neutral-300">Phone</p>
              <p className="text-sm font-semibold text-neutral-100">
                {contact[0].phone_number}
              </p>
            </div>
            <div>
              <p className="text-sm text-neutral-300">Address</p>
              <p className="text-sm font-semibold text-neutral-100">
                {contact[0].address}
              </p>
            </div>
            <div>
              <p className="text-sm text-neutral-300">Country:</p>
              <p className="text-sm font-semibold text-neutral-100">
                {contact[0].country}
              </p>
            </div>
            {/* Add more fields as needed */}
          </div>
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
