import { useState, useEffect } from "react";
import { supabase } from "../utils/supabase";
import { IoBusinessOutline } from "react-icons/io5";

export const AccountsCard = () => {
  const [deals, setDeals] = useState();
  useEffect(() => {
    async function getDealCard() {
      const { count: deals } = await supabase
        .from("Deals")
        .select("*", { count: "exact", head: true });
      setDeals(deals);
    }
    getDealCard();
  }, []);
  return (
    <div className="bg-neutral-800 p-5 rounded-lg hover:shadow-2xl">
      <h2 className="text-lg font-semibold mb-3 text-white">
        <IoBusinessOutline className="mr-2" />
        Accounts
      </h2>
      <p className="text-xl font-bold mb-2 text-lime-600">{deals}</p>
      <p className="text-white">Total accounts</p>
    </div>
  );
};
