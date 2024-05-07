import React from "react";

export const ProductCard = ({ product }) => {
  return (
    <div className="bg-neutral-700 hover:bg-neutral-800 rounded-lg hover:shadow-xl overflow-hidden">
      <img
        src={product.imgUrl}
        alt={product.name}
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-white hover:text-lime-400">
          {product.name}
        </h3>
        <p className="text-neutral-300 mt-2">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};
