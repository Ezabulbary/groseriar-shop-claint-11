import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo/logo.jpg';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" sticky="top" bg="light" variant="light">
            <Container>
                <Navbar.Brand as={Link} to='/home'>
                    <img src={Logo} alt="logoImage" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
                        <Nav.Link as={Link} to='/about'>About US</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to='/manageItems'>Manage Items</Nav.Link>
                        <Nav.Link as={Link} to='/addItems'>Add Items</Nav.Link>
                        <Nav.Link as={Link} to='/myItems'>My Items</Nav.Link>
                        <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;