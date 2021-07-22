import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Overview = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('/products')
            .then(res => {
                console.log(res)
                setProducts(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    })

    return (
        <div> 
            <ul>
                {
                    products.map(product => (
                        <li key={product.id}>{product.title}</li>
                    ))
                }
            </ul>

        </div>
    )
}

export default Overview;