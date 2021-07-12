import './ClickablePicture.css';

import normalImg from './img/persons/maxence.png';
import glassesImg from './img/persons/maxence-glasses.png';
import { Component } from 'react';

class ClickablePicture extends Component  {

    state = {
        image: normalImg,
    }

    switchImages = () => {
        this.setState({
            image: this.state.image === normalImg ? (glassesImg) : (normalImg)
        })
    }

    render() {
        return (
            <article className="clickable-picture">
                <img src={this.state.image} alt="Default" onClick={this.switchImages} />
            </article>
        )
    }
}

export default ClickablePicture;