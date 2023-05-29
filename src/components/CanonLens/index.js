import React from "react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import SelectAccessories from "../SelectAccessories";

const lensOptions = [
  { id: 1, name: "Canon 18-55mm f/3.5 f1.4", image: "/CamsPics/CanonLens/canon18-55.jpeg" },
  { id: 2, name: "Canon 55-250mm f/4-5.6 f1.4", image: "/CamsPics/CanonLens/canon55-250.jpeg" },
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