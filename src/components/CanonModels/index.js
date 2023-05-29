import React from "react";
import { Link } from "react-router-dom";

const canonModels = [
  { id: 1, name: "Canon 1500D", image: "/cmodel.jpg", next: "/canon/lens" },
  { id: 2, name: "Canon 1500D", image: "/cmodel.jpg", next: "/canon/lens" },
  { id: 3, name: "Canon 1500D", image: "/cmodel.jpg", next: "/canon/lens" },
  // Add more camera models as needed
];

const CanonModels = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Select the Camera Model</h1>
      <div className="grid grid-cols-3 gap-4">
        {canonModels.map((model) => (
          <div key={model.id} className="bg-white p-4 shadow-md">
            <Link to={model.next}>
              <img
                src={model.image}
                alt={model.name}
                className="w-full h-40 object-contain mb-2"
              />
            </Link>
            <span className="text-lg font-medium">{model.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CanonModels;
