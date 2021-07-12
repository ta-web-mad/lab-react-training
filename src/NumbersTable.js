import React from "react"
import NumberComponent from './NumberComponent'
import "./NumberTable.css"


class NumberTable extends React.Component {

    render() {

        let arr = []
        for (let i = 0; i < this.props.limit; i++) {
            arr.push(<NumberComponent value={i} />)

        }

        // const listItems = numbers.map(oneNumber => <li>{oneNumber}</li> )
        return (
            <div className="numberTable">
                {arr}
            </div>

        )


    }
}


export default NumberTable