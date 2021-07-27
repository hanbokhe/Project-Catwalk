import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Detail_div = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 2px;
`

const Details = ({defaultOne}) => {

  return (
    <React.Fragment>
      <Detail_div>
        <h4>{defaultOne.name}</h4>
        {
          defaultOne.sale_price ? <h5>{defaultOne.sale_price}</h5>
          : <h5>{defaultOne.original_price}</h5>
        }
      </Detail_div>
    </React.Fragment>
  )
}

export default Details;