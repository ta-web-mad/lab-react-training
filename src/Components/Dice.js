import React, { Component } from 'react';
import dice1 from '../img/dice1.png';
import dice2 from '../img/dice2.png';
import dice3 from '../img/dice3.png';
import dice4 from '../img/dice4.png';
import dice5 from '../img/dice5.png';
import dice6 from '../img/dice6.png';
import empty from '../img/dice-empty.png';
const images = [dice1, dice2, dice3, dice4, dice5, dice6];

export default class Dice extends Component {
  state = {
    img: dice1,
    contImg: 0,
  };

  clickHandler = () => {
    this.setState({
      contImg: Math.floor(Math.random() * 6),
      img: empty,
    });
    setTimeout(this.getImg, 1000, this.state.contImg);
  };

  getImg = (num) => {
    console.log(num);
    this.setState({
      img: images[num],
    });
  };

  render() {
    return (
      <div>
        <img
          onClick={this.clickHandler}
          src={this.state.img}
          className="DiceFrame"
        />
      </div>
    );
  }
}
