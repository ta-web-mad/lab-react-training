import React from 'react';
import { Component } from 'react';
import './LikeButton.css';

class LikeButton extends Component {
  state = {
    contClicks: 0,
    colors: ['purple', 'blue', 'green', 'yellow', 'orange', 'red'],
    contColor: 0,
  };

  clickHandler = () => {
    this.setState({
      contClicks: this.state.contClicks + 1,
      contColor:
        this.state.contColor === 6
          ? this.state.contColor - 6
          : this.state.contColor + 1,
    });
  };

  render() {
    return (
      <div className="likeButton">
        <button
          onClick={this.clickHandler}
          style={{ backgroundColor: this.state.colors[this.state.contColor] }}
        >
          {this.state.contClicks}
        </button>
      </div>
    );
  }
}
export default LikeButton;
