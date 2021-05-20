import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavbarComponent() {
  return (
    <Navbar bg="light">
      <Navbar.Brand as={Link} to="/">
        KSDrive
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link as={Link} to="/user">
          Profile
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
