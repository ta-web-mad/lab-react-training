const Random = props => {

    const randomNum = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min
    }

    return (

        <article className="user-card">
            <p> Random value between {props.min} and {props.max} =  {randomNum(props.min, props.max)} </p>
        </article>
    )
}

export default Random