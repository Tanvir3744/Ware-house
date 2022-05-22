import React, { useEffect } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody, MDBBtn } from 'mdb-react-ui-kit';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const ManageItem = () => {
    const [manageProduct, setManageProduct] = useState([])
    useEffect(() => {
        const url = `https://peaceful-plains-32871.herokuapp.com/allItems`;
        fetch(url)
            .then(response => response.json())
            .then(data => setManageProduct(data))
    }, [])

    const handleDeleteItem = (id) => {
        let proceedDelete = window.confirm('Want to delete this item?')

        //handle deleting through api
        if (proceedDelete) {
            const url = `https://peaceful-plains-32871.herokuapp.com/allItems/${id}`;
            fetch(url, {
                method: "DELETE",
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const afterDeletion = manageProduct.filter(product => product._id !== id);
                        setManageProduct(afterDeletion)
                    }
                })
        }

    }
    return (
        <div className='container mt-5'>
            <h2 className='mt-2'>Manage Your Item From Here</h2>
            <div className="row">
                <div className="col-lg-10 w-100 mx-auto">
                    <MDBTable responsive bordered borderColor="primary" >
                        <MDBTableHead>
                            <tr>
                                <th scope='col'>Name</th>
                                <th scope='col'>Price</th>
                                <th scope='col'>Supplier</th>
                                <th scope='col'>Available Quantity</th>
                                <th scope='col'>Manage</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            {
                                manageProduct.map(product =>
                                    <tr>
                                        <th scope='row'>{product.name}</th>
                                        <td>{product.price}</td>
                                        <td>{product.supplier}</td>
                                        <td>{product.quantity}</td>
                                        <td>
                                            <div>
                                                <MDBBtn onClick={() => handleDeleteItem(product._id)} color='danger' className='ripple mx-2'>Delete</MDBBtn>
                                                <Link to='/update' className='ripple btn btn-success'>Update</Link>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            }
                        </MDBTableBody>
                    </MDBTable>
                </div>
            </div>
        </div>
    );
};

export default ManageItem;