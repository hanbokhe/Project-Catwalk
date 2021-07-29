import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Detail_div = styled.div`
display: flex;
flex-direction: column;
align-items: center;
line-height: 0px;
padding: 0px;
margin-top: 0;
margin-bottom: 0;
`

const Details = ({defaultOne}) => {

  return (
    <React.Fragment>
      <Detail_div>
        <h5>{defaultOne.name}</h5>
        {
          defaultOne.sale_price ? <h6>{defaultOne.sale_price}</h6>
          : <h6>{defaultOne.original_price}</h6>
        }
      </Detail_div>
    </React.Fragment>
  )
}

export default Details;