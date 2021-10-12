import React from 'react';
import { Nav, NavLink,  NavMenu, NavBtn, NavBtnLink } from './NavbarElements';

const Navbar = () => {
    return (
        <>
        <Nav>
           
        
            <NavMenu>
            <NavLink to='/' activeStyle>
                    Home
                </NavLink>
                <NavLink to='/Catalog' activeStyle>
                    Catalog
                </NavLink>
                <NavLink to='/Contact' activeStyle>
                    Contact
                </NavLink>
                <NavLink to='/About' activeStyle>
                    About
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to='/Signup'>Sign in</NavBtnLink>
            </NavBtn>

        </Nav>
        </>
    );
};

export default Navbar;