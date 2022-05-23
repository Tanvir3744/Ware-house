import React, { useEffect, useState } from 'react';
import {MDBInput, MDBTextArea, MDBBtn} from 'mdb-react-ui-kit'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Update = () => {
    /* grabbing the id of individual product */
    const { id } = useParams()

    /* getting data from the server to update a single items information */
    const [product, setProduct] = useState({})
    useEffect(() => {
        const url = `https://peaceful-plains-32871.herokuapp.com/myItem/${id}`;
        fetch(url)
            .then(response => response.json())
            .then(data => setProduct(data));
    },[])
    const handleUpdateProduct = (event) => {
        event.preventDefault();

        let name = event.target.productName.value;
        let img = event.target.image.value;
        let price = event.target.price.value;
        let quantity = event.target.quantity.value;
        let supplier = event.target.supplier.value;
        let shortDesc = event.target.shortDesc.value;

        let updateProduct = {
            name: name, 
            img: img,
            price: price,
            quantity: quantity,
            supplier: supplier,
            shortDesc: shortDesc
        }

        const url = `https://peaceful-plains-32871.herokuapp.com/myItem/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(updateProduct) 
        })
            .then(response => response.json())
            .then(data => {
                toast('Product successfylly updated')
                console.log(data)
                event.target.reset();
        })
    }

    return (
        <div>
            <h1 className='mt-3 h2'>Update {product.name}</h1>
            <div className='container mb-5' id='add-item-id'>
            <div className="row d-flex justify-content-center mt-5 ">
                <div className="col-lg-8 shadow rounded p-3">
                    <form className='mt-3 mb-3 mh-100 ' onSubmit={handleUpdateProduct}>
                        <MDBInput className='mt-3' label='Product Name' id='productName' name='productName' type='text' required />
                        <MDBInput className='mt-3' label='Upload Image' id='image' name='image' type='text' required />
                        <MDBInput className='mt-3' label='Product Price' id='price' name='price' type='number' required />
                        <MDBInput className='mt-3' label='Product Quantity' id='quantity' name='quantity' type='number' required />
                        <MDBInput className='mt-3' label='Supplier Name' id='supplier' name='supplier' type='text' required />
                        <MDBTextArea className='mt-3' label='Short Description' id='shortDesc' name='shortDesc' rows={5} />
                        <MDBBtn type='submit' className='ripple mt-3' color='danger'>Update Product</MDBBtn>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Update;