import React from 'react';
import './NumbersTable.css';

const NumbersTable = (props) => {
  const { limit } = props;

  const limitArr = Array.from({ length: `${limit + 1}` }, (v, i) => i);

  return (
    <div className="numbers-table">
      {limitArr.length > 0 &&
        limitArr.map((number) => {
          let colorClass = number % 2 === 0 ? 'red-square' : '';
          return <div className={`square ${colorClass}`}> {number} </div>;
        })}
    </div>
  );
};

export default NumbersTable;
