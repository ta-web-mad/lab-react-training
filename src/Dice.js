import { Component } from 'react'

import './Dice.css'

class Dice extends Component { 

    constructor() {
        super()
        this.state = {
            src: './../img/dice-empty.png',
        }
    } 
    
    diceChange = () => {
        let dicePicture = Math.floor(Math.random() * 6 + 1)
        this.setState({ src: `./../img/dice${dicePicture}.png`})
    }

    render() {
        return (
            <img className="dice" onClick={this.diceChange} src={this.state.src} alt="Dice"></img>
        )
    }

}

export default Dice