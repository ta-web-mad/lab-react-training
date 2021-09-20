import React from "react";
import './LikeButton.css'

class LikeButton extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      colors: ['purple','blue','green','yellow','orange','red'],
      index: 0,
    };
  }

  handleClick = () => {
    let newCount = this.state.count + 1;
    this.setState({
      count: newCount,
      index: Math.floor(Math.random() * 6) + 1
    });
  };


  render() {

    return (
      <div className='likes_container'>
        <button className='like-button' onClick={this.handleClick} /*style={{background: this.colors[this.state.index]}} */>{this.state.count}</button>
      </div>
    )
  }
}

export default LikeButton;