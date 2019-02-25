import React, { Component } from "react";
import { Link } from "react-router-dom";
import { css } from "emotion";

const home = css`
  width: 20%;
  display: flex;
  justify-content: space-between;

  a {
    text-decoration: none;
    font-size: 20px;
  }
`;

class Home extends Component {
  state = {};
  render() {
    return (
      <div className={home}>
        <Link to="/beers"> beers</Link>
        <Link to="/random-beer"> random beer</Link>
        <Link to="/new-beer"> add a beer</Link>
      </div>
    );
  }
}

export default Home;
