import React from "react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import SelectAccessories from "../SelectAccessories";

const lensOptions = [
  { id: 1, name: "Canon 24-55mm f1.4", image: "/clens.jpg" },
  { id: 2, name: "Canon 24-55mm f1.4", image: "/model2.jpg" },
  { id: 3, name: "Canon 24-55mm f1.4", image: "/model3.jpg" },
  // Add more lens options without the 'next' property
];

const CanonLens = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <h1 className="text-3xl font-bold mb-6">Select the Camera Lens</h1>
      <div className="grid grid-cols-3 gap-4">
        {lensOptions.map((lens) => (
          <div key={lens.id} className="bg-white p-4 shadow-md">
            <Link to="/select-accessories">
              <img
                src={lens.image}
                alt={lens.name}
                className="w-full h-40 object-contain mb-2"
              />
            </Link>
            <span className="text-lg font-medium">{lens.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CanonLens;