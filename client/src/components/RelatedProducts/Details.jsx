import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Detail_div = styled.div`
padding: 10px;
display: flex;
flex-direction: column;
justify-content: bottom;
align-items: start;
`

const Details = ({defaultOne}) => {

  return (
    <React.Fragment>
      <Detail_div>
        <span>Category</span>
        <span>{defaultOne.name}</span>
        {
          defaultOne.sale_price ? <span>${defaultOne.sale_price}</span>
          : <span>${defaultOne.original_price}</span>
        }
      </Detail_div>
    </React.Fragment>
  )
}

export default Details;