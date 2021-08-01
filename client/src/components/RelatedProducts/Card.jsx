import React, {useState, useEffect, useContext} from 'react';
import Details from './Details.jsx';
import styled from 'styled-components';
import RelatedContext from './RelatedContext.jsx';


const Card_div = styled.div`
height: 400px;
width: 250px;
display: flex;
flex-direction: column;
border: solid 1px lightgray;
`
const Img_div = styled.div`
height: 330px;
width: 250px;
overflow: hidden;
`
const Img = styled.img`
height: 330px;
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
/*
.close,
.star {
  position: absolute;
  padding: 3px;
  right: 2%;
  z-index: 1;
  font-weight: bold;
}

.close:hover,
.star:hover {
  color: rgb(102, 162, 182);
  cursor: pointer;
  font-weight: bold;
}
*/

const Card = ({style, product, isOutfit}) => {
  const [defaultItem, setDefault] = useState(style.results[0]);
  const [photo, setPhoto] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const {addOutfit, deleteOutfit, setModalInfo, setImgClicked} = useContext(RelatedContext);

  const inputRef = React.createRef();

  useEffect(() => {
    getDefault()
  }, [style]);

  useEffect(() => {
    getPhoto()
  }, [defaultItem]);


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
        <Details defaultStyle={defaultItem} product={product}/>
      </Card_div>
    </React.Fragment>
  )
}

export default Card;

//className={hover ? "fas fa-heart" : "far fa-heart"} onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}