import React from 'react'
import {Link, withRouter} from "react-router-dom"
import {Card, Button} from "react-bootstrap"

import "../CSS/resource.css"

import Header from "../Pages/Components/Header"
import Footer from "../Pages/Components/Footer"

//import media files
import resource1 from "../media/resource1.jpg"
import resource2 from "../media/resource2.jpg"
import resource3 from "../media/resource3.jpg"
import resource4 from "../media/resource4.png"
import resource5 from "../media/resource-5.jpg"

function Resource() {
    return (
        <section className="Resource">
            <Header/>
            <h1 className="resource-main-heading">RESOURCES</h1>
            <div className="resource-container">
                <Card
                    style={{
                    width: '18rem',
                    height: 'min-content'
                }}
                    bg={"dark"}
                    text={"light"}
                    border={"light"}>
                    <Card.Img variant="top" src={resource5} className="resource-image"/>
                    <Card.Body>
                        <Card.Title>QUIZOPHILE</Card.Title>
                        <Link to="/resources/Quizophile">
                            <Button variant="danger">
                                See More</Button>
                        </Link>
                    </Card.Body>
                </Card>

                <Card
                    style={{
                    width: '18rem',
                    height: 'min-content'
                }}
                    bg={"dark"}
                    text={"light"}
                    border={"light"}>
                    <Card.Img variant="top" src={resource2} className="resource-image"/>
                    <Card.Body>
                        <Card.Title>ACADEMIC BANK</Card.Title>
                        <Link to="/resources/Academic-Bank">
                            <Button variant="danger">
                                See More</Button>
                        </Link>
                    </Card.Body>
                </Card>

                <Card
                    style={{
                    width: '18rem',
                    height: 'min-content'
                }}
                    bg={"dark"}
                    text={"light"}
                    border={"light"}>
                    <Card.Img variant="top" src={resource3} className="resource-image"/>
                    <Card.Body>
                        <Card.Title>NEWSPAPER</Card.Title>
                        <Link to="/resources/Newspaper">
                            <Button variant="danger">
                                See More</Button>
                        </Link>
                    </Card.Body>
                </Card>

                <Card
                    style={{
                    width: '18rem',
                    height: 'min-content'
                }}
                    bg={"dark"}
                    text={"light"}
                    border={"light"}>
                    <Card.Img variant="top" src={resource4} className="resource-image"/>
                    <Card.Body>
                        <Card.Title>SCIENCE REPORTERS</Card.Title>
                        <Link to="/resources/Science-Reporters">
                            <Button variant="danger">
                                See More</Button>
                        </Link>
                    </Card.Body>
                </Card>
                <Card
                    style={{
                    width: '18rem',
                    height: 'min-content'
                }}
                    bg={"dark"}
                    text={"light"}
                    border={"light"}>
                    <Card.Img variant="top" src={resource1} className="resource-image"/>
                    <Card.Body>
                        <Card.Title>VALUE ADDED MATERIALS</Card.Title>
                        <Link to="/resources/Value-Added-Materials">
                            <Button variant="danger">
                                See More</Button>
                        </Link>
                    </Card.Body>
                </Card>

            </div>
            <Footer/>
        </section>
    )
}

export default withRouter(Resource)
