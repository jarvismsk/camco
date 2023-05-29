import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";

import CanonModels from "./components/CanonModels";
import CanonLens from "./components/CanonLens";

import SonyModels from "./components/SonyModels";
import SonyLens from "./components/SonyLens";

import NikonModels from "./components/NikonModels";
import NikonLens from "./components/NikonLens";

import SelectAccessories from "./components/SelectAccessories";
import cameraCondition from "./components/CameraCondition"; 
import DetailsCamera from "./components/DetailsCamera";
import CameraQuestion from "./components/CameraQuestion";
import FinalSelect from "./components/FinalSelect";
import AddressDetails from "./components/AddressDetails";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="/canon/models" component={CanonModels} />
        <Route exact path="/canon/lens" component={CanonLens} />

        <Route exact path="/sony/models" component={SonyModels} />
        <Route exact path="/sony/lens" component={SonyLens} />

        <Route exact path="/nikon/models" component={NikonModels} />
        <Route exact path="/nikon/lens" component={NikonLens} />

        <Route exact path="/select-accessories" component={SelectAccessories} />
        <Route exact path="/camera-condition" component={cameraCondition} /> {/* corrected component name */}
        <Route exact path="/details-camera" component={DetailsCamera} />
        <Route exact path="/camera-question" component={CameraQuestion} />
        <Route exact path="/final-select" component={FinalSelect} />
        <Route exact path="/address-details" component={AddressDetails} />
      </Switch>
    </Router>
  );
};

export default App;
