import React, { Component } from "react";


class ClickablePicture extends Component {
        state = {
          firstPicture: "./img/persons/maxence.png",
          SecondPicture: "./img/persons/maxence-glasses.png"

        };
        
        clickPicture = () => {
                this.setState({
                    firstPicture: "./img/persons/maxence-glasses.png"
                }); 
            }

  render() {
    return <img src={this.state.firstPicture} onClick={this.clickPicture} alt="random"/> 
        
  }
}
export default ClickablePicture





