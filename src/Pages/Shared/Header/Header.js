import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/UseAuth';
import logo from '../../../images/logo.png';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar fixed="top" bg="dark" variant="dark" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/"><img className="logo me-2" src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Brand as={Link} to="/">Skypro Medicare</Navbar.Brand>
                    <Navbar.Toggle className="text-dark" aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="text-dark" id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/home" className="me-3">Home</Nav.Link>
                            <Nav.Link as={Link} to="/service" className="me-3">Service</Nav.Link>
                            <Nav.Link as={Link} to="/doctor" className="me-3">Doctor</Nav.Link>
                            <Nav.Link as={Link} to="/blog" className="me-3">Blog</Nav.Link>
                            {/* <Nav.Link as={Link} className="user-name me-2 text-light">{user?.displayName}</Nav.Link>
                            <Nav.Link as={Link} to="/signup" className="signup me-2 text-light">Signup</Nav.Link>
                            <Nav.Link as={Link} to="/login" className="signup me-2 text-light">Login</Nav.Link>
                            <Button onClick={logOut} variant="success" className="text-white me-2 text-success">Logout</Button> */}

                            {user?.email ?
                                <Nav.Link as={Link} to="/signup" className="me-2 text-light">{user?.displayName}</Nav.Link> :
                                <Nav.Link as={Link} to="/signup" className="signup me-2 text-light">Signup</Nav.Link>
                            }
                            {user?.email ?
                                <Button onClick={logOut} variant="success" className="text-white me-2 text-success">Logout</Button> :
                                <Nav.Link as={Link} to="/login" className=" me-2 text-success">Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;