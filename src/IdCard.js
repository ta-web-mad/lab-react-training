import './IdCard.css'

const IdCard = props => {

    const capitalize = value => value[0].toUpperCase() + value.substring(1)
    const setDate = () => {
        const event = new Date(props.birth)
        const options = { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric' };
        return event.toLocaleDateString('en-US', options)
    }

    return (

        <article className="user-card">
            <img src={props.picture} alt={props.firstName} />
            <div className="data">
                <p><strong>First Name</strong>: {capitalize(props.firstName)}</p>
                <p><strong>Last Name</strong>: {capitalize(props.lastName)}</p>
                <p><strong>Gender</strong>: {props.gender}</p>
                <p><strong>Height</strong>: {props.height}</p>
                <p><strong>Birth</strong>: {setDate()}</p>
            </div>
        </article>
    )
}

export default IdCard