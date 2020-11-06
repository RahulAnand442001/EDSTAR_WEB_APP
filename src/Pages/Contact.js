import React from 'react'
import {Jumbotron, Container} from "react-bootstrap"
import "../CSS/contact.css"

import Header from "../Pages/Components/Header"
import Footer from "../Pages/Components/Footer"

function Contact() {

    return (
        <div className="contact">

            <Header/>

            <div className="form-links">
                <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfhhXpRSv-1BLk3LVCzsBwpcJaqROncjU1GQqFJicnGouNQHQ/viewform?usp=sf_link"
                    className="contact-form-link">Contact Form</a>
                <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeW8g0xIPdFojXAx-h_lqyMI4rwmhsaeDKmKm9fmB1E9QghTg/viewform?usp=sf_link"
                    className="feedback-form-link">
                    Feedback Form</a>
            </div>

          

            <div className="form-container">
                <iframe
                    className="contact-form"
                    src="https://docs.google.com/forms/d/e/1FAIpQLSfhhXpRSv-1BLk3LVCzsBwpcJaqROncjU1GQqFJicnGouNQHQ/viewform?embedded=true"
                    width="650"
                    height="1000"
                    frameborder=""
                    marginheight=""
                    marginwidth="">Loading…</iframe>

                <iframe
                    className="feedback-form"
                    src="https://docs.google.com/forms/d/e/1FAIpQLSeW8g0xIPdFojXAx-h_lqyMI4rwmhsaeDKmKm9fmB1E9QghTg/viewform?embedded=true"
                    width="650"
                    height="1000"
                    frameborder="0"
                    marginheight="0"
                    marginwidth="0">Loading…</iframe>
            </div>

            <Footer/>

        </div>
    )
}

export default Contact
