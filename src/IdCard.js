import './IdCard.css'

const IdCard = props => {

    console.log('Estas son las props', props)

    return (

        <article className="id-card">
            <div>
                <img src={props.picture} alt={`${props.firstName} ${props.lastName}`} />
            </div>
            <div>
            <p><strong>First Name:</strong> {props.firstName}</p>
            <p><strong>Last Name:</strong> {props.lastName}</p>
            <p><strong>Gender Name:</strong> {props.gender}</p>
            <p><strong>Height Name:</strong> {props.height}</p>
            <p><strong>Birth:</strong> {props.birth}</p>
            </div>
            

        </article>
    )
}

export default IdCard