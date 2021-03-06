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

class Beers extends Component {
  state = { beers: [] };
  componentDidMount() {
    axios.get("https://ironbeer-api.herokuapp.com/beers/all").then(res => {
      // console.log(res.data);
      this.setState({
        beers: res.data
      });
    });
  }

  render() {
    const { beers } = this.state;
    return (
      <div>
        <div className={home}>
          <Link to="/">Home</Link>
        </div>

        <h1>Beers </h1>

        {beers.map(el => {
          return (
            <div key={el._id}>
              <Link to={`/beers/${el._id}`}>{el.name}</Link>
              <img src={el.image_url} alt="beer" />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Beers;
