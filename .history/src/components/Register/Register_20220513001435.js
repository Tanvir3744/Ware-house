import React from 'react';
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
const Register = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 w-75 mx-auto">
                        <h2 className='mt-3 '>Register To Be With Us</h2>
                        <form className='mt-4 mb-4 bg-light shadow rounded p-4'>
                            <MDBInput className='mt-3' label='Username' id='typeName' type='text' name='username' required />
                            <MDBInput className='mt-3' label='Enter Email' name='email' id='typeEmail' type='email' required />
                            <MDBInput className='mt-3' label='Password' id='typePassword' type='password' name='password1' />
                            <MDBInput className='mt-3' label='Confirm Password' id='typePassword' type='password' name='password2' />
                            <Link className='mt-3' to='/login'>Don't Have An Account? Register</Link><br />
                            <MDBBtn className='rounded-pill mt-3' type='submit' color="danger ">Register</MDBBtn>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;