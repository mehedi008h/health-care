import React from 'react';
import equipment from '../../../images/medical-tool.png';
import doctor from '../../../images/doctor.png';
import support from '../../../images/support.png';
import service from '../../../images/service.png';
import './Choose.css';

const Choose = () => {
    return (
        <div className="mt-5 mb-5">
            <div className="container text-center">
                <h6 className="text-success">WHY CHOOSE US</h6>
                <h3 className="fw-bold">Offer for you</h3>
                <div className="mt-4">
                    <div className="row g-3">
                        <div className="col-md-3">
                            <div className="card choose p-3 text-center">
                                <div className="text-center">
                                    <img className="w-25" src={equipment} alt="" />
                                </div>
                                <h3>Advanced equipment</h3>
                                <p>30 Years of experience in Cosmetic Surgery.</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card choose p-3 text-center">
                                <div className="text-center">
                                    <img className="w-25" src={doctor} alt="" />
                                </div>
                                <h3>Qualified doctors</h3>
                                <p>30 Years of experience in Cosmetic Surgery.</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card choose p-3 text-center">
                                <div className="text-center">
                                    <img className="w-25" src={service} alt="" />
                                </div>
                                <h3>Certified services</h3>
                                <p>30 Years of experience in Cosmetic Surgery.</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card choose p-3 text-center">
                                <div className="text-center">
                                    <img className="w-25" src={support} alt="" />
                                </div>
                                <h3>Emergency care</h3>
                                <p>30 Years of experience in Cosmetic Surgery.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Choose;