import React from 'react';

const Location = () => {
    return (
        <div className="conatiner w-75 mx-auto mt-5">
            <h2 className='mt-3 mb-4'>Our location!</h2>
            <div className="row d-flex align-items-ceenter mb-3">
                <div className="col-lg-6 col-6">
                    <div id="map-container-google-1" class="z-depth-1-half map-container">
                        <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
                            allowfullscreen></iframe>
                    </div>
                </div>
                <div className="col-lg-6 col-6">
                    <h2 className='h3'>Grab Location Of  Ware House</h2>
                    <p>Specially, this feature for our employee to give the correct location of our ware house</p>
                </div>
            </div>
        </div>
    );
};

export default Location;