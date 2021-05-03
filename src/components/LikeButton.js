import { Component } from 'react'
import './LikeButton.css'

class LikeButton extends Component {
    constructor() {
        super()
        this.state = {
            value: 0,
            color: 0
        }
    }

    activateApplication = () => {

        this.setState({
            value: ++this.state.value,
            color: (this.state.color <= 5) ? ++this.state.color : this.state.color = 0
        })

    }

    render() {
        const back = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']

        return (
            < button
                className="button"
                style={{ background: back[this.state.color] }}
                onClick={this.activateApplication}
            >
                { this.state.value} Likes
            </button>
        )
    }
}

export default LikeButton