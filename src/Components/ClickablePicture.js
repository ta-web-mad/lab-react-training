import React, { Component } from 'react';

export default class ClickablePicture extends Component {
  state = {
    open: true,
  };
  toggleImage = () => {
    this.setState((state) => ({ open: !state.open }));
  };

  getImageName = () => (this.state.open ? 'plus' : 'minus');

  render() {
    const imagesPath = {
      plus: this.props.img,
      minus: this.props.imgClicked,
    };

    const imageName = this.getImageName();
    return (
      <div>
        <img src={imagesPath[imageName]} onClick={this.toggleImage} />
      </div>
    );
  }
}
