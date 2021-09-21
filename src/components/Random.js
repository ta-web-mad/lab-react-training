import React from 'react'

export default function Random({ min, max }) {
    return (
        <div>
            <p> Random value between {min} and {max} es {
                Math.floor(min + Math.random() * max)
            }</p>

        </div>
    )
}
