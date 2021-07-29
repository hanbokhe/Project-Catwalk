import React, {useState, useEffect} from 'react';
import Details from './Details.jsx';
import styled from 'styled-components';

const Card_div = styled.div`
height: 400px;
width: 250px;
display: inline-flex;
flex-direction: column;
border: 1px solid gray;
`
const Img_div = styled.img`
height: 325px;
width: 250px;
overflow: hidden;
object-fit: cover;
`

const Card = ({product}) => {
  const [defaultItem, setDefault] = useState(product.results[0]);
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
      if(product.results[i]['default?'] === true) {
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
    <React.Fragment>
      <Card_div>
        <>
        {
          photo ?
          <Img_div src={photo}/>
          : null
        }
        </>
        <>
        {
          <Details defaultOne={defaultItem} />
        }
        </>
      </Card_div>
    </React.Fragment>
  )
}

export default Card;