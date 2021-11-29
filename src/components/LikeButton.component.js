import React from 'react'
// import{ useState } from 'react';

class LikeButton extends React.Component {
  state = {
    counter: 0,
    color: ['purple', 'blue', 'green', 'yellow', 'orange', 'red'],
    ref : 0
  };


  changeState = () => {
      
      this.setState({
        counter: this.state.counter +1,
        ref: Math.floor(Math.random() * (5 - 0 + 1) ),
      });
  }

  render() {
    return (
      <div>
        <button
          style={{ backgroundColor: this.state.color[this.state.ref] }}
          onClick={this.changeState}
        >
          
          {this.state.counter} Likes
        </button>
      </div>
    );
  }
}

export default LikeButton
