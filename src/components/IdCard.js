import "./IdCard.css"

const IdCard = props => {
    return (
        <article className="card">

            <figure>
                <img src={props.picture} alt={`${props.firstName} ${props.lastName}`} />
            </figure>

            <div>
                <p><strong>First name:</strong> {props.firstName}</p>
                <p><strong>Last name:</strong> {props.lastName}</p>
                <p><strong>Gender:</strong> {props.gender}</p>
                <p><strong>Height:</strong> {props.height}</p>
                <p><strong>Birth:</strong> {props.birth}</p>
            </div>

        </article>
    )
}

export default IdCard