import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CanonLens from "../CanonLens";
import SelectAccessories from "../SelectAccessories";
import CameraCondition from "../CameraCondition";
import DetailsCamera from "../DetailsCamera"; 
import CameraQuestion from "../CameraQuestion"; 
import FinalSelect from "../FinalSelect"; 
import AddressDetails from "../AddressDetails";

// FIRST I WILL CREATE ALL THE COMPONENTS AND CHECK HERE THAN PROCEED





const cameraModels = [
  { id: 1, name: "Canon 1500D", image: "/cmodel.jpg" },
  { id: 2, name: "Model 2", image: "/model2.jpg" },
  { id: 3, name: "Model 3", image: "/model3.jpg" },
  // Add more camera models as needed
];

const CanonModels = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Select the Camera Model</h1>
      <div className="grid grid-cols-3 gap-4">
        {cameraModels.map((model) => (
          <div key={model.id} className="bg-white p-4 shadow-md">
            <Link to="/canon/lens">
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

const ALL1 = () => {
  return(
    <div>
      <CanonModels />
      <FinalSelect />

      
      
    
    </div>
  )
}

export default ALL1;
