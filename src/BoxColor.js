
import './BoxColor.css'

const BoxColor = (props) => {



    const red = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)

    const red2 = Math.floor(Math.random() * 255)
    const blue2 = Math.floor(Math.random() * 255)
    const green2 = Math.floor(Math.random() * 255)

    const divStyle = {
        color: 'red',
        // background: "rgb("{ red } " , 0, 255)"
        border: "3px solid black;",


    };

    return (

        <>
            <div className="boxcolor">

                <p>rgb({red}, {green}, {blue})</p>


            </div>

            <div style={divStyle}>

                <p>rgb({red2}, {green2},{blue2}) </p>








            </div>

        </>
    )
}

export default BoxColor