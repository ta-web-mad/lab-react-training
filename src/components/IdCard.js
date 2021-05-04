import './IdCard.css';

const IdCard = props => {

    return (
        <article className="idCard">
            <figure>
                <img src={props.picture} alt={`${props.name} ${props.lastName}`} />
            </figure>
            <div>
                <h1><strong>First name:</strong>{props.firstName}</h1>
                <h1><strong>Last name:</strong>{props.lastName}</h1>
                <h2><strong>Gender:</strong>{props.gender}</h2>
                <p><strong>Height</strong>{props.height}</p>
                <p><strong>birth</strong>{props.birth}</p>
            </div>
        </article>
    )
}

export default IdCard
