import React from "react"
import dieEmpty from "./dieEmpty.png"
import die1 from "./die1.png"
import die2 from "./die2.png"
import die3 from "./die3.png"
import die4 from "./die4.png"
import die5 from "./die5.png"
import die6 from "./die6.png"


// import die from "./img/die.jpg"

class Die extends React.Component {

    state = {
        currentDie: 0,
        diceVal: ['dieEmpty', 'die1', 'die2', 'die3', 'die4', 'die5', 'die6'],
        dieEmpty: dieEmpty,
        die1: die1,
        die2: die2,
        die3: die3,
        die4: die4,
        die5: die5,
        die6: die6,
    }




    clickHandler = () => {
        let randomNumber = 1 + Math.floor(Math.random() * (this.state.diceVal.length - 1))

        this.setState({
            currentDie: randomNumber
        })
        console.log('test', this.state.diceVal[randomNumber])

    }

    executeWithDelay = () => {
        this.setState({
            currentDie: 0
        })
        setTimeout(this.clickHandler, 1000)
    }



    render(props) {
        let picture = this.state.diceVal[this.state.currentDie]
        let picturePath = this.state[picture]
        // let picture = './../img/' + this.state.diceVal[this.state.currentDie] + '.png'

        return (
            <div className="clickableDie" onClick={this.executeWithDelay}>
                {/* <div className="clickableDie" onClick={this.clickHandler}> */}

                <img src={picturePath} alt={picture}></img>
                {/* <img src={picture} alt={picture}></img> */}
                {/* <img src={require(picture)} alt={picture}></img> */}
            </div>

        )
    }
}


export default Die

