const IdCard = props => {

    const capitalize = value => value[0].toUpperCase() + value.substring(1)
    const realDate = () => {
        const event = new Date(props.birth);

        const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };

        return (event.toLocaleDateString('en-US', options));
    }

    return (
        <>
            <img src={props.picture}></img>
            <p><strong>First name:</strong>{capitalize(props.firstName)}</p>
            <p><strong>Last name:</strong>{capitalize(props.lastName)}</p>
            <p><strong>Gender:</strong>{props.gender}</p>
            <p><strong>Height:</strong>{props.height}</p>
            <p><strong>Birth:</strong>{realDate()}</p>

        </>



    )
}

export default IdCard