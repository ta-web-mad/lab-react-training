import './Random.css'

const Random = (props) => {

    let randomValue = Math.floor(Math.random()*props.max)
    
    return (
        <div className='random'>
            <p>Random Value between {props.min} and {props.max} =&gt; {randomValue}</p>
        </div>
    )
}

export default Random