import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { css } from "emotion";

const home = css`
  background-color: #7ac4d3;
  height: 50px;
  text-align: center;
  a {
    text-decoration: none;
    color: white;
    font-size: 20px;
    align-items: center;
  }
`;

class RandomBeer extends Component {
  state = {
    randomBeer: []
  };

  componentDidMount() {
    axios.get("https://ironbeer-api.herokuapp.com/beers/random").then(res => {
      console.log(res.data);
      this.setState({ randomBeer: res.data });
    });
  }

  render() {
    const { randomBeer } = this.state;

    return (
      <div>
        <div className={home}>
          <Link to="/">Home</Link>
        </div>

        <h1>RandomBeer</h1>

        {randomBeer.map(el => {
          return (
            <div key={el._id}>
              <h3>{el.name}</h3>
              <img src={el.image_url} alt="beer" />
            </div>
          );
        })}
      </div>
    );
  }
}

export default RandomBeer;
