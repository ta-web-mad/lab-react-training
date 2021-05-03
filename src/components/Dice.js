import { Component } from 'react'
import './Dice.css'
import Dice3 from './Dice-3.png'
import Dice0 from './Dice-0.svg.png'
import Dice6 from './Dice-6.png'

class Dice extends Component {
    constructor() {
        super()
        this.state = {
            src: Dice3,
        }
    }

    nextImage = () => {
        this.setState({
            src: Dice6
        })
    }

    activateApplication = () => {

        this.setState({
            src: Dice0
        })
        setInterval(() => {
            this.nextImage()
        }, 1000);

    }


    render() {

        return (
            <div>
                < button
                    className="button"
                    // style={{ backgroundImage: { this.state.src } }}
                    onClick={this.activateApplication}
                >
                    <img src={this.state.src}></img>
                </button>

            </div >
        )
    }
}

export default Dice