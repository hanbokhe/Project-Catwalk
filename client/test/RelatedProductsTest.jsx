import React, {useState, useEffect } from 'react';
import axios from 'axios';

const RelatedProduct = () => {
  const [currentItem, setCurrentItem] = useState(1);
  const [displayItems, setDisplay] = useState([]);
  const [item, setItem] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [input, setInput] = useState({
    item: '',
    quantity: ''
  })

  const handleInput = event => {
    const { name, value } = event.target;

    setInput(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }

  useEffect(() => {
    axios.get(`/related/${currentItem}`)
      .then(({data}) => {
        //console.log('this is data from server', data);
        setDisplay(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [])

  return (
    <div>
      <form aria-label="form">

        <label htmlFor="item-input">Item</label>
        <input name='item' id="item-input" value={item} onChange={handleInput}/>

        <label htmlFor="quantity-input">Quantity</label>
        <input name='quantity' id="quantity-input" type="number" value={quantity} onChange={handleInput}/>

      </form>
    </div>
  )
}

export default RelatedProduct;