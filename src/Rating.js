import React from 'react'


const Rating = (props) => {
    let estrellitas = "";
    let batman = Math.floor(props.children)

    
    if (batman === 0) {
        estrellitas = '☆'
    }
    if (batman === 1) {
        estrellitas = '★'
    }
    if (batman === 2) {
        estrellitas = '★★☆☆☆'
    }
    if (batman === 3) {
        estrellitas = '★★★☆☆'
    }
    if (batman === 4) {
        estrellitas = '★★★★☆'
    }
    if (batman === 4) {
        estrellitas = '★★★★★'
    }

    return <div>{estrellitas}</div>;
}

export default Rating


// ☆☆☆☆☆

// ★★★★★