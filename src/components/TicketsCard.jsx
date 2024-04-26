import { LuTicket } from "react-icons/lu";
export const TicketsCard = () => {
  const tickets = [
    { id: 1, title: "Ticket 1", status: "Open" },
    { id: 2, title: "Ticket 2", status: "Closed" },
    { id: 3, title: "Ticket 3", status: "In Progress" },
  ];
  return (
    <div className="bg-neutral-800 p-5 rounded-lg hover:shadow-2xl">
      <h2 className="text-lg font-semibold mb-3 text-white">
        <LuTicket className="mr-2" />
        Tickets
      </h2>
      <p className="text-xl font-bold mb-2 text-lime-600">{tickets.length}</p>
      <p className="text-white">Total tickets</p>
    </div>
  );
};
