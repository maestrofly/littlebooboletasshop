import React from 'react';
import { Nav, NavLink,  NavMenu, NavBtn, NavBtnLink } from './NavbarElements';

const Navbar = () => {
    return (
        <>
        <Nav>
           
        
            <NavMenu>
                <NavLink to='/About' activeStyle>
                    About
                </NavLink>
                <NavLink to='/Catalog' activeStyle>
                    Catalog
                </NavLink>
                <NavLink to='/Contact' activeStyle>
                    Contact
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