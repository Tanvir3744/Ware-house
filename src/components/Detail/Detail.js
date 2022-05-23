import { MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import './Detail.css'
const Detail = () => {
    const { id } = useParams()
    const [products, setProducts] = useState({});
    useEffect(() => {
        let url = `https://peaceful-plains-32871.herokuapp.com/item/${ id }`
        fetch(url)
            .then(response => response.json())
            .then(data => setProducts(data));
    }, [products])

    /* handling update the quantity of the product */
    const handleRestock = (event) => {
        event.preventDefault();
        let qty = parseInt(event.target.restock.value);
        let newQty = parseInt(products.quantity) + qty;
        let updateQuantity = { quantity: newQty }
        console.log(updateQuantity)

        if (event.target.restock.value === '') {
            toast('Please provide a positive value')
            return;
        }

        fetch(`https://peaceful-plains-32871.herokuapp.com/item/${ id }`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updateQuantity),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                toast("Updated Quantity Successfully")
                event.target.reset()
            })
    }

    /* handle deliver button to decrease the quantity of item */
    const handleDeliver = () => {

        let newQty = parseInt(products.quantity) -1;
        let updateQuantity = { quantity: newQty }

        fetch(`https://peaceful-plains-32871.herokuapp.com/item/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updateQuantity),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                toast("Reduced Quantity Successfully")
            })
    }

    return (
        <div className='container d-flex align-items-center' id='detail_id'>
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
                        <p><strong>Quantity :</strong>{products.quantity}</p>
                        <p><strong>Supplier Name : </strong>{products.supplier}</p>
                        <MDBBtn onClick={() => handleDeliver()} className='ripple mt-2'>Delivered</MDBBtn>
                        <div>
                            <form className='mt-3 d-flex align-items-center gap-3 ' onSubmit={handleRestock} >
                                <MDBInput label='Restock Item' id='restock' name='restock' type='number' />
                                <input type="submit" className='btn btn-primary ripple' value="restock" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;