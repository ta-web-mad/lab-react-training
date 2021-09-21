import React, { useState } from 'react'


export default function ClickablePicture({ img, imgClicked }) {
    const [click, setClick] = useState(img)
    return (
        <div>
            <img src={click} onClick={() => {
                setClick(imgClicked)
                click === img ? setClick(imgClicked) : setClick(img)
            }} />
        </div>
    )
}
