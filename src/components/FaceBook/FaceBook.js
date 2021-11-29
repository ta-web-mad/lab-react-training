import profiles from '../../data/berlin.json';
import './FaceBook.css';

const FaceBook = () => {
  return (
    <div>
      <div className="facebook-cards">
        {profiles.map((profile) => {
          return (
            <div className="facebook-container">
              <img src={profile.img} alt={profile.firstName} />
              <div>
                <p>
                  <span>Name: </span> {profile.firstName}
                </p>
                <p>
                  <span>Last Name: </span> {profile.lastName}
                </p>
                <p>
                  <span>Country: </span> {profile.country}
                </p>
                <p>
                  <span>Type: </span>{' '}
                  {profile.isStudent ? 'Student' : 'Teacher'}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FaceBook;
