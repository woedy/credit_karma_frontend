import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gold py-4 px-6">
      <div className="flex justify-between items-center text-white">
        <h1 className="text-3xl font-bold">GoldStore</h1>
        <ul className="flex space-x-8">
          <li><a href="#home">Home</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
