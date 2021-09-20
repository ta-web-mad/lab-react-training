import "./BoxColor.css";

const BoxColor = (props) =>

{
   
    return (
        <div className="box-color" style={{backgroundColor: `rgb(${props.r},${props.g},${props.b})`}}>
            <h2>Color: rgb({props.r},{props.g},{props.b})</h2> 
        </div>
    )
}

export default BoxColor