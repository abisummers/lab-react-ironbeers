import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Beers from "./components/Beers";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";
import Home from "./components/Home";
import SingleBeer from "./components/SingleBeer";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={Beers} />
          <Route exact path="/random-beer" component={RandomBeer} />
          <Route exact path="/new-beer" component={NewBeer} />
          <Route exact path="/beers/:id" component={SingleBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
