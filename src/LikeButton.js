import React, { Component } from "react";

import './LikeButton.css';

class LikeButton extends Component {
        state = {
          clickCount: 0,
          backColor: 'purple'

        };
        
        clickHandler = () => {

            for(let i=0; i < 5; i++) {
                let loopColor = ['purple','blue','green','yellow','orange','red'];
                
                this.setState({
                    clickCount: this.state.clickCount + 1,
                    backColor: this.state.backColor
                    
                });
                
                this.state.backColor = loopColor[i];
            }
            
            this.state.backColor = this.state.backColor;

        };




  render() {
    return (
        <button style={{ backgroundColor: this.state.backColor }} onClick={this.clickHandler}> {this.state.clickCount} Like</button>
        )
  }
}

export default LikeButton
