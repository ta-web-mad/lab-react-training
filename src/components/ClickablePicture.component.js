import React from "react";


class ClickablePicture extends React.Component {

    constructor(props) {
        super(props)
        this.img = props.img
        this.imgClicked = props.imgClicked
    }


    state = {
        clicked: false
    }
    
    changeState = () => {
          this.setState({
            clicked: !this.state.clicked
        })
    }

        render(){
        return <img onClick={this.changeState} src={this.state.clicked ? this.imgClicked : this.img} alt=""/>
    }
}


export default ClickablePicture;