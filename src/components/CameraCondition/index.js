import React from "react";

const CameraCondition = () => {
  const conditionOptions = [
    { id: 1, name: "Great", description: "Not much used" },
    { id: 2, name: "Good", description: "Slightly used" },
    { id: 3, name: "Average", description: "Heavy used" },
  ];

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Camera Condition</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {conditionOptions.map((condition) => (
          <div key={condition.id} className="bg-white p-4 shadow-md">
            <span className="text-2xl font-bold mb-2">{condition.name}</span>
            <p>{condition.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CameraCondition;
