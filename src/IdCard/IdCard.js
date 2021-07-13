import IdCard from './IdCard.css'

const IdCards = props => {


    return (
        <div className="border">
            <div>
                <img src={props.picture} />
            </div>
            <div>
                <p>{props.lastName}</p>
                <p>{props.firstName}</p>
                <p>{props.height}</p>
            </div>
        </div>
        //<p>{props.birth}</p>


    )
}

export default IdCards