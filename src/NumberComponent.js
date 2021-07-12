import React from "react"
import "./NumberComponent.css"

class NumberComponent extends React.Component {

    state = {
        color: "white",
    }

    render() {
        let helper = this.props.value % 2 === 1 ? 'white' : 'red'

        return (
            <div className="numberBox" style={{ backgroundColor: helper }}>{this.props.value}</div>
        )


    }
}


export default NumberComponent




