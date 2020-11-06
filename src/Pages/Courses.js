import React, {useState} from 'react'
import {Link, withRouter} from "react-router-dom"
import {Card, Button} from "react-bootstrap"

import Header from "../Pages/Components/Header"
import Footer from "../Pages/Components/Footer"

import course1 from "../media/course-1.jpg"
import course2 from "../media/course-2.jpg"
import course3 from "../media/course-3.jpg"
import course4 from "../media/course-4.jpg"
import course5 from "../media/course-5.JPG"
import course6 from "../media/course-6.jpeg"

import "../CSS/course.css"

function Courses() {

    return (
        <section className="course-page">
            <Header/>
            <h1 className="course-heading">COURSES</h1>
            <div className="courses-container">

                <Card
                    style={{
                    width: '18rem',
                    height: 'min-content'
                }}
                    bg={"warning"}
                    text={"dark"}
                    border={"light"}>
                    <Card.Img variant="top" src={course5} className="course-image"/>
                    <Card.Body>
                        <Card.Title>CURRENT AFFAIRS</Card.Title>
                        <Link to="/courses/CurrentAffairs">
                            <Button variant="dark">
                                Course Details</Button>
                        </Link>
                    </Card.Body>
                </Card>

                <Card
                    style={{
                    width: '18rem',
                    height: 'min-content'
                }}
                    bg={"warning"}
                    text={"dark"}
                    border={"light"}>
                    <Card.Img variant="top" src={course1} className="course-image"/>
                    <Card.Body>
                        <Card.Title>LOGICAL REASONING</Card.Title>
                        <Link to="/courses/LogicalReasoning">
                            <Button variant="dark">
                                Course Details</Button>
                        </Link>
                    </Card.Body>
                </Card>

                <Card
                    style={{
                    width: '18rem',
                    height: 'min-content'
                }}
                    bg={"warning"}
                    text={"dark"}
                    border={"light"}>
                    <Card.Img variant="top" src={course2} className="course-image"/>
                    <Card.Body>
                        <Card.Title>SKILL DEVELOPMENT</Card.Title>
                        <Link to="/courses/SkillDevelopment">
                            <Button variant="dark">
                                Course Details</Button>
                        </Link>
                    </Card.Body>
                </Card>

                <Card
                    style={{
                    width: '18rem',
                    height: 'min-content'
                }}
                    bg={"warning"}
                    text={"dark"}
                    border={"light"}>
                    <Card.Img variant="top" src={course3} className="course-image"/>
                    <Card.Body>
                        <Card.Title>GENERAL SUBSCRIPTION</Card.Title>
                        <Link to="/courses/GeneralSubscription">
                            <Button variant="dark">
                                Course Details</Button>
                        </Link>

                    </Card.Body>
                </Card>

                <Card
                    style={{
                    width: '18rem',
                    height: 'min-content'
                }}
                    bg={"warning"}
                    text={"dark"}
                    border={"light"}>
                    <Card.Img variant="top" src={course4} className="course-image"/>
                    <Card.Body>
                        <Card.Title>GENERAL AWARENESS</Card.Title>
                        <Link to="/courses/GeneralAwareness">
                            <Button variant="dark">
                                Course Details</Button>
                        </Link>
                    </Card.Body>
                </Card>

                <Card
                    style={{
                    width: '18rem',
                    height: 'min-content'
                }}
                    bg={"warning"}
                    text={"dark"}
                    border={"light"}>
                    <Card.Img variant="top" src={course6} className="course-image"/>
                    <Card.Body>
                        <Card.Title>QUANTITATIVE APTITUDE</Card.Title>
                        <Link to="/courses/QuantitativeAptitude">
                            <Button variant="dark">
                                Course Details</Button>
                        </Link>
                    </Card.Body>
                </Card>

            </div>
            <Footer/>
        </section>
    )
}

export default withRouter(Courses)