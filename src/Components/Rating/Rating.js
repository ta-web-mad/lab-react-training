import React from 'react';
import './Rating.css'

const Rating = (props) => {
  let starts = "";
  let children = Math.round(props.children)
  
if (children === 0) {
  starts = '☆☆☆☆☆'
}
if (children === 1) {
  starts = '★☆☆☆'
}
if (children === 2) {
  starts = '★★☆☆☆'
}
if (children === 3) {
  starts = '★★★☆☆'
}
if (children === 4) {
  starts = '★★★★☆'
}
if (children === 5) {
  starts = '★★★★★'
}
return <div className="Rating">{starts}</div>;
}

export default Rating