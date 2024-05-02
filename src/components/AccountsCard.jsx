import { useState, useEffect } from "react";
import { IoBusinessOutline } from "react-icons/io5";

export const AccountsCard = () => {
  const [accounts, setAccounts] = useState();
  useEffect(() => {
    fetch("/api/accounts")
      .then((response) => response.json())
      .then((count) => setAccounts(count));
  }, []);
  return (
    <div className="bg-neutral-800 p-5 rounded-lg hover:shadow-2xl border border-neutral-700">
      <h2 className="text-lg font-semibold mb-3 text-white">
        <IoBusinessOutline className="mr-2" />
        Accounts
      </h2>
      <p className="text-xl font-bold mb-2 text-lime-600">{accounts}</p>
      <p className="text-white">Total accounts</p>
    </div>
  );
};
