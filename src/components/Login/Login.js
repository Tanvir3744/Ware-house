import React from 'react';
import { MDBInput, MDBBtn } from "mdb-react-ui-kit"
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);


    //github login for users
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    //navigating user after login
    const navigate = useNavigate();

    //showing error for google and github 
    let errorMessage;
    if (error || error1) {
        errorMessage = <div>
            <p className='text-danger'>{error?.message} {error1?.message}</p>
        </div>
    }

    if (user || user1) {
        navigate('/myItem')
    }

    //navigate to register
    const navigateRegister = () => {
        navigate('/register')
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 w-75 mx-auto">
                        <h2 className='mt-3 '>Log In To Be With Us</h2>
                        <div className='shadow rounded p-4 mb-3'>
                            <form className='mt-4 mb-4 bg-light  p-4'>
                                <MDBInput className='mt-3' label='Enter Email' name='email' id='typeEmail' type='email' required />
                                <MDBInput className='mt-3' label='Password' id='typePassword' type='password' name='password1' />
                                <Link className='mt-2' onClick={navigateRegister} to='/register'>Don't Have An Account? Register</Link><br />
                                <MDBBtn className='rounded-pill mt-3' type='submit' color="danger ">Log In</MDBBtn>
                            </form>
                            <div className="d-grid gap-2 mt-3 col-6 mx-auto">
                                <MDBBtn onClick={() => signInWithGoogle()} color='primary' className='d-flex align-items-center justify-content-center'>
                                    <FontAwesomeIcon className='me-2 fs-5' icon={faGoogle}></FontAwesomeIcon> Contineue With Google</MDBBtn>
                                {errorMessage}
                                <MDBBtn color='danger' onClick={() => signInWithGithub()}>
                                    <FontAwesomeIcon className='me-2 fs-6 ' icon={faGithub}></FontAwesomeIcon>
                                    contineue with github
                                </MDBBtn>
                                {errorMessage}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;