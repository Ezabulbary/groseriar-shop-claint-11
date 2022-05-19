import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import Logo from '../../images/logo/logo.jpg';
import CustomLink from '../CustomLink/CustomLink';
import Loading from '../Loading/Loading';
import './Header.css';

const Header = () => {
    const [user, loading] = useAuthState(auth);
    console.log(user)
    if (loading) {
        return <Loading></Loading>
    }

    const logout = () => {
        signOut(auth);
    };
    return (
        <Navbar collapseOnSelect expand="lg" sticky="top" bg="light" variant="light">
            <Container>
                <Navbar.Brand as={CustomLink} to='/home'>
                    <img src={Logo} alt="logoImage" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={CustomLink} to='/home'>Home</Nav.Link>
                        <Nav.Link as={CustomLink} to='/blogs'>Blogs</Nav.Link>
                        <Nav.Link as={CustomLink} to='/about'>About US</Nav.Link>
                    </Nav>
                    <Nav>
                        {
                            user?.uid
                            &&
                            <>
                                <Nav.Link as={CustomLink} to='/manageItems'>Manage Items</Nav.Link>
                                <Nav.Link as={CustomLink} to='/addItems'>Add Items</Nav.Link>
                                <Nav.Link as={CustomLink} to='/myItems'>My Items</Nav.Link>
                            </>
                        }
                        {
                            user?.uid
                                ?
                                <button onClick={logout} className='bg-light btn logout-btn'>Logout</button>

                                :
                                <Nav.Link as={CustomLink} to='/login'>Login</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <Outlet />
        </Navbar>
    );
};

export default Header;