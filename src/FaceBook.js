import React from "react"
import profiles from './berlin.json'
import IdCardFaceBook from './IdCardFaceBook'


class FaceBook extends React.Component {

    render() {

        const arr = profiles.map(person => <IdCardFaceBook
            lastName={person.lastName}
            firstName={person.firstName}
            country={person.country}
            isStudent={person.isStudent}
            img={person.img}

        />);
        return (
            <div className="numberTable">
                {arr}
            </div>

        )


    }
}


export default FaceBook