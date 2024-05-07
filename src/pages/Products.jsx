import React, { useState } from "react";
import { ProductCard } from "../components/ProductCard.jsx";
import { Sidebar } from "../layouts/SideLayout.jsx";
import { useEffect } from "react";
import { FiPlus } from "react-icons/fi";

export const ProductList = () => {
  // Sample product data
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products", {
      method: "GET", // Corrected method to POST
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setProducts(response);
        console.log(response);
      });
  }, []);

  return (
    <div>
      <Sidebar />
      <div className="products-content-title">
        <h1 className="text-2xl font-semibold text-white">Product Catalog</h1>
        <button className="bg-lime-500 hover:bg-lime-600 text-white text-sm font-bold mt-2 px-3 py-1.5 rounded-full text-center inline-flex items-center">
          <FiPlus />
          Add Product
        </button>
      </div>
      <div className="products-content grid grid-cols-4 gap-6 gap-y-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
