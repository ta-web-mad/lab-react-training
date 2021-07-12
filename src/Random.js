import './Random.css'

const Random = props => {
    let min = ''
    let max = ''
    let rand = Math.round((Math.random()*(props.max - props.min )))

    return (
        <div className='random'>
            <h3>Random value between {props.min} and {props.max} == {rand}</h3>
        </div>
        
    )
}

export default Random