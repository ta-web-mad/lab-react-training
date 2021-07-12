import './IdCard.css'
const IdCard = props => {
    return (
        <article className="user-card">
            <img src={props.picture} alt='pic' />
            <p>lastName: {props.lastName}</p>
            <p>firstName: {props.firstName}</p>
            <p>gender: {props.gender}</p>
            <p>height: {props.height}</p>
            <p>birth: {props.birth}</p>
        </article>
    )
}

export default IdCard;