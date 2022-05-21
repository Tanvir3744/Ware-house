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
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-lg-6 col-md-6">
                    <div className="img">
                        <img src={products.img} alt="" />
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="desc">
                        <h2>{products.name}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;