const UserCard = props => {
    
    return (

        <article className="card-id">
            <div class='container'>
                <div class='row'>
                    <div class='col-2'>
                        <img src={props.picture} alt="Image" />
                    </div>
                    <div class='col-4'>
                    <p><strong>First Name</strong>: {props.firstName}</p>
                    <p><strong>Last Name</strong>: {props.lastName}</p>
                    <p><strong>Gender</strong>: {props.gender}</p>
                    <p><strong>Height</strong>: {props.height/100}m</p>
                    <p><strong>Birth</strong>: {props.birth}</p>
                        
                    </div>
                </div>
            </div>

        </article>
    )
}

export default UserCard