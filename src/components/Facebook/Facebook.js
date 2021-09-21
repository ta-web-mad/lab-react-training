import React from 'react'
import data from '../../data/berlin.json'

export default function Facebook() {
    return (
        <div>
            {
                data.map(({ firstName, lastName, country, isStudent, img }) => {
                    return <div className="container-facebook">
                        <img src={img} />
                        <>
                            <h4> FirsName : {firstName}</h4>
                            <h4> LastName : {lastName}</h4>
                            <h4> Gender :{country}</h4>
                            <h4> Height : {isStudent}</h4>
                        </>
                    </div>
                })
            }
        </div>
    )
}
