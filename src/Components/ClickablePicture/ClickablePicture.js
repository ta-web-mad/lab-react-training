/* import React from 'react'
import './ClickablePicture.css'


class ClickablePicture extends React.Component {
    constructor(props) {
        super(props);
        this.img = props.img;
        this.img2 = props.img2;
        this.state = {
            clicked: false
            }

        this.handleClick = this.handleClick.bind(this);

        this.handleClick()
            this.setState(prevState => ({
                clicked: !prevState.clicked
            }))

        this.render()
            return (
                <button onClick= {this.handleClick}>
                    <img src={this.state.clicked ? this.img : this.img2} alt={this.img}></img>
                </button>
            )

        


    }
}


export default ClickablePicture */