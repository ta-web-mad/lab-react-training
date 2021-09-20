

const Rating = (props) => {

    const number = Math.floor(props.children)

    const star = () => {


        switch (number){
    

            case 0:
                 return "☆☆☆☆☆"

            case 1:
                return "★☆☆☆☆"
            
            case 2:
                return "★★☆☆☆"
               
            case 3:
                return "★★★☆☆"
                
            case 4:
                return "★★★★☆"
    
            case 5:
                return "★★★★★"
                
            default:
                return "not a value"
                
        }

    }
   

    return (

        <div>
            <p>{star()}</p>
        </div>

    )
}

export default Rating;