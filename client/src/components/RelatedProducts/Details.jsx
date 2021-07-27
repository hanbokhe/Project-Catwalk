import React, {useState} from 'react';
import styled from 'styled-components';

const Detail_div = styled.div`
display: flex;
justify-content: center;
`

const Details = ({defaultOne}) => {
  const [price, setPrice] = useState({});
  const getPrice = () => {
    if(defaultOne.sale_price === null) {
      setPrice(defaultOne.original_price);
    } else {
      setPrice(defaultOne.original_price)
    }
  }

  return (
    <Detail_div>
      <h5>{defaultOne.name}</h5>
      <h6>{}</h6>
    </Detail_div>
  )
}

export default Details;