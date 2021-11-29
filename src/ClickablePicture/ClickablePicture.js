import React from 'react';
import { Component } from 'react';
import img1 from './persons/maxence.png';
import img2 from './persons/maxence-glasses.png';

class ClickablePicture extends Component {
  state = {
    clicked: false,
    img: img1,
  };

  clickHandler = () => {
    this.setState({
      clicked: !this.state.clicked,
      img: this.state.clicked === false ? img1 : img2,
    });
  };

  render(props) {
    return (
      <div className="ClickablePicture">
        <img onClick={this.clickHandler} src={this.state.img} alt="" />
      </div>
    );
  }
}
export default ClickablePicture;

//  onClick={this.clickHandler}
