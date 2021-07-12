
import './IdCard.css'

const IdCard = (props) => {

    return (
        <div className="idcard">

            <strong> First Name:</strong> <p> {props.firstname}</p>
            <strong> Last Name:</strong> <p> {props.lastname}</p>
            <strong> gender</strong> <p> {props.gender}</p>
            <strong> Height:</strong> <p> {props.height}</p>
            <strong> Birth:</strong> <p> {props.birth}</p>
            <img src={props.image} alt="Imagen" />

        </div>

    )
}

export default IdCard