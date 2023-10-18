import React from 'react';
import {Nav, Navbar, Container, Form, Col, Row, Button } from 'react-bootstrap';
import { Link } from "react-router-dom"

const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
      <Container fluid>
        <Link to="/" className='nav-link'>
          <Navbar.Brand>
            <img
              src="/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
              
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/tuexperiencia" className='nav-link'>
              Creá tue experiencia
            </Link>
          </Nav>
          <Form >
            <Row>
            <Col xs="auto">
                <Form.Control
                type="text"
                placeholder="Buscar"
                className=" m-2m-2"
                />
            </Col>
            <Col xs="auto">
                <Button type="submit">Buscar</Button>
            </Col>
            </Row>
        </Form>
            <Button variant="secondary" className=" m-2" ><Link to="/ingresar" className="nav-link"> Ingresar </Link></Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;