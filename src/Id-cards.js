
const IdCard = (props) => {

    const capitalize = value => value[0].toUpperCase() + value.substring(1)

    return (
        < article className="cards">


            <h3>lastName: {capitalize(props.lastName)} </h3>
            <h3>firstName: {capitalize(props.firstName)} </h3>
            <p>gender: {capitalize(props.gender)}</p>
            <p>height: {(props.height) / 100}</p>
            <p>birth: {(props.birth.toDateString())}</p>
            <img src={props.picture} alt="Imagen" />

        </article>

    )
}


export default IdCard
