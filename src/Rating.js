import React from "react";

function Rating(props) {

    const keySwitch = Math.floor(props.children)
    

    const start = () => {

        
            switch (keySwitch) {
        
                case 0:
                    return  '☆☆☆☆☆'
                case 1:
                    return  '★☆☆☆☆'
                case 2:
                    return  '★★☆☆☆'
                case 3:
                    return  '★★★☆☆'
                case 4:
                    return  '★★★★☆'
                case 5:
                    return  '★★★★★'
                default:
                    return 'Hola'
            }

    }


   return(

       <div>
            <p>{start()}</p>
       </div>
   )
}

export default Rating;