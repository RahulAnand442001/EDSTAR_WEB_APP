import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom"

//import all pages
import Home from './Pages/Home'
import Contact from "./Pages/Contact"
import Courses from './Pages/Courses'
import Resource from './Pages/Resource'
import QuizPage from './Pages/QuizPage'
import About from "./Pages/About"
import Covid from './Pages/Covid'
import CourseInterior from "./Pages/CourseInterior"
import ResourceInterior from "./Pages/ResourceInteior"
import Legals from './Pages/Legals'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/courses" exact component={Courses}/>
                <Route path="/quiz" exact component={QuizPage}/>
                <Route path="/resources" exact component={Resource}/>
                <Route path="/contact" exact component={Contact}/>
                <Route path="/about" exact component={About}/>
                <Route path="/covid-19" exact component={Covid}/>
                <Route path="/courses/:courseName" children={< CourseInterior />}/>
                <Route path="/resources/:resourceName" children={< ResourceInterior />}/>
                <Route path="/legals/:legalType" children={< Legals />}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
