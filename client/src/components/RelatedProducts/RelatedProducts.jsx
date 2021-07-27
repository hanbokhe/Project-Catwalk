import React, {useState, useEffect, createContext } from 'react';
import Carousel from './Carousel.jsx';
import axios from 'axios';

const RelatedProduct = ({currentProductId}) => {

  const [displayItems, setDisplay] = useState([]);
  const [relatedProductIds, setRelated] = useState([]);
  const [loaded, setLoaded] = useState(false);


  const getStyles = async () => {
    try {
      for(var i = 0; i < relatedProductIds.length; i++) {
        const {data} = await axios.get(`/styles/${relatedProductIds[i]}`)
        await setDisplay(prevState => (
          [...prevState, data]
        ));
      }
      await setLoaded(true);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    axios.get(`/related/${currentProductId}`)
    .then(({data}) => {
      //console.log('this is data from server', data);
      setRelated(data);
    })
    .catch((err) => {
      console.error(err);
    });
  }, []);

  useEffect(() => {
    getStyles()
  }, [relatedProductIds])

  return (
    <div>
      {
        loaded ?
        <Carousel products={displayItems} />
        : <div>Page Loading</div>
      }
    </div>
  )
}

export default RelatedProduct;