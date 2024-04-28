import React from "react";
import { useParams } from "react-router-dom";
import { Sidebar } from "../../layouts/SideLayout";

const tickets = [
  {
    id: 1,
    title: "Ticket 1",
    description: "This is the description for ticket 1.",
  },
  {
    id: 2,
    title: "Ticket 2",
    description: "This is the description for ticket 2.",
  },
  {
    id: 3,
    title: "Ticket 3",
    description: "This is the description for ticket 3.",
  },
];

export const TicketDetailsPage = () => {
  const { id } = useParams();

  // Remove after building out backend
  const ticket = tickets.find((t) => t.id === parseInt(id));

  // If contact is not found, return a message
  if (!ticket) {
    return <div className="text-white">Ticket not found</div>;
  }

  return (
    <div>
      <Sidebar />
      <div className="dashboard-content mx-auto ml-64">
        <h1 className="text-2xl font-light mb-3 text-lime-500">
          Ticket Details
        </h1>

        {/* Details Section */}
        <div className="bg-neutral-800 rounded-lg shadow-md p-8 mb-4">
          <h2 className="text-xl font-semibold text-lime-500">Subject</h2>
          <p className="text-gray-400 mb-5">{ticket.title}</p>
          <h3 className="text-xl font-semibold text-lime-500">Description</h3>
          <p className="text-gray-400 mb-5">{ticket.description}</p>
          {/* Add details here */}
        </div>

        {/* Response Section */}
        <div className="bg-neutral-800 rounded-lg shadow-md p-8">
          <form>
            <div class="w-full mb-4 border border-gray-200 rounded-lg bg-neutral-50 bg-neutral-700 border-gray-600">
              <div class="flex items-center justify-between px-3 py-2 border-b border-gray-600">
                <div class="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse divide-gray-600">
                  <div class="flex items-center space-x-1 rtl:space-x-reverse sm:pe-4">
                    <button
                      type="button"
                      class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-neutral-100 text-gray-400 hover:text-white hover:bg-neutral-600"
                    >
                      <svg
                        class="w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 12 20"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"
                        />
                      </svg>
                      <span class="sr-only">Attach file</span>
                    </button>
                    <button
                      type="button"
                      class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-neutral-100 text-gray-400 hover:text-white hover:bg-neutral-600"
                    >
                      <svg
                        class="w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 20"
                      >
                        <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                      </svg>
                      <span class="sr-only">Upload image</span>
                    </button>
                    <button
                      type="button"
                      class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-neutral-100 text-gray-400 hover:text-white hover:bg-neutral-600"
                    >
                      <svg
                        class="w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM13.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm3.5 9.5A5.5 5.5 0 0 1 4.6 11h10.81A5.5 5.5 0 0 1 10 15.5Z" />
                      </svg>
                      <span class="sr-only">Add emoji</span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="px-4 py-2 rounded-b-lg bg-neutral-800">
                <label for="editor" class="sr-only">
                  Send
                </label>
                <textarea
                  id="editor"
                  rows="8"
                  class="w-full px-0 text-sm text-gray-800 border-0 bg-neutral-800 text-white placeholder-gray-400"
                  required
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-lime-500 rounded-lg hover:bg-lime-600"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
