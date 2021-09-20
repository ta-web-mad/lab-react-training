import "./LikeButton.css"
import React from "react"

class LikeButton extends React.Component {
    state = {
        counter: 0,
        colors: ['purple','blue','green','yellow','orange','red'],
        i: 0
    }

    handleNext = () => {
        this.setState({
            counter: this.state.counter + 1,
            i: Math.floor(Math.random() * 6)
        })
    }

    render() {
        return <button className="button" style={{backgroundColor:`${this.state.colors[this.state.i]}`}} onClick={this.handleNext}>{this.state.counter} Likes </button>
    }
}

export default LikeButton