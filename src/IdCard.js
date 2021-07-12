import './IdCard.css'
const IdCard = props => {

    const capitalize = value => value[0].toUpperCase() + value.substring(1)

    return (

        <article className="id-card">
            <img className='img-card' src={props.image} alt="Imagen" />
            <p>First Name: {capitalize(props.firstName)}</p>
            <p>Last Name: {capitalize(props.lastName)}</p>
            <p>Gender: {props.gender}</p>
            <p>Height: {props.height}m</p>
            <p>Birth: {props.birth}</p>
        </article>

        
    )
}

export default IdCard