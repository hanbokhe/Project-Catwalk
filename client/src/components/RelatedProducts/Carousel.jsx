import React, {useState, useEffect} from 'react';
import Details from './Details.jsx';
import Card from './Card.jsx';
import styled from 'styled-components';

const Container = styled.div`
width: 2000px;
height: 400px;
display: flex;
flex-direction: row;
align-items: start;
`

const Carousel_div = styled.div`
width: 1010px;
overflow: hidden;
display: flex;
flex-direction: row;
`
const Inner_div = styled.div`
transition: transform 0.3s;
display: flex;
flex-direction: row;
justify-content: start;
`

const Arrow_button = styled.button`
height: 20px;
width: 20px;
align-items: center;
justify-content: center;
`

const Img = styled.img`
height: 300px;
weight: 250px;
object-fit: cover;
`

const Carousel_Item = styled.div`
display: inline-flex;
align-items: center;
justify-content: center;
`

// justify-content: space-evenly;

  export const CarouselItem = ({children, width}) => {
    return (
      <Carousel_Item style={{width: width}}>
        {children}
      </Carousel_Item>
    )
  }


const Carousel = ({products}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayed, setDisplayed] = useState(products.slice(0, 4));

  useEffect(() => {
    setDisplayed(products.slice(0, 4))
  }, [products])

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = products.length - 1;
    } else if (newIndex >= products.length) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  }

//   <div>
//   <Card product={product} key={product.product_id} />
// </div>

// {React.Children.map(products, product => (
//   React.cloneElement(product, {width: "25%"})
// ))}

  return (
    <Container>
      <Arrow_button
          onClick={() => {
            updateIndex(activeIndex - 1)
          }}
          disabled={products.length < 4}
          >&lt;
      </Arrow_button>
      <Carousel_div>
        <Inner_div style={{transform: `translateX(-${activeIndex * 25}%)`}}>
          {products.map( product => (
            <div>
              <Card product={product} key={product.product_id} />
            </div>
          ))}
        </Inner_div>
      </Carousel_div>
      <Arrow_button
        onClick={() => {
          updateIndex(activeIndex + 1)

        }}
        disabled={products.length < 4}
        >&gt;
      </Arrow_button>
    </Container>
  )
}

export default Carousel;