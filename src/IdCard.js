import './IdCard.css'

const IdCard = (props) => {
    return (
        <article className="id-card">
            <div>
                <img src={props.picture} alt={props.firstName} />
            </div>
            <div className="information-card">
                <p><strong>First name: </strong>{props.firstName}</p>
                <p><strong>Last Name: </strong>{props.lastName}</p>
                <p><strong>Gender: </strong>{props.gender}</p>
                <p><strong>Heigth: </strong>{props.height}</p>
                <p><strong>Birth: </strong>{props.birth.toString()}</p>
            </div>
        </article>
    )
}

export default IdCard;