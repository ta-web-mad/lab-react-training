import React from 'react';
import { Component } from 'react';
import img1 from './img/dice1.png';
import img2 from './img/dice2.png';
import img3 from './img/dice3.png';
import img4 from './img/dice4.png';
import img5 from './img/dice5.png';
import img6 from './img/dice6.png';
import empty from './img/dice-empty.png';
import './Dice.css';

const imgs = [img1, img2, img3, img4, img5, img6];

class Dice extends Component {
  state = {
    randomNum: 0,
    img: img3,
  };

  clickHandler = () => {
    this.setState({
      randomNum: Math.floor(Math.random() * (5 - 0 + 1) + 0),
      img: empty,
    });
    setTimeout(this.getImg, 1000, this.state.randomNum);
  };
  getImg = (num) => {
    console.log(num);
    this.setState({
      img: imgs[num],
    });
  };
  render() {
    return (
      <div className="dice">
        <img onClick={this.clickHandler} src={this.state.img} alt="" />
      </div>
    );
  }
}
export default Dice;
