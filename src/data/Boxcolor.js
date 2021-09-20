import "./Boxcolor.css"

const BoxColor = (props) => {

    const backgroundColor = {

     backgroundColor: `rgb(${props.r},${props.g},${props.b})`

    }
   
    return(

        <div style={backgroundColor}>Hello World!</div>
    
    )


}

export default BoxColor;