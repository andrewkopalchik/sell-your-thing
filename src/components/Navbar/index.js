import React from "react";
import {
    Bars, Nav, NavBtn,
    NavBtnLink, NavLink, NavMenu
} from './NavbarElements';

const Navbar = () => {
    return(
        <>
        <Nav>
            <Bars />

            <NavMenu>
                <NavLink to='/about' activeStyle>
                    About
                </NavLink>
                <NavLink to='/events' activeStyle>
                    Events
                </NavLink>
                <NavLink to='/annual' activeStyle>
                    Annual reports
                </NavLink>
                <NavLink to='/team' activeStyle>
                    Teams
                </NavLink>
                <NavLink to='/blogs' activeStyle>
                    Blogs
                </NavLink>
                <NavLink to='/sign-up' activeStyle>
                    Sign Up
                </NavLink>
                {/* Second nav */}
                {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
            </NavMenu>

            <NavBtn>
                <NavBtnLink to='/sign-up'>Sign In</NavBtnLink>
            </NavBtn>
        </Nav>
        </>
    );
};

export default Navbar;