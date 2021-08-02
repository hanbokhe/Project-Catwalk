import React, {useState} from 'react';
import Header from './Header/Header.jsx';
// import Overview from './Overview/Overview.jsx';
import RelatedProduct from './RelatedProducts/RelatedProducts.jsx';
import QA from './QA/QA.jsx';
import Reviews from './Reviews/Reviews.jsx';
import styled from 'styled-components';

const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
font-family: Arial, Helvetica, sans-serif;
`
const Img = styled.img`
width: 58%;
object-fit: cover;
`


const App = (props) => {
  const [currentProductId, setCurrentProduct] = useState(25171);
  return (
    <Container>
      <Header/>
      <Img src={'./Overview.jpg'}/>
      <RelatedProduct currentProductId={currentProductId} />
      <QA currentProductId={currentProductId} />
      <Reviews />
    </Container>
  );
};

export default App;

//25167
//25170