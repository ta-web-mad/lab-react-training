import { Component } from 'react'
import './LikeButton.css'

const colorArray = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']

class LikeButton extends Component {

    constructor() {
        super()
        this.state = {
            text: 'Likes',
            value: 0,
            color: colorArray[0],
        }
    }

    setVariousStates = (value, color) => {
        this.setState ({ 
            value: ++this.state.value,
            color: colorArray.forEach(item => (color = item))
        })
    }

    render() {

        return (
            <section className="likebutton" onClick={this.setVariousStates} style ={{ background: this.state.color}}>
                <h2>{this.state.value} {this.state.text}</h2>
            </section>
        )

    }
}

export default LikeButton