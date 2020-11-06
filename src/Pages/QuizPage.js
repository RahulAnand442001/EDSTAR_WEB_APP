import React from 'react'
import {Link, withRouter} from "react-router-dom"
import {Button} from "react-bootstrap"

import Header from "../Pages/Components/Header"
import Footer from "../Pages/Components/Footer"
import "../CSS/quiz.css"

import Quiz from "../media/QuizContest.jpg"

function QuizPage() {
    return (
        <div className="QuizPage">
            <Header/>
            <div className="QuizPage-container">
                <div className="quiz-details">
                    <img className="quiz-photo" src={Quiz} alt="quiz"/>
                    <div className="quiz-text">
                        <h2 className="quiz-heading">Quiz Mania 1.0</h2>
                        <p className="quiz-content">Participate in the quiz, enhance your knowledge and get exciting prize money.</p>
                    </div>
                </div>
                <div className="quiz-link-details">
                    <h3 className="quiz-subheading">To Know More About The Contest, Click Below
                    </h3>
                    <Link to="/">
                        <Button className="quiz-button">
                            Let's Go</Button>
                    </Link>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default QuizPage
