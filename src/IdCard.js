import './IdCard.css';

const IdCard = (props) => {

    return (
        <article style={{ backgroundColor: props.selected && 'lightblue'}}>
        
            <main>
                <p><strong>First Name:</strong> {props.firstName}</p>
                <p><strong>Last Name:</strong> {props.lastName}</p>
                { props.country && <p><strong>Country:</strong> {props.country}</p> }
                { props.isStudent ? 
                    <p><strong>Type:</strong> Student</p> :
                    <p><strong>Type:</strong> Teacher</p>
                }
                { props.gender && <p><strong>Gender:</strong> {props.gender}</p> }
                { props.height && <p><strong>Height:</strong> {props.height}</p> }
                { props.birth && <p><strong>Birth:</strong> {props.birth.toISOString().split('T')[0]}</p> }
            </main>
            <img src={props.picture || props.img} alt="Profile" />
        </article>
    )
}

export default IdCard;