import './Random.css';


const randomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}


const Random = ({ min, max }) => {

  return (
    <p>Random value between {min} and {max} => {randomInt(min, max)}</p>
  );
}


export default Random;