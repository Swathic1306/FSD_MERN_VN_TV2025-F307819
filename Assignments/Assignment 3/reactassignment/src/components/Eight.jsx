import React, { useState } from "react";

const ProductFilter = () => {
  const products = [
  { name: "Laptop", category: "Electronics" },
  { name: "Headphones", category: "Electronics" },
  { name: "Smartphone", category: "Electronics" },
  { name: "Smart Watch", category: "Electronics" },
  { name: "Bluetooth Speaker", category: "Electronics" },

  { name: "T-Shirt", category: "Clothes" },
  { name: "Jeans", category: "Clothes" },
  { name: "Jacket", category: "Clothes" },
  { name: "Shoes", category: "Clothes" },
  { name: "Saree", category: "Clothes" },

  { name: "Sofa", category: "Furniture" },
  { name: "Dining Table", category: "Furniture" },
  { name: "Chair", category: "Furniture" },
  { name: "Wardrobe", category: "Furniture" },

  { name: "Lipstick", category: "Beauty" },
  { name: "Face Cream", category: "Beauty" },
  { name: "Perfume", category: "Beauty" },

  { name: "Chocolate", category: "Food" },
  { name: "Chips", category: "Food" },
  { name: "Juice", category: "Food" },

  { name: "Teddy Bear", category: "Toys" },
  { name: "Remote Car", category: "Toys" },
  { name: "Puzzle Box", category: "Toys" }
];


  const [filter, setFilter] = useState("All");

  const filteredProducts =
    filter === "All"
      ? products
      : products.filter((item) => item.category === filter);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product List</h2>

      <button onClick={() => setFilter("All")}>All</button>
      <button onClick={() => setFilter("Electronics")}>Electronics</button>
      <button onClick={() => setFilter("Clothes")}>Clothes</button>

      <h3>Showing: {filter}</h3>


      <ul>
        {filteredProducts.map((p, i) => (
          <li key={i}>{p.name} ({p.category})</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductFilter;
