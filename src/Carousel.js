import './Dice.css';

import { Component } from 'react';

class Carousel extends Component  {
    
    state = {
        index: 0
    };

    imageList = this.props.imgs.map((el, i) => <li key={i}>{el}</li>)

    prevImage = () => {
        this.setState({
            index: this.state.index > 0 ? this.state.index - 1 : this.imageList.length - 1,
        });
    }

    nextImage = () => {
        this.setState({
             index: this.state.index < this.imageList.length - 1 ? this.state.index + 1 : 0,
        });
    }

    render() {
        return (
            <article className="carousel-article">
                <button onClick={this.prevImage}>Left</button>
                <div>
                    <img src={this.props.imgs[this.state.index]} alt="" />
                </div>
                <button onClick={this.nextImage}>Right</button>
            </article>
        )
    }
}

export default Carousel;