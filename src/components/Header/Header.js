import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBCollapse
} from 'mdb-react-ui-kit';
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import "./Header.css"
export default function Header() {
    const [showNavSecond, setShowNavSecond] = useState(false);

    return (
        <MDBNavbar expand='lg' light bgColor='light'>
            <MDBContainer fluid className='p-3'>
                <MDBNavbarBrand href='#'>
                    <img src={logo} alt="" className="img-fluid" width={200} />
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
                    </MDBNavbarNav>
                        <div className='d-felx flex-end'>
                            <Link className='btn btn-danger rounded-pill position-relative end-25 w-100 ' to="/login"> Log In</Link>
                        </div>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}