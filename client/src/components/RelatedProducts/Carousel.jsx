import React, {useState, useEffect} from 'react';
import Details from './Details.jsx';
import Card from './Card.jsx';
import styled from 'styled-components';

const Carousel_div = styled.div`
width: 1000px;
display: flex;
flex-direction: row;
justify-content: space-evenly;
`

const Carousel = ({products}) => {

  return (
    <Carousel_div>
        {products.map(product => (
            <div>
              <Card product={product} key={product.product_id} />
            </div>
          )
        )}
    </Carousel_div>
  )
}

export default Carousel;

/*

*/