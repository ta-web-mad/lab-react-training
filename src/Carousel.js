import { Component } from 'react'

import './Carousel.css'

const imgs = [
    'https://randomuser.me/api/portraits/women/1.jpg',
    'https://randomuser.me/api/portraits/men/1.jpg',
    'https://randomuser.me/api/portraits/women/2.jpg',
    'https://randomuser.me/api/portraits/men/2.jpg'
  ]

console.log(imgs[0])

class Carousel extends Component { 

    constructor() {
        super()
        this.state = {
            imdId: 0,
        }
    } 
    
    imageChange = () => {
        this.state.imdId === 3 ? this.setState({ imdId: 0 }) : this.setState({ imdId: this.state.imdId + 1 })
    }

    render() {
        return (
            <img className="carousel" onClick={this.imageChange} src={imgs[this.state.imdId]} alt="Carousel Image"></img>
        )
    }

}

export default Carousel