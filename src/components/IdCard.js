import './IdCard.css'

const IdCard = props => {

    const fullComponent = (
        < article className="idCard" >
            <div>
                <p>First name: {props.firstName}</p>
                <p>Last name: {props.lastName}</p>
                <p>Gender: {props.gender}</p>
                <p>Height: {props.height}</p>
                <p>Birth: {props.firstName}</p>

            </div>
        </article >

    )

    return fullComponent

}

export default IdCard