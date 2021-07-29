import React, {useState, useEffect} from 'react';
import Details from './Details.jsx';
import Card from './Card.jsx';
import styled from 'styled-components';

const Carousel_div = styled.div`
width: 1500px;
overflow: hidden;
display: flex;
flex-direction: row;
`
const Inner_div = styled.div`
white-space: nowrap;
transition: transform 0.3s;
display: flex;
flex-direction: row;
`

const Indicator_button = styled.button`
height: 10px
margin: 5px;
`

const Img = styled.img`
height: 280px;
weight: 250px;
`

// justify-content: space-evenly;

const Carousel = ({products}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= React.Children.count(products)) {
      newIndex = React.Children.count(products) - 1;
    }
    setActiveIndex(newIndex);
  }

  return (
    <Carousel_div>
      <Indicator_button
          onClick={() => {
            updateIndex(activeIndex - 1)
          }}>&lt;
      </Indicator_button>

      <Inner_div style={{transform: `translateX(-${activeIndex * 50}%)`}}>
        {products.map(product => (
            <div>
              <Card product={product} key={product.product_id} />
            </div>
          )
        )}
      </Inner_div>

      <Indicator_button
        onClick={() => {
          updateIndex(activeIndex + 1)

        }}
        disabled={products.length < 4 || idx === products.length-4}
        >&gt;
      </Indicator_button>

    </Carousel_div>
  )
}

export default Carousel;
