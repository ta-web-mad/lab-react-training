import "./Random.css"


const Random = (props) =>{

    let result = Math.floor(Math.random() * (props.max - props.min)) + props.min;
    
    
    
    return(
        <div>

            <p>{result}</p>

        </div>
    )
}

export default Random; 