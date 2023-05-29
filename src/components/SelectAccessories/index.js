import React from "react";
import { Link } from "react-router-dom";

const SelectAccessories = () => {
  const accessories = [
    { id: 1, name: "Box", image: "https://cdn-icons-png.flaticon.com/512/4396/4396947.png" },
    { id: 2, name: "Bill", image: "/bill.jpg" }
  ];

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Select Accessories</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {accessories.map((accessory) => (
          <div key={accessory.id} className="bg-white p-4 shadow-md">
            <Link to="/camera-condition">
              <img
                src={accessory.image}
                alt={accessory.name}
                className="w-full h-40 object-cover mb-2"
              />
            </Link>
            <span className="text-lg font-medium">{accessory.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectAccessories;
