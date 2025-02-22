import React from "react";
import ProductCard from "./ProductCard";

const ProductsSection = () => {
  const products = [
    {
      name: "Gold Necklace",
      description: "A beautiful gold necklace.",
      price: 299.99,
      image: "https://via.placeholder.com/300x200/FFD700/ffffff?text=Gold+Necklace",
    },
    {
      name: "Gold Ring",
      description: "Elegant gold ring for special occasions.",
      price: 199.99,
      image: "https://via.placeholder.com/300x200/FFD700/ffffff?text=Gold+Ring",
    },
    {
      name: "Gold Earrings",
      description: "Sophisticated gold earrings.",
      price: 149.99,
      image: "https://via.placeholder.com/300x200/FFD700/ffffff?text=Gold+Earrings",
    },
  ];

  return (
    <section id="products" className="py-16 px-6 bg-gray-100">
      <h2 className="text-3xl font-semibold text-center text-gold mb-8">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
