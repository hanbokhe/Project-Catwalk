import React, {useState, useEffect, useContext, lazy, Suspense} from 'react';
import axios from 'axios';
import RelatedContext from './RelatedContext.jsx';
import styled from 'styled-components';

import Loading from '../Loading.jsx';
//import CardImg from './CardImg.jsx';
//import Details from './Details.jsx';

const CardImg = lazy(() => import('./CardImg.jsx'));
const Details = lazy(() => import('./Details.jsx'));

const Card_div = styled.div`
height: 400px;
width: 250px;
display: flex;
flex-direction: column;
outline: solid 1px lightgray;
`
const Img_div = styled.div`
height: 315px;
width: 250px;
overflow: hidden;
`

const Heart = styled.button`
position: absolute;
height: 20px;
width: 20px;
z-index: 100;
font-weight: bold;
border: none;
background-color: transparent;
color: lightgray;
&:hover {
  color: pink;
}
`

const X = styled.button`
position: absolute;
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

const Card = ({style, product, isOutfit}) => {
  const [defaultItem, setDefault] = useState(style.results[0]);
  const [photo, setPhoto] = useState(null);
  const [average, setAverage] = useState(0);
  const [reviews, setReviews] = useState({});
  const [loaded, setLoaded] = useState(false);
  const {addOutfit, deleteOutfit, setComparedInfo, setImgClicked} = useContext(RelatedContext);

  const getDefault = () => {
    for(var i = 0; i < style.results.length; i++) {
      if(style.results[i]['default?'] === true) {
        setDefault(style.results[i]);
      }
    }
  }

  const getPhoto = () => {
    if(defaultItem.photos[0].thumbnail_url) {
      setPhoto(defaultItem.photos[0].thumbnail_url);
    } else {
      for(let p = 0; p < style.results.length; p++) {
        if(style.results[p].photos.length !== 0) {
          setPhoto(style.results[p].photos[0].thumbnail_url);
        }
      }
    }
  }

  const getAvg = (id) => {
    axios.get(`/related/stars/${id}`)
      .then(({data}) => {
        var rating = data.ratings;
        var count = 0;
        var total = 0;

        setReviews(data);

        for (var key in rating) {
          count += parseInt(rating[key]);
          total += (parseInt(key) * rating[key]);
        }
        var avg = Math.round(total / count * 10) / 10;
        //console.log(data);
        if(avg) {
          setAverage(avg);
        }
      })
      .catch((err) => console.error(err));
  }


  //lifecycle methods

  useEffect(() => {
    getDefault()
    getAvg(style.product_id)
  }, [style]);

  useEffect(() => {
    getPhoto()
  }, [defaultItem]);

  //click handlers

  const addClick = (e) => {
    e.preventDefault();
    addOutfit({style, product})
  }

  const deleteClick = (e) => {
    e.preventDefault();
    deleteOutfit(product.id)
  }

  const imgClick = (e) => {
    e.preventDefault();
    setComparedInfo({style, product, reviews})
    setImgClicked(true);
  }

  return (
    <Suspense fallback={<Loading/>}>
      <React.Fragment>
        <Card_div>
          {
            isOutfit?
              <X onClick={deleteClick} >&#10006;</X>
              : <Heart onClick={addClick} >&#10084;</Heart>
          }
          <Img_div>
          {
            photo ?
              <CardImg photo={photo} imgClick={imgClick} description={product.description}/>
              : null
          }
          </Img_div>
          <Details defaultStyle={defaultItem} product={product} average={average}/>
        </Card_div>
      </React.Fragment>
    </Suspense>
  )
}

export default Card;

//className={hover ? "fas fa-heart" : "far fa-heart"} onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}

//className={"far fa-heart"}
//className={"fas fa-times"}