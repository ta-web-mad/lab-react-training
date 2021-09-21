import './Random.css'

function Random (props){

    const randomNumber = Math.floor(Math.random() * (props.max - props.min)) + props.min
    return (
    <article>
        <h3>Random value between {props.min} and {props.max} = {randomNumber}</h3>
    </article>
    )


}
export default Random