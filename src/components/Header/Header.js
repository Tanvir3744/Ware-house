import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBIcon,
    MDBCollapse
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
export default function Header() {
    const [showNavSecond, setShowNavSecond] = useState(false);

    return (
        <MDBNavbar expand='lg' light bgColor='light'>
            <MDBContainer fluid className='p-3'>
                <MDBNavbarBrand href='#'>Navbar</MDBNavbarBrand>
                <MDBNavbarToggler
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowNavSecond(!showNavSecond)}
                >
                   <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                </MDBNavbarToggler>
                <MDBCollapse navbar show={showNavSecond}>
                    <MDBNavbarNav>
                        <Link className='nav-link' to='/'>Home</Link>
                        <Link className='nav-link' to='/'>All Item</Link>
                        <Link className='nav-link' to='/'>Blog</Link>
                    </MDBNavbarNav> 
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}