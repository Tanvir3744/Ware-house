import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCard from '../../ItemCard/ItemCard';

const Items = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const url = `https://peaceful-plains-32871.herokuapp.com/items`;
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
            <Link className='btn btn-primary ripple mt-3 mb-2' to='/manageItem'>Manage Invetory</Link>
        </div>
    );
};

export default Items;