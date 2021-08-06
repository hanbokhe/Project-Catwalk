import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import Details from './Details.jsx';
import RelatedContext from './RelatedContext.jsx';
import styled from 'styled-components';


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
const Img = styled.img`
height: 315px;
width: 250px;
z-index: -1;
overflow: hidden;
object-fit: cover;
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
    <React.Fragment>
      <Card_div>
        {
          isOutfit?
            <X onClick={deleteClick} className={"fas fa-times"}/>
            : <Heart onClick={addClick} className={"far fa-heart"} />
        }
        <Img_div>
        {
          photo ?
            <Img src={photo} onClick={imgClick} alt={product.description}/>
            : null
        }
        </Img_div>
        <Details defaultStyle={defaultItem} product={product} average={average}/>
      </Card_div>
    </React.Fragment>
  )
}

export default Card;

//className={hover ? "fas fa-heart" : "far fa-heart"} onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}