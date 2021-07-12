const IdCard = (props) => {


        const date = (date) => {
                let options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };

                return date.toLocaleDateString('en-US', options);
        }


        return (

                <div className="card">
                        <figure>
                                <img src={props.picture} alt="" />
                        </figure>
                        <div>
                                <p><strong>First name:</strong> {props.firstName}</p>
                                <p><strong>Last name:</strong> {props.lastName}</p>
                                <p><strong>Gender:</strong> {props.gender}</p>
                                <p><strong>Heigth:</strong> {props.heigth}</p>
                                <p><strong>Birth:</strong> {date(props.birth)}</p>
                        </div>
                </div>
        )
}

export default IdCard;