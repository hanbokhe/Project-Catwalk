import React from 'react';
import styled from 'styled-components';
import Bar from './Bar.jsx';

var Breakdown = ({breakdowns}) => {
  if (breakdowns !== undefined) {
    return (
      <div>
        {breakdowns.map((breakdown, index) =>
          <Bar
            key = {index}
            breakdown = {breakdown}
          />
        )}
      </div>
    );
  } else {
    return (
      <div></div>
    );
  }
};


export default Breakdown;