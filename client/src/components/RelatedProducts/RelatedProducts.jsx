import React, { useState, useEffect, lazy, Suspense } from 'react';
import axios from 'axios';
import RelatedContext from './RelatedContext.jsx';
import styled from 'styled-components';

import Loading from '../Loading.jsx';
// import Carousel from './Carousel.jsx';
// import Modal from './Modal.jsx';

const Carousel = lazy(() => import('./Carousel.jsx'));
const Modal = lazy(() => import('./Modal.jsx'));

const Container = styled.div`
width: 60%;
display: flex;
flex-direction: column;
`

const ModalContainer = styled.div`
width: 100%;
height: 65%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const RelatedProduct = ({currentProductId}) => {

  // const [displayStyles, setStyles] = useState([]);
  const [displayProducts, setProducts] = useState([]);
  const [displayOutfit, setOutfit] = useState([]);
  const [relatedProductIds, setRelated] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [imgClicked, setImgClicked] = useState(false);
  const [comparedInfo, setComparedInfo] = useState({});
  const [currProduct, setCurrProduct] = useState({});
  const [currReviews, setCurrReviews] = useState({});

  const getProducts = async () => {
    try {
      var type = ['styles', 'products']
      var key = ['style', 'product']
      for(var i = 0; i < relatedProductIds.length; i++) {
        var product = {};
        for(var j = 0; j < type.length; j++) {
          const {data} = await axios.get(`/${type[j]}/${relatedProductIds[i]}`)
          product[key[j]] = data;
        }
        await setProducts(prevState => (
          [...prevState, product]
        ));
      }
      await setLoaded(true);
    } catch (err) {
      console.error(err);
    }
  }

  const getCurrProduct = async (product_id) => {
    let {data} = await axios.get(`/products/${product_id}`);
    setCurrProduct(data);
  }

  const getCurrReview = async (product_id) => {
    try {
      let options = {
        method: 'GET',
        url: '/reviews/meta',
        params: {
          product_id: product_id
        }
      };
      let {data} = await axios(options);
      //console.log('review', data)
      setCurrReviews(data);
    } catch (err) {
      console.log(err);
    }
  }

  //lifecycle methods

  useEffect(() => {
    axios.get(`/related/${currentProductId}`)
    .then(({data}) => {
      var noDups = [...new Set(data)];
      //console.log('this is data from server', data);
      setRelated(noDups);
      getCurrReview(currentProductId);
      getCurrProduct(currentProductId);
    })
    .catch((err) => {
      console.error(err);
    });
  }, []);

  useEffect(() => {
    getProducts()
  }, [relatedProductIds])


  //click handlers

  const addOutfit = (addedItem) => {
    var doesContain = false;
    for (var a = 0 ;  a < displayOutfit.length; a++) {
      if(displayOutfit[a]['product']['id'] === addedItem.product.id) {
        doesContain = true;
      }
    }
    if(!doesContain) {
      setOutfit(prevState => (
        [...prevState, addedItem]
      ));
    }
  }

  const deleteOutfit = (deletedItem) => {
    for (var d = 0 ;  d < displayOutfit.length; d++) {
      if(displayOutfit.length === 1) {
        setOutfit([]);
      } else if(displayOutfit[d]['product']['id'] === deletedItem) {
        var front = displayOutfit.slice(0, d);
        var back = displayOutfit.slice(d + 1, displayOutfit.length)
        var newOutfit = front.concat(back);
        setOutfit(newOutfit);
        break;
      }
    }
  }

  return (
    <Suspense fallback={<Loading/>}>
      <Container>
        <RelatedContext.Provider value={{addOutfit, deleteOutfit, setImgClicked, setComparedInfo}}>
          {
            imgClicked ?
            <ModalContainer>
              <Modal comparedInfo={comparedInfo} currProduct={currProduct} currReviews={currReviews}/>
            </ModalContainer>
            : null
          }
          {
            loaded ?
            <div>
              <h4>Related Products</h4>
              <Carousel productInfo={displayProducts} isOutfit={false} />
              <h4>Outfit</h4>
              <Carousel productInfo={displayOutfit} isOutfit={true}/>
            </div>
            : <div>Page Loading</div>
          }
        </RelatedContext.Provider>
      </Container>
    </Suspense>
  )
}

export default RelatedProduct;