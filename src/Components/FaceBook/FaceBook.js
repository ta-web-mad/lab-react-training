import profiles from '../../data/berlin.json'
import './FaceBook.css'
import Button from './Button.js'
const FaceBook = () => {

    const countries = []
    profiles.forEach(profile => countries.push(profile.country))
    const unique = (value, index, self) => self.indexOf(value) === index
    const countriesList = countries.filter(unique)

    return(
    <div className="facebook">

        <div className="buttons-container">
            {countriesList.map(country => {
                return (
                    <div className="facebook-button">
                        <Button text={country}/>
                    </div>
                )
            })}
        </div>

        <div className="facebook-cards">
            {profiles.map(profile => {
                    return (
                        <div className="profile-info">
                            <div className="left-col">
                                <img src={profile.img} alt={profile.firstName} />
                            </div>
                            <div className="right-col">
                                <p><span className="bold">Name</span>: {profile.firstName}</p>
                                <p><span className="bold">Last Name</span> {profile.lastName}</p>
                                <p><span className="bold">Country</span> {profile.country}</p>
                                <p><span className="bold">Type</span> {profile.isStudent ? "STUDENT" : "TEACHER"}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
    )

}

export default FaceBook
