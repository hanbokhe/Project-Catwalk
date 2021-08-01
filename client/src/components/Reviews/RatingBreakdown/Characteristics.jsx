import React from 'react';
import FactorBar from './FactorBar.jsx';
import styled from 'styled-components';

const Chars_div = styled.div`
padding-top: 30px;
`;

var Characteristics = ({characteristics}) => {

  var charArray = Object.entries(characteristics);
  console.log('charArray', charArray);
  return (
    <Chars_div>
      {charArray.map((char, index) =>
        <FactorBar
          index={index}
          characteristic={char}
        />
      )}
    </Chars_div>
  );
};

export default Characteristics;