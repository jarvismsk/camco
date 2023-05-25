import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import CanonModels from './components/CanonModels';
import NikonModels from './components/NikonModels';
import SonyModels from './components/SonyModels';
import CanonLens from './components/CanonLens';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/canon/models" component={CanonModels} />
        <Route exact path="/canon/lens" component={CanonLens} />
        <Route path="/nikon/models" component={NikonModels} />
        <Route path="/sony/models" component={SonyModels} />
      </Switch>
    </Router>
  );
};

export default App;
