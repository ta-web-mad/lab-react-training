import React from "react"
import "./ClickablePicture.css"

class ClickablePicture extends React.Component {

    state = {
        clicked: true
    }

    clickHandler = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }


    render(props) {
        let picture = this.state.clicked ? this.props.img : this.props.imgClicked

        return (
            <div className="clickablePicture" onClick={this.clickHandler}>
                <img src={picture} alt="portrait"></img>
            </div>
        )
    }
}


export default ClickablePicture
