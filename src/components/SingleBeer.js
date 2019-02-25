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

class SingleBeer extends Component {
  state = { beer: "" };

  componentDidMount() {
    const { id } = this.props.match.params;
    axios
      .get(`https://ironbeer-api.herokuapp.com/beers/single/${id}`)
      .then(response => {
        this.setState({
          beer: response.data
        });
      });
  }

  render() {
    const { beer } = this.state;
    console.log(beer);
    return (
      <div>
        <div className={home}>
          <Link to="/">Home</Link>
        </div>

        <h2> {beer.name}</h2>
        <p> {beer.tagline}</p>
        <img src={beer.image_url} alt="beer" />
      </div>
    );
  }
}

export default SingleBeer;
