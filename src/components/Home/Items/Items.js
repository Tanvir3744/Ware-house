import React, { useEffect, useState } from 'react';
import ItemCard from '../../ItemCard/ItemCard';

const Items = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const url = `http://localhost:5000/items`;
        fetch(url)
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='container'>
            <div className="heading mt-3">
                <h2 className='text-dark border-bottom pb-2'>Some Of Our Products</h2>
            </div>
            <div className="row mt-3 mb-3 ">
                {
                    products.map(product => <ItemCard key={products._id} product={product}></ItemCard>)
                }
            </div>
        </div>
    );
};

export default Items;