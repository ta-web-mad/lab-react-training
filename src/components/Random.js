import './Random.css';

const Random = props =>{
        return parseInt(Math.random() * (props.max - props.min))

}

export default Random