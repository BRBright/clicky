import React, { Component } from "react";
import Header from "./Header";
import Wrapper from "./Wrapper";
import Cards from "./Cards/index";
import Footer from "./Footer";
import images from "./images.json";

class Clicky extends Component {
  state = {
    currentScore: 0,
    images
  };

  handleScoreChange = score => {
    this.setState({ currentScore: score });
  };

  render() {
    return (
      <div>
        <Header
          handleScoreChange={this.handleScoreChange}
          score={this.state.currentScore}
        />
        <Wrapper>
          {this.state.images.map(images => (
            <Cards name={images.name} image={images.image} />
          ))}
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default Clicky;
