import React, {useState, useEffect} from 'react';
import Details from './Details.jsx';
import Card from './Card.jsx';
import styled from 'styled-components';

const Container = styled.div`
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`;

const Carousel_div = styled.div`
width: 1000px;
height: 400px;
overflow: hidden;
display: flex;
flex-direction: row;
outline: solid 1px lightgray;
`
const Inner_div = styled.div`
width: 1000px;
transition: transform 0.3s;
display: flex;
flex-direction: row;
justify-content: start;
`;

const Arrow_button = styled.button`
height: 20px;
width: 20px;
align-items: center;
justify-content: center;
border: none;
background-color: transparent;
`

const Img = styled.img`
height: 300px;
weight: 250px;
object-fit: cover;
`

const BlankCard = styled.div`
height: 400px;
width: 250px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
outline: solid 1px lightgray;
`

const Carousel = ({productInfo, isOutfit, addOutfit}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = productInfo.length - 1;
    } else if (newIndex >= productInfo.length) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  }

  return (
    <Container>
      <Arrow_button
          onClick={() => {
            updateIndex(activeIndex - 1)
          }}
          disabled={productInfo.length < 4 || activeIndex <= 0}
          >&lt;
      </Arrow_button>
      <Carousel_div>
        <Inner_div style={{transform: `translateX(-${activeIndex * 25}%)`}}>
          { productInfo.length === 0 && isOutfit ?
            <BlankCard>
              <div> + </div>
              <div>Add To Outfit</div>
            </BlankCard>
            : productInfo.map( ({style, product}) => (
                <Card product={product} style={style} isOutfit={isOutfit} />
            ))
          }
        </Inner_div>
      </Carousel_div>
      <Arrow_button
        onClick={() => {
          updateIndex(activeIndex + 1)

        }}
        disabled={productInfo.length < 4 || activeIndex >= productInfo.length-4}
        >&gt;
      </Arrow_button>
    </Container>
  )
}

export default Carousel;