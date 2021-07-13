import React from "react"
import "./Carousel.css"

class Carousel extends React.Component {

    state = {
        currentPicture: 0
    }

    clickLeftHandler = () => {
        let helper = this.state.currentPicture === 0 ? 3 : this.state.currentPicture - 1
        this.setState({
            currentPicture: helper
        })
    }

    clickRightHandler = () => {
        let helper = this.state.currentPicture === 3 ? 0 : this.state.currentPicture + 1
        this.setState({
            currentPicture: helper
        })
    }


    render(props) {
        let picture = this.props.imgs[this.state.currentPicture]

        return (
            <div className="carouselPicture">
                <img src={picture} alt="portrait"></img>

                <button className="navigateAlbum" onClick={this.clickLeftHandler}>Left</button>
                <button className="navigateAlbum" onClick={this.clickRightHandler}>Right</button>
            </div>
        )
    }
}


export default Carousel