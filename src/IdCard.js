import "./IdCard.css";


const toMeters = (number) => number / 100 + 'm';

const weekday = new Array();
weekday[0] = "Sun";
weekday[1] = "Mon";
weekday[2] = "Tue";
weekday[3] = "Wed";
weekday[4] = "Thu";
weekday[5] = "Fri";
weekday[6] = "Sat";

const dayOfWeek = (date) => weekday[date.getDay()];

const month = new Array();
month[0] = "Jan";
month[1] = "Feb";
month[2] = "Mar";
month[3] = "Apr";
month[4] = "May";
month[5] = "Jun";
month[6] = "Jul";
month[7] = "Aug";
month[8] = "Sep";
month[9] = "Oct";
month[10] = "Nov";
month[11] = "Dec";

const birthMonth = (date) => month[date.getMonth()];

const formatDate = (date) => dayOfWeek(date) + ' ' + birthMonth(date) + ' ' + date.getUTCDate() + ' ' + date.getUTCFullYear();


const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {

  return (
    <article>
      <img src={picture} alt={firstName + ' ' + lastName}/>
      <div>
        <p><b>First name: </b>{firstName}</p>
        <p><b>Last name: </b>{lastName}</p>
        <p><b>Gender: </b>{gender}</p>
        <p><b>Height: </b>{toMeters(height)}</p>
        <p><b>Birth: </b>{formatDate(birth)}</p>
      </div>
    </article>
  );
}


export default IdCard;