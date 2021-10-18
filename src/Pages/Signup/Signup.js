import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/UseAuth';
import logo from '../../images/logo.png';
import './Signup.css';

const Signup = () => {
    const { handleRegistration, error, handleNameChange, handleEmailChange, handlePasswordChange } = useAuth();
    return (
        <div className="signup-page">
            <div className="container d-flex">
                <Card className="mx-auto login p-3 shadow" style={{ width: '22rem' }}>
                    <div className="mt-3 text-center">
                        <img src={logo} className="w-25" alt="" />
                    </div>
                    <p>{error}</p>
                    <Form onSubmit={handleRegistration} className="mt-4">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control onBlur={handleNameChange} type="text" placeholder="Enter your name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter your email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Enter password" />
                        </Form.Group>
                        <div className="text-center">
                            <Button className="w-100" variant="primary" type="submit">
                                Signup
                            </Button>
                            <br />
                        </div>
                    </Form>
                    <hr />
                    <div className="mt-1">
                        <Button className="w-100 mt-2" variant="outline-danger"> <FontAwesomeIcon icon={faGoogle} className="me-3 mt-1"></FontAwesomeIcon>
                            CONTINUE WITH GOOGLE
                        </Button>
                    </div>
                    <hr />
                    <div className="text-center">
                        <p>Already have an account !! <Link to="/login">Login</Link></p>
                    </div>

                </Card>
            </div>
        </div>
    );
};

export default Signup;