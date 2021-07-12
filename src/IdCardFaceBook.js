import './IdCardFaceBook.css'




const IdCardFaceBook = props => {

    const capitalize = value => value[0].toUpperCase() + value.substring(1)


    return (
        < article className="cardFacebook" >
            <div className='containerCardFacebook'>
                <div className="inlineDiv">
                    <img src={props.img} alt="Imagen" />
                </div>
                <div className="inlineDiv">
                    <h5>First Name: {capitalize(props.firstName)}</h5>
                    <h5>Last Name: {capitalize(props.lastName)}</h5>
                    <h5>Country: {props.country}</h5>
                    <h5>Type: {props.isStudent ? 'Student' : 'Teacher'}</h5>
                </div>
            </div>

        </article >
    )
}

export default IdCardFaceBook