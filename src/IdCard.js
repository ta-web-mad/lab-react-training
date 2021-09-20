import "./IdCard.css";

function IdCard(props) {

    return (
      <article className='boxId'> 
        
        <img src={props.picture} alt="student-img" />

            <div>
                <div className="student-line"><h4>First Name: </h4> {props.firstName}</div>
                <div className="student-line"><h4>Last Name: </h4> {props.lastName}</div>
                <div className="student-line"><h4>Gender: </h4> {props.gender}</div>
                <div className="student-line"><h4>Height: </h4> {props.height/100}</div>
                <div className="student-line"><h4>Birth: </h4> {props.birth.toLocaleDateString()}</div>
            </div>  

     </article>

    )
  }
  
  export default IdCard;