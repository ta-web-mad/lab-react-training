const UserCard = (props) =>{

    const capitalize = value => value[0].toUpperCase() + value.substring(1)

    return (

        

        <article className="user-card">
            <img src={props.picture} alt={props.firstName} />
            <div className="info">
                <p><strong>FirstName:</strong>{capitalize(props.firstName)}</p>
                <p><strong>LastName:</strong>{capitalize(props.lastName)}</p>
                <p><strong>Gender:</strong>{props.gender}</p>
                <p><strong>Height:</strong>{props.height}</p>
                <p><strong>Birth:</strong>{(props.birth.toDateString())}</p>
            </div>
        </article>
    )
}

export default UserCard