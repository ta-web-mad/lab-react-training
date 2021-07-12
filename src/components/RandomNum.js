import './RandomNum.css'

const RandomNum = props => {
    const randomNumber = Math.floor( Math.random() * (props.max - props.min + 1) + props.min )//does't works properly
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random?retiredLocale=it#getting_a_random_number_between_two_values
    return (
        <div className='rdm-num'>
            <h2> A Random number between {props.min} and {props.max} is {randomNumber} </h2>
        </div>
    )
}

export default RandomNum