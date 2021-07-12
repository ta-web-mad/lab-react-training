import "./IdCard.css"

const IdCard = (props) => {

    return (
        <article >
            <div class="container">
                <div class="row ">
                    <div class="col-3 IdCard">
                        <h4><strong>Last Name:  </strong>{props.lastName}</h4>
                        <h4><strong>First Name: </strong>{props.firstName}</h4>
                        <h4><strong>Gender:     </strong>{props.gender}</h4>
                        <h4><strong>Height:     </strong>{props.height}</h4>
                        <h4><strong>Birth:      </strong>{props.birth}</h4>
                    </div>

                    <div class="col-3 IdCard">
                        <img className="photo" src={props.picture} alt="profilePhoto" />
                    </div>
                </div>
            </div>
        </article>
    )
}

export default IdCard
