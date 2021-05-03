import { Component } from 'react'

import './ClickablePicture.css'

class ClickablePicture extends Component {

    constructor() {
        super()
        this.state = {
            src: './../img/persons/maxence.png',
        }
    }    

    pictureChange = () => {
        this.setState({ src: './../img/persons/maxence-glasses.png'})
    }

    render() {
        return (
            <img className="clickable-picture" onClick={this.pictureChange} src={this.state.src} alt="Maxence"></img>
        )
    }
}

export default ClickablePicture