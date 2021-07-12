
import './Ramdon.css'

const Ramdon = (props) => {



    const rndInt = Math.floor(Math.random() * 6) + 1
    const rndInt2 = Math.floor(Math.random() * 100) + 1



    return (

        <>
            <div className="greetings">

                <p>Ramdon value between 1 ad 6 ={rndInt}</p>

            </div>

            <div className="greetings">

                <p>Ramdon value between 1 ad 100 ={rndInt2}</p>

            </div>

        </>
    )
}

export default Ramdon