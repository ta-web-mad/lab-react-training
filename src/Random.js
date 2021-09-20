import './Random.css'

const Random = (props) => {
    const randomNumber = (max, min) => {
        return Math.floor(Math.random() * (max - min) + min);
    }
    return (
        <p>Random value between {props.min} and {props.max} &rarr;
        {randomNumber(props.max.toString(), props.min.toString())}</p>
    )
}

export default Random