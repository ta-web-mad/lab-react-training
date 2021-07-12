const Random = props => {
 
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    return (
        <p>Random value between {props.min} and {props.max} is {getRandomInt(props.min,props.max)} </p>
     


    )
}
export default Random;