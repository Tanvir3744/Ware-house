import React from 'react';
import './ItemCard.css';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
const ItemCard = (props) => {
    const { name, img, price, supplier, quantity } = props.product;
    console.log(props.product)
    return (
        <div className="col-lg-6 col-md-6 mt-3">
            <MDBCard style={{ maxWidth: '540px' }}>
                <MDBRow className='g-0 d-flex align-items-center'>
                    <MDBCol md='4'>
                        <MDBCardImage src={img} alt='...' fluid />
                    </MDBCol>
                    <MDBCol md='8'>
                        <MDBCardBody>
                            <MDBCardTitle>{name}</MDBCardTitle>

                            <MDBCardText>
                                <small className='text-muted'>Price : ${price}</small>
                            </MDBCardText>
                            <MDBCardText>
                                <small className='text-muted'>Supplier Name : {supplier}</small>
                            </MDBCardText>
                            <MDBCardText>
                                <small className='text-muted'>Quantity : {quantity}</small>
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCol>
                    <div className='d-flex align-items-center justify-content-center p-2'>
                        <Link className='btn btn-primary ripple rounded-pill mx-2' to="/details">Show Details</Link>
                        <Link className='btn btn-danger ripple rounded-pill' to="/update">Update</Link>
                    </div>
                </MDBRow>
            </MDBCard>
        </div>

    );
};

export default ItemCard;