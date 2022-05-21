import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
const Detail = () => {
    const { id } = useParams()
    const { products, setProducts } = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/item/${ id }`
    }, [])
    return (
        <div>
            <h1>this is detail page</h1>

        </div>
    );
};

export default Detail;