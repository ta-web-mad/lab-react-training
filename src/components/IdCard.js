import './IdCard.css'

const IdCard = props => {
    return (
        <div className='idcard'>
            <img src={props.image} alt={props.firstName} picture></img>
            <div>
                <p><strong>First name: </strong>{props.firstName}</p>
                <p><strong>Last name:</strong> {props.lastName}</p>
                <p><strong>Gender:</strong> {props.gender}</p>
                <p><strong>Height:</strong> {props.height}</p>
                <p><strong>Birth:</strong>{props.birth}</p>
            </div>
        </div>

    )
}

export default IdCard