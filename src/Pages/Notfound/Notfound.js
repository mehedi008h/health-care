import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import error from '../../images/404.png';
import './Notfound.css';

const Notfound = () => {
    const history = useHistory();
    const gotoHome = () => {
        history.push('/home');
    }
    return (
        <div className="mt-5">
            <div className="text-center">
                <img className="not-found" src={error} alt="" />
                <h3>Sorry!! Not Found any page...</h3>
                <Button onClick={gotoHome} className="mt-3" variant="success">Go to Home</Button>
            </div>
        </div>
    );
};

export default Notfound;