import { AiOutlineDollarCircle } from "react-icons/ai";

export const DealsCard = () => {
  const deals = [
    { id: 1, name: "Deal 1", amount: 1000, status: "Pending" },
    { id: 2, name: "Deal 2", amount: 5000, status: "Won" },
    { id: 3, name: "Deal 3", amount: 2000, status: "Lost" },
  ];
  return (
    <div className="bg-neutral-900 p-5 rounded-lg hover:shadow-2xl">
      <h2 className="text-lg font-semibold mb-3 text-white">
        <AiOutlineDollarCircle className="mr-2" />
        Deals
      </h2>
      <p className="text-xl font-bold mb-2 text-lime-600">{deals.length}</p>
      <p className="text-white">Total deals</p>
    </div>
  );
};
