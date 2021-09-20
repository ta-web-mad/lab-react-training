import "./Random.css";

const Random = (props) =>

{

   let randomNumber = Math.floor((Math.random() * (props.max - props.min) + props.min))


    return (
        <div className="boxRandom">
            <h2>A random number between {props.min} and {props.max} ➡ {randomNumber}</h2> 
        </div>
    )
}

export default Random