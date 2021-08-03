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
const Stars = styled.div`
  display: inline-block;
  font-size: 18px;
  font-family: Times; // make sure ★ appears correctly
  line-height: 1;
  color: gray;

  &::before {
    content: "★★★★★";
    letter-spacing: 3px;
    background: linear-gradient(90deg, #ffe789 ${props => props.rating}, #c4c4c4 ${props => props.rating});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

const Details = ({defaultStyle, product, average}) => {

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
        <Stars rating={`${average * 20}%`} />
      </Detail_div>
    </React.Fragment>
  )
}

export default Details;