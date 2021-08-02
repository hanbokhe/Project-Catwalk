import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Detail_div = styled.div`
margin-left: 10px;
display: flex;
flex-direction: column;
margin-top: 12px;
`

const Category = styled.span`
font-size: x-small;
font-weight: bold;
`

const Name = styled.span`
font-size: medium;
`

const Price = styled.span`
font-size: small;
`

const Details = ({defaultStyle, product}) => {

  return (
    <React.Fragment>
      <Detail_div>
        <Category>{product.category}</Category>
        <Name>{product.name}</Name>
        {
          defaultStyle.sale_price ?
          <Price>${defaultStyle.sale_price}</Price>
          : <Price>${defaultStyle.original_price}</Price>
        }
      </Detail_div>
    </React.Fragment>
  )
}

export default Details;