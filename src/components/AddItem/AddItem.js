import React from 'react';
import { MDBBtn, MDBInput, MDBTextArea } from 'mdb-react-ui-kit'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const AddItem = () => {
    /* getting the users email from auth state */
    const [user] = useAuthState(auth)

    /* handling add product */
    const handleAddProduct = (event) => {
        event.preventDefault();
        let name = event.target.productName.value;
        let image = event.target.image.value;
        let price = event.target.price.value;
        let supplier = event.target.supplier.value;
        let shortDescription = event.target.shortDesc.value;
        let quantity = event.target.quantity.value;
        console.log(name, image, price, supplier, shortDescription)

        let addProduct = {
            name: name, 
            img: image, 
            price: price,
            description: shortDescription,
            quantity: quantity,
            supplier: supplier,
            user: user.email,
        }

        const url = `https://peaceful-plains-32871.herokuapp.com/myItems`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(addProduct),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                toast('successfully added')
                event.target.reset();
        })
    }
    return (
        <div className='container mb-5' id='add-item-id'>
            <div className="row d-flex justify-content-center mt-5 ">
                <h2>Add A Product </h2>
                <div className="col-lg-8 shadow rounded p-3">
                    <form className='mt-3 mb-3 mh-100 ' onSubmit={handleAddProduct}>
                        <MDBInput className='mt-3' label='Product Name' id='productName' name='productName' type='text' required />
                        <MDBInput className='mt-3' label='Upload Image' id='image' name='image' type='text' required />
                        <MDBInput className='mt-3' label='Product Price' id='price' name='price' type='number' required />
                        <MDBInput className='mt-3' label='Product Quantity' id='quantity' name='quantity' type='number' required />
                        <MDBInput className='mt-3' label='Supplier Name' id='supplier' name='supplier' type='text' required />
                        <MDBTextArea className='mt-3' label='Short Description' id='shortDesc' name='shortDesc' rows={5} />
                        <MDBBtn type='submit' className='ripple mt-3' color='danger'>Add Product</MDBBtn>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddItem;