import React from 'react';
import {Container, Nav, Navbar }from 'react-bootstrap';

const Footer = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className="bg-body-tertiary" fixed="bottom">
        <Container fluid>
          <Nav className="w-100 justify-content-between">
            <Nav.Link className="ms-3" disabled>
              Copyright © 2023 Viajemos
            </Nav.Link>
            <div className="d-flex">
              <Nav.Link href="https://www.facebook.com/"> <i className="bi bi-facebook"></i>  </Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Footer;