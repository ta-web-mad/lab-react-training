import './Random.css'

const Random = props => {
    const randomNumber = () => {
            return Math.floor(Math.random() * (props.max - props.min)) + props.min;
        }
    
    return (
        <div className="Random">
            <p>Random value between {props.min} and {props.max} = {randomNumber(props.min, props.max)} </p>
        </div>
    )

}

export default Random