import "./Idcard.css"


const Idcard = (props) => {

  return(

    <div className="card">
      <div>
        <img src={ props.picture } alt="student image"/>
      </div>

      <div className="card-style">
        <p>firstName: { props.firstName }</p>
        <p>lastName:{ props.lastName }</p>
        <p>Gender:{ props.gender }</p>
        <p>Height:{ props.height }</p>
        <p>Birthday:{ props.birth.toLocaleString() }</p>
      </div>
    </div>

  )

}

export default Idcard;