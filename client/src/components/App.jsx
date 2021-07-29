import React, {useState} from 'react';
// import Overview from './Overview/Overview.jsx';
import RelatedProduct from './RelatedProducts/RelatedProducts.jsx';
// import QA from './QA/QA.jsx';
import Reviews from './Reviews/Reviews.jsx';
import styled from 'styled-components';

const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
border: solid 1px;
`

const App = (props) => {
  const [currentProductId, setCurrentProduct] = useState(25170);
  return (
    <Container>
      <RelatedProduct currentProductId={currentProductId} />
      <Reviews />
    </Container>
  )
}

export default App;

//25167