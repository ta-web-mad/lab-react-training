import './Random.css'

const Random = props => {

    const generateRandomNumber = (min, max) =>  {
        return Math.floor(Math.random() * (max - min) + min);
    }

    return (
        <div className='random_container'>
            <p>Random value between {props.min} and {props.max} = {generateRandomNumber(props.min, props.max)}</p>
        </div>

    )
}

export default Random