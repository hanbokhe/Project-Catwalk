import React, {useState, useEffect, useContext} from 'react';
import RelatedContext from './RelatedContext.jsx';
import styled from 'styled-components';

const Container = styled.div`
position: absolute;
padding: 10px;
z-index: 2;
background-color: white;
box-shadow: 0px 0px 10px 1px grey;
animation: popup 0.25s;
`
const Title = styled.div`
width: 100%
font-size: 12px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: space-between;
`
const Table = styled.div`
padding: 10px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Row = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`
const Cell = styled.div`
height: 30px;
width: 150px;
font-size: 12px;
display: flex;
justify-content: center;
align-items: center;
outline: solid 1px lightgray;
`
const X = styled.button`
height: 20px;
width: 20px;
z-index: 100;
font-weight: bold;
border: none;
background-color: transparent;
color: lightgray;
&:hover {
  color: black;
}
`

const Modal = ({comparedInfo, currProduct, currReviews}) => {
  const [characteristics, setChar] = useState(Object.entries(currReviews.characteristics));
  const {setImgClicked} = useContext(RelatedContext);

  const XClick = (e) => {
    e.preventDefault();
    setImgClicked(prevState => (!prevState));
  }

  const getComparedValue = (atr) => {
    //console.log(comparedInfo.reviews.characteristics[atr].value);
    let attribute = comparedInfo.reviews.characteristics;
     if(attribute[atr]) {
       if(typeof Number(attribute[atr].value) === 'number') {
         let value = Math.round(Number(attribute[atr].value) * 100) / 100;
         //console.log('value', value);
         return value;
       } else if (attribute[atr].value === 'true') {
         return '✓';
       }
     }
  }

  const getCurrValue = (atr) => {
    if(typeof Number(atr.value) === 'number') {
      let value = Math.round(Number(atr.value) * 100) / 100
      return value;
    } else if (atr.value === 'true') {
      return '✓';
    }
  }

  return (
    <Container>
      <Title>
        Comparing
        <X onClick={XClick} className={"fas fa-times"}/>
      </Title>
      <Table>
        <Row>
          <Cell>{currProduct.name}</Cell>
          <Cell>Features</Cell>
          <Cell>{comparedInfo.product.name}</Cell>
        </Row>
        {
          characteristics.map( char => {
            return (
              <Row>
                <Cell>{getCurrValue(char[1])}</Cell>
                <Cell>{char[0]}</Cell>
                <Cell>{getComparedValue(char[0])}</Cell>
              </Row>
            )
          })
        }
      </Table>
    </Container>
  )
}

export default Modal;