import { Component } from 'react'
import './Random.css'

class Random extends Component {

    constructor() {
        super()
        this.state = {
            value: 0
        }
    }

    handleRandom = () => {
        this.setState({ value: (Math.floor(Math.random() * 100) + 1) })
    }

    render() {

        return (

            <button className='random-btn' onClick={this.handleRandom}>{this.state.value}</button>
        )

    }
}

export default Random