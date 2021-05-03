import { Component } from 'react'

import './LikeButton.css'

const colors = ['purple','blue','green','yellow','orange','red']

class LikeButton extends Component {

    constructor() {
        super()
        this.state = {
            value: 0,
            colorId: 0
        }
    }

    stateChange = () => {
        this.setState({ value: this.state.value + 1})
        this.state.colorId === 5 ? this.setState({ colorId: 0 }) : this.setState({ colorId: this.state.colorId +1 })
    }


    render() {

        return (
            <span className="like-btn" onClick={this.stateChange} style={{background: colors[this.state.colorId]}}>
                {this.state.value} likes
            </span>
        )

    }
}

export default LikeButton