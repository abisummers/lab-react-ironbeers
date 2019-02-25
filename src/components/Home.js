import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/beers"> beers</Link>
        <Link to="/random-beer"> random beer</Link>
        <Link to="/new-beer"> add a beer</Link>
      </div>
    );
  }
}

export default Home;
