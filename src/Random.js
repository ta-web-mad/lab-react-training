import './Random.css'

const Random = (props) => {

    const { max, min } = props
    const random = () => Math.floor(Math.random() * (props.max - props.min) + props.min)

    return (
        <div className="random-number">
            <p>Random Value between {min} and {max} = {random()}</p>
        </div>
    )
}

export default Random;