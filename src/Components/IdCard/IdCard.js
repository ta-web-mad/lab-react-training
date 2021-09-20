import "./IdCard.css"

const Card = (props) => {

    const { lastName, firstName, gender, height, birth, picture } = props

    return (

        <div className="id-card">
            <div className="left-column">
                <img src={picture} alt={`${firstName} ${lastName}`} />
            </div>
            <div className="right-column">
                <p><span className="bold">First Name: </span> <span> {firstName} </span></p>
                <p><span className="bold">Last Name: </span> <span> {lastName} </span></p>
                <p><span className="bold">Gender: </span> <span> {gender} </span></p>
                <p><span className="bold">Height: </span> <span> {height} </span></p>
                <p><span className="bold">Birth: </span> <span> {birth} </span></p>
            </div>
        </div>

    )
}

export default Card