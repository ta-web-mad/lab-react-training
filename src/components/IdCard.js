import './IdCard.css'


function IdCard (props) {
    return(
      <section>
      <div>
      <img src = {props.picture} alt='id card'/>
      </div>
      <div>
      <p>lastName={props.lastName}</p>
      <p>firstName={props.firstName}</p>
      <p>gender={props.gender}</p>
      <p>height={props.height}</p>
      <p>birth={props.birth}</p>
      </div>
      </section>
    )     
  }

  export default IdCard