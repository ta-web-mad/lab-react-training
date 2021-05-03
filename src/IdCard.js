import './IdCard.css'
import Moment from 'moment';

const IdCard = props => {

    const height = props.height/100
    const birthdate = props.birthDate
    

    return (
        <div className="indiv-card">
            <img src={props.image} alt={`${props.firstName} ${props.lastName}`} />
            <div>
                <p><b>First name: </b>{props.firstName}</p>
                <p><b>Last name: </b>{props.lastName}</p>
                <p><b>Gender: </b>{props.gender}</p>
                <p><b>Height: </b>{height} m</p>
                <p><b>Birth: </b>{Moment(birthdate).format('ddd DD-MM-YYYY')}</p>
            </div>
        </div>
    )
}

export default IdCard