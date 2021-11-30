import React from 'react';

function Rating(props) {
  function stars() {
    let star = '';
    switch (Math.round(props.children)) {
      case 0:
        star = '☆☆☆☆☆';
        break;
      case 1:
        star = '★☆☆☆☆';
        break;
      case 2:
        star = '★★☆☆☆';
        break;
      case 3:
        star = '★★★☆☆';
        break;
      case 4:
        star = '★★★★☆';
        break;
      case 5:
        star = '★★★★★';
        break;
    }
    return star;
  }
  return <div>{stars()}</div>;
}

export default Rating;
