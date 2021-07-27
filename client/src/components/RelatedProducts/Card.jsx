import React, {useState, useEffect} from 'react';
import Details from './Details.jsx';
import styled from 'styled-components';

const Card_div = styled.div`
width: 200px;
display: flex;
flex-direction: column;
border: 1px solid gray;
justify-content: space-evenly;
`

const Card = ({product}) => {
  const [defaultItem, setDefault] = useState({});
  const [photo, setPhoto] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getDefault()
  }, []);

  useEffect(() => {
    getPhoto()
  }, [defaultItem]);


  const getDefault = () => {
    for(var i = 0; i < product.results.length; i++) {
      if(product.results[i]['default?']) {
        setDefault(product.results[i]);
      }
    }
  }

  const getPhoto = () => {
    if(defaultItem.photos) {
      if(defaultItem.photos.length !== 0) {
        setPhoto(defaultItem.photos[0].thumbnail_url)
      }
    }
  }


  return (
    <div>
      <Card_div>
        { photo ?
          <img src={photo}></img>
          : null
        }
        <Details defaultOne={defaultItem} />
      </Card_div>
    </div>
  )
}

export default Card;