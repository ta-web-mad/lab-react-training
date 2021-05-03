import './IdCard.css'

const IdCard = props => {

    return (

        <article className="student-card">
            <div>
                <img src={props.picture} alt={`${props.firstName} ${props.lastName}`} />
            </div>
            <div class="student-details">
                <p><b>First name: </b>{props.firstName}</p>
                <p><b>Last name: </b>{props.lastName}</p>
                <p><b>Gender: </b>{props.gender}</p>
                <p><b>Height: </b>{props.height}m</p>
                <p><b>Birth: </b>{props.birth}</p>
            </div>

        </article>
    )
}

export default IdCard
