import './IdCard.css'

const IdCard = props => {

    return (

        <div className="idcard">

            <div id="picture">
                <img src={props.picture} alt="Imagen" />
            </div>

            <div>
                <p><strong>FirstName:</strong>{props.firstName}</p>
                <p><strong>LastName:</strong>{props.lastName}</p>
                <p><strong>Gender:</strong>{props.gender}</p>
                <p><strong>Height:</strong>{props.height}</p>
                <p><strong>Birth:</strong>{props.birth}</p>
            </div>

        </div>
    )
}

export default IdCard