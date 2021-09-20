import './IdCard.css'

const IdCard = props => {

    return (
        <div className={props.containerName}>
            <div className = {props.pictureContainer}>
                <img src={props.picture} alt="profile picture"></img>
            </div>
            <div className = {props.infoContainer}>
                <ul>
                    <li>
                        <p><strong>First Name: </strong>{props.firstName}</p>
                    </li>
                    <li>
                        <p><strong>Last Name: </strong>{props.lastName}</p> 
                    </li>
                    <li>
                        <p><strong>Gender: </strong>{props.gender}</p>
                    </li>
                    <li>
                        <p><strong>Height: </strong>{props.height}</p>
                    </li>
                    <li>
                        <p><strong>Birth: </strong>{props.birth}</p>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default IdCard