import React from 'react';
import randomNumber from './utils/random-number'
const Random = (props) => {
    const {min, max} = props
    const random = randomNumber(min, max)

    return (
        <div className="border">
            Random value between {min} and {max} {'=>'} {random}
        </div>
    )
}

export default Random