const Random = props => {

const randomNumber = Math.floor(Math.random() * (`${props.max}` - `${props.min}` + 1) + `${props.min}`)

    return (

        <article className="random-box">
            <h5>Random value between {props.min} and {props.max} => {randomNumber}</h5>
        </article>
    )
}

export default Random