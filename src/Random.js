import './Random.css'

const Random = props => {
    //console.log(props)

    const randomValue = Math.floor(Math.random() * props.max) + props.min

    return (
    <div className="box Random">
            <span>Random value between {props.min} and {props.max} = {randomValue}</span>
    </div>
    )
}

export default Random