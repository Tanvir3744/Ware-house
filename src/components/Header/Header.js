import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBBtn,
    MDBCollapse
} from 'mdb-react-ui-kit';
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import "./Header.css"
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
export default function Header() {
    //declaring authstate to get user
    const [user] = useAuthState(auth);
    //handle signout for user
    const logOut = () => {
        signOut(auth)
    }

    const [showNavSecond, setShowNavSecond] = useState(false);

    return (
        <MDBNavbar expand='lg' light bgColor='light'>
            <MDBContainer fluid className='p-3'>
                <MDBNavbarBrand >
                    <Link to='/'><img src={logo} alt="" className="img-fluid" width={200} /></Link>
                </MDBNavbarBrand>
                <MDBNavbarToggler
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowNavSecond(!showNavSecond)}
                >
                    <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                </MDBNavbarToggler>
                <MDBCollapse navbar className='container' show={showNavSecond}>
                    <MDBNavbarNav className='w-75'>
                        <Link className='nav-link' to='/'>Home</Link>
                        <Link className='nav-link' to='/blog'>Blog</Link>
                        <Link className='nav-link' to='/myItem'>My Item</Link>
                        <Link className='nav-link' to='/addItem'>Add Item</Link>
                        <Link className='nav-link' to='/manageItem'>Manage Item</Link>
                    </MDBNavbarNav>
                    {
                        user ? <MDBBtn onClick={logOut} color='primary' className='rounded-pill'>Log Out</MDBBtn> : <Link to='/login' ><MDBBtn className="rounded-pill" color="danger">Log In</MDBBtn></Link>
                    }
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    )
}