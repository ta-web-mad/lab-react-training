import { Component } from 'react';
import './LikeButton.css';

class LikeButton extends Component {

    colorValues = ['purple','blue','green','yellow','orange','red'];

    state = {
        counter: 0,
        color: this.colorValues[0]
    };

    addCounter = () => {
        this.setState({
            counter: this.state.counter + 1,
            color: this.colorValues[(this.state.counter+1) % 6]
        });
    };

    render() {
        return (
            <button 
                onClick={ this.addCounter }
                style={{ backgroundColor: this.state.color }}
            >
                {this.state.counter} likes
            </button>
        );
    }
}

export default LikeButton;