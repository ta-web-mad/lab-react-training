import './BoxColor.css'

function BoxColor (props){
    
    const divStyle ={
        backgroundColor:`rgb(${props.r},${props.g},${props.b})`
              
    }

    return(
        <div className = "BoxColor-container"
            
                style = {
                     divStyle
                }> 
                rgb({props.r},{props.g},{props.b})
            
        </div>
    )
}

export default BoxColor