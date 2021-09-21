import React, { useState } from 'react'
import styled from 'styled-components'

const bg = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']

export default function LikeButton() {
    const [count, setCount] = useState(0)
    const [bground, setBground] = useState(0)
    return (
        <div className="container-like-button" >
            <button style={{ background: `${bg[bground]}` }} onClick={() => {
                setCount(count + 1)
                setBground(bground + 1)
            }
            } >
                Click me {count}
            </button>

        </div>
    )
}
