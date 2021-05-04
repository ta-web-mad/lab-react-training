import './IdCard.css'

const IdCard = props => {

    return (

        <article className="card">

            <img src={props.picture} alt={`${props.firstName} ${props.lastName}`} />
            <article>
                <p>First name: {props.firstName}</p>
                <p>Last name: {props.lastName}</p>
                <p>Gender: {props.gender}</p>
                <p>Height: {props.height / 100}m</p>
                <p>Birth: {props.birth}</p>
            </article>
        </article>
    )
}

export default IdCard