import { useEffect, useState } from "react";
import { LuUsers2 } from "react-icons/lu";
import { supabase } from "../utils/supabase";
export const ContactsCard = () => {
  const [contacts, setContacts] = useState();
  useEffect(() => {
    async function getContactCard() {
      const { count: contacts } = await supabase
        .from("Contacts")
        .select("*", { count: "exact", head: true });
      setContacts(contacts);
    }
    getContactCard();
  }, []);
  return (
    <div className="bg-neutral-800 p-5 rounded-lg hover:shadow-2xl border border-neutral-700">
      <h2 className="text-lg font-semibold mb-3 text-white">
        <LuUsers2 className="mr-2" />
        Contacts
      </h2>
      <p className="text-xl font-bold mb-2 text-lime-600">{contacts}</p>
      <p className="text-white">Total contacts</p>
    </div>
  );
};
