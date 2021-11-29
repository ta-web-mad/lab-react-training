import React from 'react';
import './Dice.css';

class Dice extends React.Component {
  constructor(props) {
    super(props);
    this.diceEmpty = '/img/dice-empty.png';
    this.diceImages = [
      '/img/dice1.png',
      '/img/dice2.png',
      '/img/dice3.png',
      '/img/dice4.png',
      '/img/dice5.png',
      '/img/dice6.png',
    ];
    this.state = {
      imageUrl: this.diceImages[Math.floor(Math.random() * 5)],
    };
  }

  clickHandler = () => {
    if (this.state.imageUrl !== this.diceEmpty) {
      this.setState({
        imageUrl: this.diceEmpty,
      });

      setTimeout(() => {
        this.setState({
          imageUrl: this.diceImages[Math.floor(Math.random() * 5)],
        });
      }, 1000);
    }
  };

  render() {
    return (
      <img
        className="dice"
        onClick={this.clickHandler}
        src={this.state.imageUrl}
        alt="dice"
      />
    );
  }
}

export default Dice;
