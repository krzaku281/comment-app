import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default function NavbarComponent() {
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">comment-app</NavbarBrand>
      <Nav className="mr-auto" navbar>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/comments">Comments</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}
