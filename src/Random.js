import "./Random.css"

const Random = (props) => {

    const randomNumber = (minValue, maxValue) => Math.floor((Math.random() * (minValue - maxValue)) + maxValue)

    return (
        <h2 className="random">Random value between {props.min} and {props.max} = {randomNumber(props.min, props.max)}</h2>
    )

}

export default Random