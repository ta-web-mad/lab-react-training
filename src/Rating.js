import './Rating.css'

const Rating = props => {


    const tr = parseInt(props.children)



    const rating = Math.round(Number(props.children))

    let ratingPic = ''

    for (let i = 0; i < 5; i++) {
        ratingPic += i < rating ? '\u2605' : '\u2606'
    }




    return (
        <div className='stars'>{ratingPic}</div>


    )

    // return (
    //     <div>Hiiiii</div>

    // )

}

export default Rating