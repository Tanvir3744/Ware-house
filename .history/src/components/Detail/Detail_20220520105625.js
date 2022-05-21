import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
const Detail = () => {
    const { id } = useParams()
    const [products, setProducts] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/item/${ id }`
        fetch(url)
            .then(response => response.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div className='container'>
            <div className="row d-flex align-items-center gx-3">
                <div className="col-lg-6 col-md-6">
                    <div className="img">
                        <img className='img-fluid' src={products.img} alt="" />
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="desc text-left">
                        <h2>{products.name}</h2>
                        <p>{products.description}</p>
                        <p><strong>Price :</strong>{products.price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;