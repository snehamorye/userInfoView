import React, { Fragment, useState } from "react";
import logo from "./logo.png";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const Header = () => {
  //const [active, setActive] = useState(false);
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <Fragment>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">
          <img className="logo" src={logo} alt="Logo" title="logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar className="bg-light-gray">
            <NavItem className="flex-center font-weight-bold">
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem className="flex-center font-weight-bold">
              <NavLink href="/">About Us</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Fragment>
  );
};

export default Header;
