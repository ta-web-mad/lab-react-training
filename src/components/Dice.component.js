import React from 'react';


class Dice extends React.Component {
  constructor(props) {
    super(props);
    this.initialDice = '/img/dice-empty.png';
    this.images = [
       
      '/img/dice1.png',
      '/img/dice2.png',
      '/img/dice3.png',
      '/img/dice4.png',
      '/img/dice5.png',
      '/img/dice6.png',
    ];


    this.state = {
      imageUrl: this.initialDice,
    };
  }


setEmpty =() => {
    this.setState({
      imageUrl: this.initialDice,
    });
}

changeState = () => {
    this.setEmpty()

     setTimeout(() => {
        this.setState({
          imageUrl: this.images[Math.floor(Math.random() * (5 - 0 + 1))],
        });
      }, 1000);
    }
  

  render(){
    return (
      <div class="dice-div">
        <img onClick={this.changeState} src={this.state.imageUrl} alt="" />
      </div>
    );
  }

}
export default Dice;
