import React from "react"
import "./LikeButton.css"

class LikeButton extends React.Component {

    state = {
        noClicks: 0,
        colors: ['purple', 'blue', 'green', 'yellow', 'orange', 'red'],
        currentColor: 'grey',
    }

    clickHandler = () => {
        const randomValue = this.state.colors[Math.floor(Math.random() * (this.state.colors.length))]
        this.setState({
            noClicks: this.state.noClicks += 1,
            currentColor: randomValue
        })
    }



    render() {

        return (
            <button
                className="countingButton"
                style={{ backgroundColor: this.state.currentColor }}
                onClick={this.clickHandler}>
                {this.state.noClicks} Clicks
            </button>
        )
    }
}


export default LikeButton



// import './Button.css'

// const Button = props => {

//     const targetValue = props.newWindow ? '_blank' : '_self'

//     return (
//         <a
//             href={props.link}
//             className="button"
//             target={targetValue}
//             style={{ color: props.danger ? 'red' : 'green' }}
//         >
//             {props.buttonText}
//         </a>
//     )
// }

// export default Button