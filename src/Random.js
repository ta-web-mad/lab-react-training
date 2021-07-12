const Random = (props) => {
    return (
        
        <div>
    
            <h3>Random Value between {props.min} and {props.max} = {randomNumber}</h3>
    
    </div>
    )
}

export default Random

//podemos interpolar un número random pasándole una variable al HTML
const randomNumber = Math.floor(Math.random() * (5 - 0)) + 0;
