import React from "react";

const CanonLensOptions = () => {
  const lensOptions = [
    { id: 1, name: "Canon 24-55mm f1.4", image: "/clens.jpg" },
    { id: 2, name: "Canon 24-55mm f1.4", image: "/model2.jpg" },
    { id: 3, name: "Canon 24-55mm f1.4", image: "/model3.jpg" },
    // Add more lens as needed
  ];

  return (
    <div className="p-20">
      <h1 className="text-3xl font-bold mb-6">Canon Lens Options</h1>
      <div className="grid grid-cols-3 gap-4  justify-center">
        {lensOptions.map((lens) => (
          <div key={lens.id} className="bg-white p-4 shadow-md">
            <img
              src={lens.image}
              alt={lens.name}
              className="w-full h-40 object-contain mb-2"
            />
            <span className="text-lg font-medium">{lens.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CanonLensOptions;
