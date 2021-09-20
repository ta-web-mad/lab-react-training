import "./Random.css";

function Random(props){

    let random = Math.floor(Math.random() * props.max) + props.min

    return (
        <p className='random'>Random value between {props.min} and {props.max} = {random}</p>
    )
}

export default Random;
