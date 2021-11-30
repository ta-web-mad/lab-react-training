import React from 'react';
import './Style.css';

const Random = (prop) => {
  let random = prop.min + Math.floor(Math.random() * (prop.max-prop.min+1))
  return (
    <div className="box">
        Random value between {prop.min} and {prop.max} = {random}
      </div>
  );
};

export default Random;
