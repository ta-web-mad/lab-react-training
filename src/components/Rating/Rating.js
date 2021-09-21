import React from 'react'

export default function Rating(props) {

    console.log(Math.floor(props.children))

    let text = '☆☆☆☆☆'
    let newText
    if (Math.floor(props.children) === 0) {
        console.log("entramos 0")
        newText = text.replace('☆☆☆☆☆', '☆☆☆☆☆')
    }
    if (Math.floor(props.children) === 1) {
        newText = text.replace('☆☆☆☆☆', '★☆☆☆☆')
    }
    if (Math.floor(props.children) === 2) {
        newText = text.replace('☆☆☆☆☆', '★★☆☆☆')
    }
    if (Math.floor(props.children) === 3) {
        newText = text.replace('☆☆☆☆☆', '★★★☆☆')
    }
    if (Math.floor(props.children) === 4) {
        newText = text.replace('☆☆☆☆☆', '★★★★☆')
    }
    if (Math.floor(props.children) === 5) {
        newText = text.replace('☆☆☆☆☆', '★★★★★')
    }
    return (
        <div className="container-rating">
            <h2>{newText}</h2>
        </div>
    )
}
