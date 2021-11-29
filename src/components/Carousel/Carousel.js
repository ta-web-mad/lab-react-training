import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selector: 0,
    };
  }

  leftClickHandler = () => {
    let value =
      this.state.selector === 0
        ? this.props.imgs.length - 1
        : this.state.selector - 1;
    this.setState({
      selector: value,
    });
  };

  rightClickHandler = () => {
    let value =
      this.state.selector === this.props.imgs.length - 1
        ? 0
        : this.state.selector + 1;
    this.setState({
      selector: value,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.leftClickHandler}>Left</button>
        <img
          className="carousel-image"
          src={this.props.imgs[this.state.selector]}
          alt="carousel"
        />
        <button onClick={this.rightClickHandler}>Right</button>
      </div>
    );
  }
}

export default Carousel;
