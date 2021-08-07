import React, {useState, lazy, Suspense} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Loading from './Loading.jsx';
import Header from './Header/Header.jsx';
//import RelatedProduct from './RelatedProducts/RelatedProducts.jsx';
//import QA from './QA/QA.jsx';
//import Reviews from './Reviews/Reviews.jsx';

const RelatedProduct = lazy(() => import('./RelatedProducts/RelatedProducts.jsx'));
const QA = lazy(() => import('./QA/QA.jsx'));
const Reviews = lazy(() => import('./Reviews/Reviews.jsx'));

const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
font-family: Arial, Helvetica, sans-serif;
`
const Img = styled.img`
width: 1050px;
height: 742px;
object-fit: contain;
`

const App = (props) => {
  const [currentProductId, setCurrentProduct] = useState(25192);

  return (
    <Container>
      <Suspense fallback={<Loading/>}>
        <Header/>
      </Suspense>
      <Suspense fallback={<Loading/>}>
        <Img src={'./Overview.jpg'} alt={'Product Details'}/>
      </Suspense>
      <Suspense fallback={<Loading/>}>
        <RelatedProduct currentProductId={25171} />
      </Suspense>
      <Suspense fallback={<Loading/>}>
        <QA currentProductId={currentProductId} />
      </Suspense>
      <Suspense fallback={<Loading/>}>
        <Reviews currentProductId={currentProductId}/>
      </Suspense>
    </Container>
  );
};

export default App;

//25167
//25170
//25173
//25193
//348910