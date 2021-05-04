import './Random.css'

const random = (Math.floor(Math.random() * 100) + 1)
const Random = props => {
      
    return (
        
        <article>
           <p>Random Value Between {props.min} and {props.max}: {random} </p>
        </article>
    )
}

export default Random