import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, ListGroup, Button, FormControl, InputGroup } from 'react-bootstrap';
import './Blog.css';

const Blog = () => {
    return (
        <div className="blog">
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4 mt-5 mb-5">
                        <Card className="p-3 shadow">
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Search"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <Button variant="success" id="button-addon2">
                                    Search
                                </Button>
                            </InputGroup>
                        </Card>
                        <Card className="mt-4 shadow">
                            <Card.Header>Category</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Clinic</ListGroup.Item>
                                <ListGroup.Item>Diagnose</ListGroup.Item>
                                <ListGroup.Item>Doctor</ListGroup.Item>
                                <ListGroup.Item>Healthcare</ListGroup.Item>
                                <ListGroup.Item>Quote</ListGroup.Item>
                                <ListGroup.Item>Uncategorized</ListGroup.Item>
                                <ListGroup.Item>Video</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </div>
                    <div className="col-md-8 mt-5 mb-5">
                        <Card className="shadow">
                            <Card.Body>
                                <Card.Title className="text-dark">Every Next Level Of Your Life Will Demand</Card.Title>
                                <p>JUL 21, 2021</p>
                                <Card.Text>
                                    A traditional neck lift incision often begins in the hairline at the level of the sideburn, continues down and around the ear and ends in the posterior hair. Fat may be sculpted or redistributed from the jowls and neck. The tissue underlying the neck skin is repositioned, and commonly the platysma muscle is tightened.
                                </Card.Text>
                                <div className="d-flex align-items-center justify-content-between">
                                    <Button variant="primary btn-sm">Read Post</Button>
                                    <div className="d-flex align-items-center">
                                        <h5><FontAwesomeIcon className="text-danger" icon={faHeart}></FontAwesomeIcon> 11k</h5>
                                        <h5 className="ms-2"><FontAwesomeIcon className="text-primary" icon={faComment}></FontAwesomeIcon> 9k</h5>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="shadow mt-3">
                            <Card.Body>
                                <Card.Title className="text-dark">Protecting the Brain from Parkinson Disease</Card.Title>
                                <p>JUL 21, 2021</p>
                                <Card.Text>
                                    A traditional neck lift incision often begins in the hairline at the level of the sideburn, continues down and around the ear and ends in the posterior hair. Fat may be sculpted or redistributed from the jowls and neck. The tissue underlying the neck skin is repositioned, and commonly the platysma muscle is tightened.
                                </Card.Text>
                                <div className="d-flex align-items-center justify-content-between">
                                    <Button variant="primary btn-sm">Read Post</Button>
                                    <div className="d-flex align-items-center">
                                        <h5><FontAwesomeIcon className="text-danger" icon={faHeart}></FontAwesomeIcon> 21k</h5>
                                        <h5 className="ms-2"><FontAwesomeIcon className="text-primary" icon={faComment}></FontAwesomeIcon> 13k</h5>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="shadow mt-3">
                            <Card.Body>
                                <Card.Title className="text-dark">Improve Lung Cancer Survival Rate with Treatment</Card.Title>
                                <p>JUL 21, 2021</p>
                                <Card.Text>
                                    A traditional neck lift incision often begins in the hairline at the level of the sideburn, continues down and around the ear and ends in the posterior hair. Fat may be sculpted or redistributed from the jowls and neck. The tissue underlying the neck skin is repositioned, and commonly the platysma muscle is tightened.
                                </Card.Text>
                                <div className="d-flex align-items-center justify-content-between">
                                    <Button variant="primary btn-sm">Read Post</Button>
                                    <div className="d-flex align-items-center">
                                        <h5><FontAwesomeIcon className="text-danger" icon={faHeart}></FontAwesomeIcon> 21k</h5>
                                        <h5 className="ms-2"><FontAwesomeIcon className="text-primary" icon={faComment}></FontAwesomeIcon> 13k</h5>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;