import React, { Component } from "react";
import axios from "axios";

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
        <h1>Beers </h1>

        {beers.map(el => {
          return (
            <div key={el._id}>
              {el.name}
              <img src={el.image_url} alt="beer" />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Beers;
