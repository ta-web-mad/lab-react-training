import React from "react";

import "./Carousel.css";

class Carousel extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            selector: 0
        }
    }

    handleLeft = () => {

        let newValue = this.state.selector === 0 ? this.props.imgs.length - 1 : this.state.selector - 1
        this.setState({
            selector: newValue,
        })
    }

    handleRight = () => {
        let newValue = this.state.selector === this.props.imgs.length - 1 ? 0 : this.state.selector + 1
        this.setState({
            selector: newValue,
        })        
    }
    
    render() {

        return (
            <div className="carousel">
                <button onClick={this.handleLeft}>Left</button>
                <img className="carousel-image" src={this.props.imgs[this.state.selector]}  alt="carousel"/>
                <button onClick={this.handleRight}>Right</button>
            </div>
        )
    }

}

export default Carousel