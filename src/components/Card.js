import './Card.css'

const IdCard = (prop) => {

    return (
        <article className='card'>
            
                <div >
                    <img src={prop.picture} alt={prop.firstname}/>
                </div>
                <div >
                    <p><strong>Firts Name:</strong>{prop.firstName}</p>
                    <p><strong>Last Name:</strong>{prop.lastName}</p>
                    <p><strong>Gender:</strong>{prop.gender}</p>
                    <p><strong>Height:</strong>{prop.height}</p>
                    <p><strong>Birth:</strong>{prop.birth.toLocaleDateString()}</p>
                </div>
           
        </article>
    )}

export default IdCard