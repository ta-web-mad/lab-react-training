import './IdCard.css'
const IdCard = (props) => {

    const date = `${props.birth}`.slice(0,15);
  
    return (
        <article className="card">
          <div>
            <img class = "img-card" src={props.picture} alt={props.picture} />
          </div>
          <div>
            <p className ="letter">Last Name: {props.lastName}</p>
            <p className ="letter">First Name: {props.firstName}</p>
            <p className ="letter">Gender: {props.gender}</p>
            <p className ="letter">Height: {props.height}</p>
            <p className ="letter">Birth: {date}</p>
          </div>
        </article>
      )
    }
    
    export default IdCard


