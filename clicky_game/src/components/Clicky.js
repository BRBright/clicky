import React, { Component } from "react";
import Header from "./Header";
import Wrapper from "./Wrapper";
import Cards from "./Cards/index";
import Footer from "./Footer";
import images from "./images.json";

class Clicky extends Component {
  state = {
    count: 0,
    images
  };

  handleScoreChange = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <Header score={this.state.count} />
        <Wrapper>
          {this.state.images.map(images => (
            <Cards
              name={images.name}
              image={images.image}
              handleScoreChange={this.handleScoreChange}
            />
          ))}
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default Clicky;
