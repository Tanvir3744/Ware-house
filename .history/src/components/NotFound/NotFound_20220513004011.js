import { MDBBtn } from 'mdb-react-ui-kit';
import React from 'react';
import NotFoundImg from '../../images/notFound.svg'
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-6 d-flex align-items-center">
                        <div>
                            <h3 className='h2'>Ooops...!</h3>
                            <p>You're in a wrong track We think...</p>
                            <MDBBtn color='danger'><Link className='text-decoration-none text-white' to='/home'>Back To Home</Link></MDBBtn>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-6">
                        <div className="notFound-img p-3 m-4">
                            <img src={NotFoundImg} className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;