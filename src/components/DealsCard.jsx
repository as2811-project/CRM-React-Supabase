import { AiOutlineDollarCircle } from "react-icons/ai";
import { useState, useEffect } from "react";
import { supabase } from "../utils/supabase";

export const DealsCard = () => {
  const [deals, setDeals] = useState();
  useEffect(() => {
    fetch("/api/deals")
      .then((response) => response.json())
      .then((count) => setDeals(count));
  }, []);
  return (
    <div className="bg-neutral-800 p-5 rounded-lg hover:shadow-2xl border border-neutral-700">
      <h2 className="text-lg font-semibold mb-3 text-white">
        <AiOutlineDollarCircle className="mr-2" />
        Deals
      </h2>
      <p className="text-xl font-bold mb-2 text-lime-600">{deals}</p>
      <p className="text-white">Total deals</p>
    </div>
  );
};
