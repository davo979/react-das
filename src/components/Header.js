import React from 'react';
import { Navbar, Nav, NavItem, NavbarBrand } from "reactstrap";
import { NavLink } from "react-router-dom";

import './Header.css';

function Header(props) {
    return(

        <Navbar color="light" light expand="md">
            <NavbarBrand>
                <div className="burger" onClick={props.onToggleHandler}>
                    <div className="burger-menu"></div>
                    <div className="burger-menu"></div>
                    <div className="burger-menu"></div>
                 </div>
            </NavbarBrand>
            <Nav className="ml-auto" navbar>
                <NavItem className="itemPadding">
                    <NavLink to="/" exact activeClassName="active">
                        Home
                    </NavLink>
                </NavItem>
                <NavItem className="itemPadding">
                    <NavLink to="/about" activeClassName="active">
                        About
                    </NavLink>
                </NavItem>
                <NavItem className="itemPadding">
                    <NavLink to="/contact" activeClassName="active">
                        Contact
                    </NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    )
}
export default Header;