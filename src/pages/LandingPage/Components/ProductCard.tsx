import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img className="w-full h-64 object-cover" src={product.image} alt={product.name} />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{product.name}</h2>
        <p className="text-gray-500">{product.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-xl font-bold text-gold">${product.price}</span>
          <button className="bg-gold text-white px-4 py-2 rounded-lg">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
