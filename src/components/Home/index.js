import React from "react";
import Header from '../Header';
import CanonModels from "../CanonModels";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from "react-router-dom";
import NikonModels from "../NikonModels";
import SonyModels from "../SonyModels";


const All3 = () => {
  return (
    <Router>
      <div>
        <Header renderContent={true}/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/canon/models" component={CanonModels} />
          <Route path="/nikon/models" component={NikonModels} />
          <Route path="/sony/models" component={SonyModels} />
        </Switch>
      </div>
    </Router>
  );
};

const Home = () => {
  return (
    <div>
      <BrandSelect />
      <StepsDown />
    </div>
  );
};

const BrandSelect = () => {
  return (
    <div className="bg-white border-4 border-blue-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">
          <span>Sell your Camera </span>
          <img
            src="/icamera.svg"
            alt="Camera Icon"
            className="inline-block w-12 h-13"
          />
          <span> now </span>
        </h1>
        <div className="flex justify-center">
          <div className="flex flex-wrap max-w-screen-lg">
            <div className="w-1/2 md:w-1/3 p-2">
              <Link to="/canon/models">
                <img
                  src="https://logos-world.net/wp-content/uploads/2020/08/Canon-Logo.png"
                  className="w-full h-40 object-contain border-2 border-black my-1 p-2"
                  alt="Canon Logo"
                />
              </Link>
            </div>
            <div className="w-1/2 md:w-1/3 p-2">
              <Link to="/sony/models">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sony_logo.svg/1280px-Sony_logo.svg.png"
                  className="w-full h-40 object-contain border-2 border-black my-1 p-2"
                  alt="Sony Logo"
                />
              </Link>
            </div>
            <div className="w-1/2 md:w-1/3 p-2">
              <Link to="/nikon/models">
                <img
                  src="https://www.pngmart.com/files/22/Nikon-Logo-PNG.png"
                  className="w-full h-40 object-contain border-2 border-black my-1 p-2"
                  alt="Nikon Logo"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StepsDown = () => {
  return (
    <div className="bg-white border-4 border-blue-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-8 lg:px-12">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
          <span>Sell your Camera in 3 Steps </span>
        </h1>
      </div>

      <div className="flex justify-center">
        <div className="flex flex-wrap max-w-screen-lg">
          <div className="w-full md:w-auto p-2 flex justify-center">
            <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-8 py-4 mb-2 md:mb-0 md:mr-2">
              Check Price
            </button>
          </div>
          <div className="w-full md:w-auto p-2 flex justify-center">
            <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-10 py-5 mb-2 md:mb-0 md:mr-2">
              Schedule Pickup
            </button>
          </div>
          <div className="w-full md:w-auto p-2 flex justify-center">
            <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-2xl px-12 py-6">
              Get Paid Instantly
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default All3;
