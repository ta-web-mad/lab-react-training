import "./Rating.css";

function Rating ({children}){

    let score = children

    if(score < 0.5)return <div className='rating'>☆☆☆☆☆</div>
    else if (score > 0.5 && score <= 1.5) return <div className='rating'>★☆☆☆☆</div>
    else if (score > 1.5 && score <= 2.5) return <div className='rating'>★★☆☆☆</div>
    else if (score > 2.5 && score <= 3.5) return <div className='rating'>★★★☆☆</div>
    else if (score > 3.5 && score <= 4.5) return <div className='rating'>★★★★☆</div>
    else if (score > 4.5 && score <= 5) return <div className='rating'>★★★★★</div>
    
}

export default Rating;
