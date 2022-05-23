import React, { useState } from 'react';
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons'
import { useSignInWithGoogle, useSignInWithGithub, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const Register = () => {
    //declaring state to validate
    const [validation, setValidation] = useState('');

    //declaring states to reset forms
   

    //useNavigate to navigate users
    const navigate = useNavigate();


    //sign in method with google for user
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    //sign in method with github for user
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    //registration with email and password
    const [createUserWithEmailAndPassword, user2, loading2, error2] = useCreateUserWithEmailAndPassword(auth);


    //navigate to login  page from register componenet
    const navigateLogin = () => {
        navigate('/login')
    }

    //creating registration which is based on name, email and password
    const handleRegister = event => {
        event.preventDefault();

        //getting username, email and passwords value from input fields;
        let username = event.target.username.value;
        let email = event.target.email.value;
        let password1 = event.target.password1.value;
        let password2 = event.target.password2.value;

        //implement email and password based authentication 
        createUserWithEmailAndPassword(email, password1)

        //handle password validation
        if (password1.length < 6) {
            setValidation('your password should be 6 or more digit or character')
            return;
        }

        if (password1 !== password2) {
            setValidation('your password should be matched with each other')
            return;
        }

        //username validation
        if (username === '') {
            setValidation('username cannot be empty')
            return;
        }

        event.target.reset();
    }


    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 w-75 mx-auto">
                        <h2 className='mt-3 '>Register To Get Started</h2>
                        <div className='bg-light shadow rounded p-4 mb-3'>

                            {/* Registration forms */}
                            <form className='mt-4 mb-4' onSubmit={handleRegister}>
                                <MDBInput className='mt-3' label='Username' id='typeName' type='text' name='username' required />
                                <MDBInput className='mt-3' label='Enter Email' name='email' id='typeEmail' type='email' required />
                                <MDBInput className='mt-3' label='Password' id='typePassword' type='password' name='password1' required />
                                <small className="text-danger">{validation}</small>
                                <MDBInput className='mt-3' label='Confirm Password' id='typePassword' type='password' name='password2' required />
                                <small className="text-danger">{validation}</small>
                                <Link className='mt-3' onClick={navigateLogin} to='/login'>Already Have An Account? Login</Link><br />
                                <MDBBtn color='danger' className='rounded rounded-pill mt-3'>Register</MDBBtn>
                            </form>

                            {/* social login buttons */}
                            <div className="d-grid gap-2 mt-3 col-6 mx-auto">
                                <MDBBtn onClick={() => signInWithGoogle()} color='primary' className='d-flex align-items-center justify-content-center'>
                                    <FontAwesomeIcon className='me-2 fs-5' icon={faGoogle}></FontAwesomeIcon> Contineue With Google</MDBBtn>
                                <MDBBtn color='danger' onClick={() => signInWithGithub()}>
                                    <FontAwesomeIcon className='me-2 fs-6 ' icon={faGithub}></FontAwesomeIcon>
                                    contineue with github
                                </MDBBtn>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;