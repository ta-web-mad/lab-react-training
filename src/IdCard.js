import './IdCard.css'

const IdCard = (props) => {
    return (
        <div
            className="id-card"
        >
            <aside>
                <img src={props.picture} alt={props.firstName}/>
            </aside>
            <article>
                <p><strong>First name: </strong> {props.firstName}</p>
                <p><strong>Last name: </strong> {props.lastName}</p>
                <p><strong>Gender: </strong> {props.gender}</p>
                <p><strong>Height: </strong> {props.height}</p>
                <p><strong>Birth: </strong> {props.birth.toString().split(0,1)}</p>
            </article>
        </div>
    )
}

export default IdCard