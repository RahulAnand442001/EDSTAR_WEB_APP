import React from 'react'
import {useParams, Link} from "react-router-dom"
import {Card} from "react-bootstrap"

import "../CSS/courseList.css"
import Header from "./Components/Header"
import Footer from "./Components/Footer"

//media files
import caTemplete from "../media/interior-1.jpg"

function CourseInterior() {

    let {courseName} = useParams();

    switch (courseName) {

        case "CurrentAffairs":
            return (<CurrentAffairs/>)
        default:
            return (<DefaultInterior/>)

    }

}

export default CourseInterior

export function DefaultInterior() {
    return (
        <div className="default-interior">
            <div className="interior">
                <i class="fab fa-soundcloud fa-9x"></i>
                <h1 className="default-heading">Coming Soon ....</h1>
                <p className="default-content">Thank you for showing Interest in our Course and Contents !</p>
                <Link to="/courses">
                    <i class="fas fa-book fa-3x  interior-course-button"/>
                </Link>
            </div>
        </div>
    )
}

function CurrentAffairs() {

    const razorPayPaymentLink = "https://rzp.io/l/Otk4mxt5";

    return (
        <div className="CurrentAffairs">
            <Header/>
            <section className="course course-ca">
                <section className="course-content-section course-content-ca">
                    <h1 className="course-heading">CURRENT AFFAIRS PACKAGE</h1>
                    <div className="course-details">
                        <h3 className="course-price">COURSE PRICE: &#8377;70/-</h3>
                        <h3 className="course-validity">COURSE CODE: CA1112</h3>
                        <h3 className="course-validity">COURSE VALIDITY: 30 Days</h3>

                        <h4 className="package-features-heading">What Will You Get In This Package ?</h4>
                        <ul className="package-features">
                            <li className="package-feature package-feature-1">Daily Headlines</li>
                            <li className="package-feature package-feature-2">Daily News Analysis</li>
                            <li className="package-feature package-feature-3">Recap of Whole Day Current Affairs</li>
                            <li className="package-feature package-feature-4">E-Books</li>
                            <li className="package-feature package-feature-5">Research Papers</li>
                            <li className="package-feature package-feature-6">Magazines</li>
                        </ul>
                        <h4 className="package-eligibility">Who Should Avail This Package ?</h4>
                        <p className="eligibility-content">
                            Anyone can avail of this, there is no limitation for knowing current affairs.
                            The package is specially designed per keeping competitive exams in view.
                        </p>
                        <h4 className="package-payment-question">Why should I pay for content when content is generally available for free?
                        </h4>
                        <p className="question-content">
                            <h5 className="question-subheading">Content, as you consume, is categorized into two broad containers:-
                            </h5>
                            <li className="payment-category-list">The first one is information - what
                                happened, when it happened, who was involved etc. This information is commonly
                                available to all and will always remain free to access on the Internet.
                            </li>
                            <li className="payment-category-list">There is a second much more detailed
                                category we commonly refer to as insights. Insights are beyond news or
                                information that is processed. E.g.:- Why it happened, what next, what changes,
                                how and when will the change happen, etc. Insights give you a heads up over the
                                rest. When you subscribe to EDSTAR, along with its other key benefits, you are
                                basically paying a nominal price to access these insights before others do. It
                                is a small price to pay to stay better and informed and ahead of the rest.
                            </li>
                        </p>
                    </div>

                    <h4 className="package-note-subheading">TAKE INTO ACCOUNT THE FOLLOWING POINTS FOR YOUR CONVINIENCE</h4>

                    <ul className="important-package-note">
                        <li className="package-note package-note-1">This course is being offered to you only on the monthly basis.
                        </li>
                        <li className="package-note package-note-1">On completion of the transaction you
                            will be redirected to the user bio data page where you will fill all neccessary
                            details which need to be exactly the same that you have entered during the
                            transaction time.
                        </li>
                        <li className="package-note package-note-2">After completing the necessary
                            payment procedure, kindly keep checking our website to get access to the course.
                        </li>
                        <li className="package-note package-note-3">It’s mandatory to fill correct user
                            details while purchasing the course and the same details you must fill after a
                            successful transaction. EDSTAR will not be responsible for any sort of wrong
                            input given by the user during the payment process.
                        </li>
                        <li className="package-note package-note-4">Incase of any wrong information and
                            failed transaction, feel free to contact us as soon as possible. Our customer
                            support team will get back to you as early as possible.
                        </li>
                    </ul>

                </section>
                <section className="course-card-section course-card-ca">
                    <Card
                        className="course-card"
                        style={{
                        width: '18rem'
                    }}
                        text={"dark"}>
                        <Card.Img variant="top" src={caTemplete} className="course-image"/>
                        <Card.Body>
                            <Card.Title>CURRENT AFFAIRS</Card.Title>
                            <div className="access-buttons">
                                <a
                                    href="https://drive.google.com/file/d/1hmHi6gfJrjyj00cktwtsyKIYwBrAMq5K/view?usp=sharing"
                                    className="sample">
                                    Free Sample
                                </a>

                                <a href={razorPayPaymentLink} className="razorpay-button">
                                    Buy now
                                </a>

                            </div>
                        </Card.Body>
                    </Card>

                    <div className="access-token-container" id="token">
                        {/* <div className="access-card access-card-previous">
                            <h5 className="course-name">CURRENT AFFAIRS</h5>
                            <h6 className="course-code">CA1011</h6>
                            <hr className="card-divider"/>
                            <a href="" className="course-access-link">ACCESS</a>
                        </div> */}
                        <div className="access-card access-card-current">
                            <h5 className="course-name">CURRENT AFFAIRS</h5>
                            <h6 className="course-code">CA1112</h6>
                            <hr className="card-divider"/>
                            <a
                                href="https://drive.google.com/drive/folders/1yL5givF3FLWFn8wdt0HnpzWa03K6VI5t?usp=sharing"
                                className="course-access-link">ACCESS</a>
                        </div>
                    </div>

                </section>
            </section>
            <Footer/>
        </div>
    )
}
