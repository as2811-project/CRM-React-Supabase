import { LuUsers2 } from "react-icons/lu";
export const ContactsCard = () => {
  const contacts = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "987-654-3210",
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike@example.com",
      phone: "555-123-4567",
    },
  ];
  return (
    <div className="bg-neutral-900 p-5 rounded-lg hover:shadow-2xl">
      <h2 className="text-lg font-semibold mb-3 text-white">
        <LuUsers2 className="mr-2" />
        Contacts
      </h2>
      <p className="text-xl font-bold mb-2 text-lime-600">{contacts.length}</p>
      <p className="text-white">Total contacts</p>
    </div>
  );
};
