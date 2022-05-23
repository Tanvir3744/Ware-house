import React from 'react';
import {MDBCard,  MDBRow, MDBCol, MDBCardImage, MDBCardBody, MDBCardText, MDBCardTitle, MDBBtn} from "mdb-react-ui-kit"
import {  useNavigate } from 'react-router-dom';
const MyItemCard = (props) => {
    const { _id, name, price, quantity, supplier, img } = props.myitem;
    
    //navigate throgh id
    const navigate = useNavigate()
    const navigateDetail = (id) => {
        navigate(`/details/${id}`)
    }
    return (
        <div style={{minHeight : '40vh'}} className='col-lg-6 col-md-6'>
            <MDBCard className='mt-3'  style={{ maxWidth: '540px' }}>
                <MDBRow className='g-0 d-flex align-items-center mt-2'>
                    <MDBCol md='4'>
                        <MDBCardImage src={img} alt='...' fluid />
                    </MDBCol>
                    <MDBCol md='8'>
                        <MDBCardBody>
                            <MDBCardTitle>{name}</MDBCardTitle>
                            <MDBCardText className='d-flex flex-column'>
                                <small className='text-muted'><strong>Quantity : </strong>{quantity}</small>
                                <small className='text-muted'><strong>Supplier : </strong>{supplier}</small>
                                <small className='text-muted'><strong>price : </strong>{price}</small>
                            </MDBCardText>
                           <MDBBtn className='ripple btn btn-primary' onClick={()=>navigateDetail(_id)}>show Detail</MDBBtn>
                        </MDBCardBody>
                    </MDBCol>
                </MDBRow>
            </MDBCard>
        </div>
    );
};

export default MyItemCard;