import React from 'react';

const News = () => {
    return (
        <div>
            <div className="container mb-5">
                <div className="d-flex align-items-center justify-content-between">
                    <div>
                        <h6 className="text-info">Our News</h6>
                        <h3 className="fw-bold">Skin care tips</h3>
                    </div>
                    <div>
                        <button className="btn btn-outline-info">View all content</button>
                    </div>
                </div>
                <div className="row g-3 mt-4">
                    <div className="col-md-4">
                        <div className="card shadow rounded p-3">
                            <h3>Here’s how you can get a natural glow this party season</h3>
                            <p>Medications are administered for your comfort during the surgical procedure. The choices include intravenous sedation and general anesthesia. Your doctor will recommend the best choice for you.</p>
                            <button className="btn btn-sm btn-info fw-bold">View</button>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow rounded p-3">
                            <h3>Get better skin with these top 10 tips for skin care</h3>
                            <p>Medications are administered for your comfort during the surgical procedure. The choices include intravenous sedation and general anesthesia. Your doctor will recommend the best choice for you.</p>
                            <button className="btn btn-sm btn-info fw-bold">View</button>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow rounded p-3">
                            <h3>8 Ways to Save Your Skin if You Exercise Outside</h3>
                            <p>Medications are administered for your comfort during the surgical procedure. The choices include intravenous sedation and general anesthesia. Your doctor will recommend the best choice for you.</p>
                            <button className="btn btn-sm btn-info fw-bold">View</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;