import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import './Banner.css'
const Banner = () => {
    return (
        <div id='banner-img' className='container-fluid '>
            <div className="banner-btn d-flex justify-content-center col-6  mx-auto ">
                <div className='mt-5 pt-5 position-relative top-50'>
                    <h1 className='text-danger fw-bold'>Welcome To Our,</h1>
                    <h1 className='text-light'>Bike Store Let's See How Many Bike We Have!</h1>
                    <MDBBtn variant='primary' style={{fontWeight:'bold', fontSize:"1.2rem "}} className='mt-3 position-relative top-75 p-2'>Register Now</MDBBtn>
                </div>
            </div>
        </div>
    );
}

export default Banner;