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
border: solid 1px lightgray;
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
  const [loaded, setLoaded] = useState(false);
  const {addOutfit, deleteOutfit, setModalInfo, setImgClicked} = useContext(RelatedContext);

  const inputRef = React.createRef();

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

  const getAvg = (product_id) => {
    axios({
      method: 'GET',
      url: 'http://localhost:3000/reviews/meta',
      params: {
        product_id: product_id
      }
    })
      .then(({data}) => {
        var ratings = data.ratings;
        var count = 0;
        var total = 0;

        for (var key in ratings) {
          count += parseInt(ratings[key]);
          total += (parseInt(key) * ratings[key]);
        }
        var avg = Math.round(total / count * 10) / 10;
        console.log(total);
        if(avg) {
          setAverage(avg);
        }
      })
      .catch((err) => console.log(err));
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

  const Click = (e) => {
    e.preventDefault();
    setModalInfo({style, product})
    setImgClicked(prevState => (!prevState));
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
            <Img src={photo} onClick={Click}/>
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