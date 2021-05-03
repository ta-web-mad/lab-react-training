import './IdCard.css'

const IdCard = props => {
    //console.log(props)

    return (
        <div className="box IdCard">
            <img src={props.picture} alt={`${props.firstName}-${props.lastName}`}></img>
            <div>
                <span><b>First Name:</b>{props.firstName}</span><br></br>
                <span><b>Last Name:</b>{props.lastName}</span><br></br>
                <span><b>Gender:</b>{props.gender}</span><br></br>
                <span><b>Height:</b>{props.height}</span><br></br>
                <span><b>Birth:</b>{props.birth.toDateString()}</span><br></br>
            </div>
        </div>
    )
}

export default IdCard