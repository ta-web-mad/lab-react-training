import './IdCard.css'


const IdCard = props => {

    const meters = value => value * 0.01 + "m"

    return (


        < div className="container justify-content-center" >
            <div className="row idCard">
                <div className="col-2">

                    <img src={props.picture} alt="Imagen" className="img" />
                </div>
                <div className="col-6 text">
                    <strong>Last name </strong>: {props.lastName}<br />
                    <strong>First name: </strong>{props.firstName}<br />
                    <strong>gender: </strong>{props.gender}<br />
                    <strong>height: </strong> {meters(props.height)}<br />
                    <strong>Birth: </strong>{props.birth}<br />
                </div>
            </div>
        </div >

    )
}

export default IdCard