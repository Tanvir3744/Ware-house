import React from 'react';
import NotFoundImg from '../../images/notFound.svg'

const NotFound = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-6">
                        <div>
                            <h3 className='h2'>Ooops...!</h3>
                            <p>You're in a wrong track We think...</p>
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