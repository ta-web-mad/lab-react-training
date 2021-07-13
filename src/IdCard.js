import './IdCard.css'

const IdCard = props => {

    const capitalize = value => value[0].toUpperCase() + value.substring(1)
    const formattedDate = date => {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        const weekDay = daysOfWeek[date.getDay()].substring(0, 3)
        const month = months[date.getMonth()].substring(0, 3)
        const formattedDate = date.getDate() + ' ' + month + ' ' + date.getFullYear()
        return weekDay + formattedDate
    }

    return (

        < article className="id-card" >
            <div className='container'>
                <div>
                    <img src={props.picture} alt="Imagen" />
                </div>
                <div>
                    <h5>First Name: {capitalize(props.firstName)}</h5>
                    <h5>Last Name: {capitalize(props.lastName)}</h5>
                    <h5>Gender: {props.gender}</h5>
                    <h5>Height: {props.height}</h5>
                    <h5>Birth D: {formattedDate(props.birth)}</h5>
                </div>
            </div>




        </article >
    )
}

export default IdCard