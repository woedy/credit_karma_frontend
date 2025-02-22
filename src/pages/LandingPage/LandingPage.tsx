import React from "react";

const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
   

      {/* Main Content */}
      <main className="max-w-screen-2xl mx-auto px-4 xl:px-16 py-3">
        {/* Filters Section */}
        <div className="flex flex-wrap xl:flex-nowrap">
          <aside className="w-full xl:w-1/4 bg-white shadow p-4 mb-6 mr-5 xl:mb-0">
            <h2 className="text-lg font-semibold mb-4">Filters</h2>

            <div className="mb-6">
              <h3 className="font-bold mb-2">Type of metal</h3>
              <ul>
                {[
                  "Gold(116)",
                  "Silver(52)",
                  "Platinum(24)",
                  "Palladium(5)",
                ].map((item) => (
                  <li key={item}>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="form-checkbox" />
                      <span>{item}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="font-bold mb-2">Type of product</h3>
              <ul>
                {[
                  "Cast Bar(9)",
                  "Coins(32)",
                  "Minted Bar(72)",
                ].map((item) => (
                  <li key={item}>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="form-checkbox" />
                      <span>{item}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="font-bold mb-2">Price per product</h3>
              <ul>
                {[
                  "$2,000 (90)",
                  "$3,000 - 4,000 (90)",
                  "$5,000 - 6,000 (90)",
                  "$15,000 - 20,000 (90)",
                ].map((item) => (
                  <li key={item}>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="form-checkbox" />
                      <span>{item}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-2">Weight</h3>
              <ul>
                {[
                  "1 oz (25)",
                  "6 grams - 10 grams (7)",
                  "50 grams (6)",
                ].map((item) => (
                  <li key={item}>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="form-checkbox" />
                      <span>{item}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Products Section */}
          <section className="w-full xl:w-3/4">
            <div className="flex justify-between items-center mb-4 ">
              <h2 className="text-lg font-semibold">
                Buy gold, with affordable storage in Switzerland and Resale
              </h2>
              <select
                className="border border-gray-300 rounded px-3 py-1 text-sm"
              >
                <option>Sort by: Default</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
              {Array(8)
                .fill(null)
                .map((_, index) => (
                  <div
                    key={index}
                    className="bg-white shadow rounded p-4 flex flex-col items-center"
                  >
                    <img
                      src="https://png.pngtree.com/png-vector/20231026/ourmid/pngtree-realistic-gold-bars-png-image_10370401.png"
                      alt="Product"
                      className="mb-4"
                    />
                    <h3 className="text-center text-sm font-medium mb-2">
                      Fine Gold Coin 900.0 - 20 French Francs Napoleon
                    </h3>
                    <p className="text-center text-gray-700 mb-2">$430.34</p>
                    <p className="text-center text-sm text-gray-500">
                      Premium per coin $20.34
                    </p>
                  </div>
                ))}
            </div>
          </section>
        </div>


        <footer className="bg-gold py-8 text-black text-center">
      <p>&copy; 2025 Gold Palace. All rights reserved.</p>
    </footer>
      </main>
    </div>
  );
};

export default LandingPage;
