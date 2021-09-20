import React from "react";
import "./ClickablePicture.css"

class ClickablePicture extends React.Component {

    constructor(props) {
        super(props)
        this.img = props.img
        this.imgClicked = props.imgClicked
    }
    
    
    state = {
        clicked: false
    }


    handleNext = () => {
        this.setState({
            clicked: this.state.clicked ?  false : true
        })
    }

    render() {
        return <img  className="picture" onClick={this.handleNext} src={this.state.clicked ? this.imgClicked : this.img} alt="face of a person"/>
    }
}

export default ClickablePicture
