import React from 'react'
import {Link, withRouter} from "react-router-dom";
import {Navbar, NavDropdown, Nav} from "react-bootstrap";

//css files
import "../../CSS/header.css"
import edstarLogo from "../../media/edstar.png"

function Header() {
    return (
        <header className="header">

            <Navbar expand="lg" className="navbar navbar-dark">
                <Navbar.Brand >
                    <a href="/"><img className="logo" src={edstarLogo} alt="logo"/></a>
                </Navbar.Brand>

                <Navbar.Toggle className="navbar-toggler" aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto snav-item-wrap">
                            
                        <Nav.Link className="nav-item">
                            <Link to="/">
                                Home
                            </Link>
                        </Nav.Link>
                        <Nav.Link className="nav-item">
                            <Link to="/about">About Us</Link>

                        </Nav.Link>
                        <Nav.Link className="nav-item">
                            <Link to="/courses">
                                Courses
                            </Link>
                        </Nav.Link>

                        <Nav.Link className="nav-item">
                            <Link to="/resources">
                                Resources
                            </Link>
                        </Nav.Link>

                        <Nav.Link className="nav-item">
                            <Link to="/quiz">
                                Quiz Contest
                            </Link>
                        </Nav.Link>

                    </Nav>

                </Navbar.Collapse>
            </Navbar>

        </header>

    )
}

export default withRouter(Header);
