import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/UseAuth';
import logo from '../../images/logo.png';
import './Login.css';

const Login = () => {

    const { signInUsingGoogle, handleEmailChange, handlePasswordChange, handleLogin } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div className="login-page">
            <div className="container d-flex">
                <Card className="mx-auto login p-3 shadow" style={{ width: '22rem' }}>
                    <div className="mt-3 text-center">
                        <img src={logo} className="w-25" alt="" />
                    </div>
                    <Form onSubmit={handleLogin} className="mt-4">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" />
                        </Form.Group>
                        <div className="text-center">
                            <Button className="w-100" variant="primary" type="submit">
                                Login
                            </Button>
                            <br />
                        </div>
                    </Form>
                    <hr />
                    <div className="mt-1">
                        <Button onClick={handleGoogleLogin} className="w-100 mt-2" variant="outline-danger"> <FontAwesomeIcon icon={faGoogle} className="me-3 mt-1"></FontAwesomeIcon>
                            Login with Google
                        </Button>

                    </div>
                    <hr />
                    <div className="text-center">
                        <p>Dont have account !! <Link to="/signin">Signin</Link></p>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Login;