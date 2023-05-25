import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


const SelectBrand = () => {
    return (
        <div>
            <h1 className='border-4 border-blue-900 p-6 m-10 '>Select the Brand</h1>
            
        <div className="w-full md:w-auto p-2 flex justify-center">
            <button className="text-black border-4 border-blue-900 ">
              Schedule Pickup
            </button>
        </div>
        </div>
    ) 
}

export default SelectBrand;