import React from 'react';

var Breakdown = ({ratings}) => {
  return (
    <div>
      <h1>breakdown</h1>
      <div>
        5 stars: {ratings['5']}
      </div>
      <div>
        4 stars: {ratings['4']}
      </div>
      <div>
        3 stars: {ratings['3']}
      </div>
      <div>
        2 stars: {ratings['2']}
      </div>
      <div>
        1 stars: {ratings['1']}
      </div>
    </div>

  );
};

export default Breakdown;