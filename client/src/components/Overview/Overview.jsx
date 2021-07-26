import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ProductItem from './ProductItem.jsx';

const Overview = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('/products')
            .then(res => {
                // console.log(res.data)
                setProducts(res.data);
            })
            .catch(err => {
                console.error(err)
            })
    }, [])

    return (
        <div> 
            {
                products.map(product => (
                    <div key={product.id}>{product.id} - {product.name} </div>
                ))
            }

        </div>
    )
}

export default Overview;