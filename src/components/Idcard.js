import './Idcard.css'
const IdCard = props => {

    return (
        <article>
            <h1>Id Card</h1>
            <div className='idcard'>
                <div>
                    <img src={props.picture}></img>
                </div>
                <div className='idcard-text'>
                    <h3>First name: {props.firstName}</h3>
                    <h3>Last name: {props.lastName}</h3>
                    <p>Gender: {props.gender}</p>
                    <p>Height: {props.height}</p>
                    <p>Birth: {props.birth}</p>
                </div>

            </div>

        </article>
    )
}
export default IdCard