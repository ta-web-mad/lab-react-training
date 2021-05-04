import './Random.css'
 
const Random = props => {
    return (
        
        <article>
           <p>Random Value Between {props.min} and {props.max}: {(Math.floor(Math.random() * props.max) + props.min)} </p>
        </article>
    )
}

export default Random