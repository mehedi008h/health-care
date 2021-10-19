import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import doctor1 from '../../images/doctor1.jpg';
import doctor2 from '../../images/doctor2.jpg';
import doctor3 from '../../images/doctor3.jpg';
import doctor4 from '../../images/doctor4.jpg';
import './Doctor.css';
import { faFacebook, faGithub, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Doctor = () => {
    return (
        <div>
            <div className="container-fluid d-flex justify-content-center doctor-banner">
                <div className="doctor-info">
                    <h1>Our Team</h1>
                    <p>We provide best Doctors</p>
                </div>
            </div>
            <div className="container mb-5">
                <div className="row g-3">
                    <div className="col-md-6 mt-5">
                        <div className="text-center">
                            <img src={doctor3} className="doctor-img w-75 mt-4 shadow" alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 mt-5">
                        <div className="w-75 mx-auto">
                            <div className="mt-4">
                                <p className="text-success fw-bold">MBBS, MRCP(UK), CCST(DERM)</p>
                                <h3 className="fw-bold">Dr Emili Craythorne</h3>
                                <p>A traditional neck lift incision often begins in the hairline at the level of the sideburn, continues down and around the ear and ends in the posterior hair. Fat may be sculpted or redistributed from the jowls and neck. The tissue underlying the neck skin is repositioned, and commonly the platysma muscle is tightened.</p>
                            </div>
                            <div>
                                <ul>
                                    <li> Routine and medical care</li>
                                    <li>Excellence in Healthcare every</li>
                                    <li>Building a healthy environment</li>
                                    <li>cumsan lacus vel facilisis.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="icon me-2"><FontAwesomeIcon className="text-dark" icon={faFacebook}></FontAwesomeIcon></h4>
                                <h4 className="icon me-2"><FontAwesomeIcon className="text-dark" icon={faGoogle}></FontAwesomeIcon></h4>
                                <h4 className="icon me-2"><FontAwesomeIcon className="text-dark" icon={faTwitter}></FontAwesomeIcon></h4>
                                <h4 className="icon me-2"><FontAwesomeIcon className="text-dark" icon={faGithub}></FontAwesomeIcon></h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mt-5">
                        <div className="text-center">
                            <img src={doctor2} className="doctor-img w-75 mt-5 shadow" alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 mt-5">
                        <div className="w-75 mx-auto">
                            <div className="mt-4">
                                <p className="text-success fw-bold">MBBS, MRCP(UK), CCST(DERM)</p>
                                <h3 className="fw-bold">Dr Jessica Jones</h3>
                                <p>A traditional neck lift incision often begins in the hairline at the level of the sideburn, continues down and around the ear and ends in the posterior hair. Fat may be sculpted or redistributed from the jowls and neck. The tissue underlying the neck skin is repositioned, and commonly the platysma muscle is tightened.</p>
                            </div>
                            <div>
                                <ul>
                                    <li> Routine and medical care</li>
                                    <li>Excellence in Healthcare every</li>
                                    <li>Building a healthy environment</li>
                                    <li>cumsan lacus vel facilisis.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="icon me-2"><FontAwesomeIcon className="text-dark" icon={faFacebook}></FontAwesomeIcon></h4>
                                <h4 className="icon me-2"><FontAwesomeIcon className="text-dark" icon={faGoogle}></FontAwesomeIcon></h4>
                                <h4 className="icon me-2"><FontAwesomeIcon className="text-dark" icon={faTwitter}></FontAwesomeIcon></h4>
                                <h4 className="icon me-2"><FontAwesomeIcon className="text-dark" icon={faGithub}></FontAwesomeIcon></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctor;