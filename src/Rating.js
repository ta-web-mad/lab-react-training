
const Rating = (props) => {

    let starsPrinted = Math.round(props.children)

    return (

        <div class="container stars">

            <div class="ratingStars ratedToFill">&#10025; &#10025; &#10025; &#10025; &#10025;</div>


        </div>
    )
}




export default Rating