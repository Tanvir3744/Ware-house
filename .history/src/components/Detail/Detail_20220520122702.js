import { MDBBtn, MDBInput } from 'mdb-react-ui-kit';
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

    /* handling update the quantity of the product */
    const handleRestock = (event) => {
        event.preventDefault();
        let quantity = event.target.restock.value;


        /* adding new quantity */
        let newQuantity = parseInt(quantity) + parseInt(products.quantity);

        let updateQuantity = { newQuantity };

        /* fetching api to update the quantity */
        fetch(`http://localhost:5000/item/${ id }`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateQuantity),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                alert('succeded')
            })

    }
    return (
        <div className='container'>
            <div className="row d-flex align-items-center gx-3 mt-3 mb-3">
                <div className="col-lg-6 col-md-6">
                    <div className="img">
                        <img className='img-fluid' src={products.img} alt="" />
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="desc text-start">
                        <h2>{products.name}</h2>
                        <p>{products.description}</p>
                        <p><strong>Price :</strong> $ {products.price}</p>
                        <p><strong>Qunatity :</strong>{products.quantity}</p>
                        <p><strong>Supplier Name : </strong>{products.supplier}</p>
                        <MDBBtn className='ripple mt-2'>Delivered</MDBBtn>
                        <div>
                            <form className='mt-3 d-flex align-items-center gap-3 ' onSubmit={handleRestock} >
                                <MDBInput label='Restock Item' id='restock' name='restock' type='number' />
                                <MDBBtn type='submit' className='ripple'>Restock</MDBBtn>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;