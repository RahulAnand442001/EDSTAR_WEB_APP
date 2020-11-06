import React from 'react'
import {Link, withRouter} from "react-router-dom"
import {Carousel} from "react-bootstrap"

//page files
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import CollapsibleBar from "./Components/CollapsibleBar"

//css files
import "../CSS/base.css";
import "../CSS/home.css";

//import images and other media
import HomepagePhoto from "../media/homepagePic.png"
import S1 from "../media/survey_1.png"
import S2 from "../media/survey__2.png"
import S3 from "../media/survey__3.png"
import model1 from "../media/model1.jpg"
import model2 from "../media/model2.png"
import demo1 from "../media/demo1.jpg"
import demo2 from "../media/demo2.jpg"
import demo3 from "../media/demo3.jpg"
import demo4 from "../media/demo4.jpg"
import demo5 from "../media/demo5.jpg"
import demo6 from "../media/demo6.jpg"
import nep1 from "../media/nep1.jpg"
import nep2 from "../media/nep2.jpg"
import nep3 from "../media/nep3.jpg"
import nep4 from "../media/nep4.jpg"
import nep5 from "../media/nep5.jpg"
import nep6 from "../media/nep6.jpg"
import Snigdha from "../media/snigdha nayak.jpg"
import Subham from "../media/shubham padhi.jpg"
import Shreya from "../media/shreya banerjee.jpg"

function Home() {
    return (
        <div className="Home" id="home">

            <div className="quick-links">
                <a href="#home" className="toTop-button">^</a>
            </div>

            <div class="alert alert-dismissible show alert-warning " role="alert">
                <strong>COVID-19 Alert !
                    <i class="fas fa-exclamation-triangle"></i>
                </strong>

                Protect Yourself & Protect Others. For More Info

                <Link to="/covid-19" className="covid-alert-link">
                    Click Here.</Link>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>

            <Header/>
            <section className="banner">
                <div className="banner__content">
                    <h2 className="banner__heading-1">EVER TRIED EVER FAILED NO MATTER,
                    </h2>
                    <h1 className="banner__heading-2">TRY AGAIN FAIL AGAIN FEEL BETTER.
                    </h1>
                    <Link to="/courses">
                        <button className="course_button" href="#">Start a Course</button>
                    </Link>
                </div>

            </section>
            <section className="introduction">
                <div className="introduction__container">
                    <div className="introduction__content">
                        <h3 className="introduction__heading">Welcome To
                            <span className="brand">
                                EDSTAR
                            </span>
                        </h3>
                        <p className="introduction__text">
                            <h6 className="introduction__text-heading">TAKE CHARGE OF YOUR GROWTH BY LEADING SELF!</h6>

                            EDSTAR is a platform that runs based on education needs and student’s all-round
                            development. We make ensure to hear what student needs in building his career to
                            brush up his technical skills with the strong process of quality and affordable
                            learning too. Here you will develop a bias free and questioning outlook. Here
                            you will forge the ability to reason and evaluate arguments. Here you will
                            develop the ability to derive creative solutions to problems. And the most
                            important is decoding others – You will learn to identify person’s
                            sensibilities, strengths, and work styles.

                        </p>
                    </div>
                    <div className="introduction__photo">
                        <img src={HomepagePhoto} alt="homepagePhoto" className="homepage-photo"/>
                    </div>
                </div>
                <div className="survey">
                    <h2 className="survey__heading">Look What Survey Says !</h2>

                    <div className="survey__items">
                        <img src={S1} alt="survey1" className="survey__item  survey__item-1"/>
                        <img src={S2} alt="survey2" className="survey__item survey__item-2"/>
                        <img src={S3} alt="survey3" className="survey__item survey__item-3"/>
                    </div>

                    <CollapsibleBar
                        collapseHeading="View in Details"
                        collapseText="Recently, we were able to conduct an online survey on education system in which large number of students across length and breadth of the nation submitted their opinions regarding education system and especially structuring of eLearning platform. According to the survey conducted by the team, many brilliant ideas were received and EDSTAR will try its best to work upon those keeping in view of the market demand. Interestingly, few facts came to our notice-
                    eLearning platforms should add competitiveness, discipline, dedication, and patience in the learning methodology.
                    42% students rated online education quite good over private tuition while 31% rated it as average but more important thing is 27% rated online education below average than tuitions.
                    There is a large group of students who expect skill development and internships from eLearning platforms. Also, there should be sort of appreciation and certification in parallel to the course content so that the moral strength of the child remains at par.
                    Surprisingly, the most important factor came to the notice is the price at which education is being delivered today through internet. And on other side, there is a group of students in society who want education as affordable as mobile top-ups.
                    So, being a student friendly and sincere education platform, it’s our utmost responsibility to provide education to every child in our society by inculcating cognitive skills among students with most affordable value of education.
                    "/>

                </div>

            </section>
            <section className="overview">
                <h1 className="overview__heading">OVERVIEW</h1>

                <div className="overview__content overview__content1">
                    <img src={model1} alt="" className="model model1"/>
                    <div className="overview__text-1">
                        <h3 className="overview__text-subheading">THE HIGHER THE HURDLE, THE SWEETER THE VICTORY!
                        </h3>
                        <p className="overview__text-1-content">
                            Join our aspirational learner community to fast-track your career with a solid
                            base of fundamentals in books as well as beyond books. Our high impact online
                            courses will empower you to
                            <span className="overview-text-span">
                                THINK | SOLVE | COMMUNICATE | COLLABORATE | LEAD</span>

                        </p>
                    </div>

                </div>
                <div className="overview__content overview__content1">
                    <div className="overview__text-2">
                        <h3 className="overview__text-subheading">
                            YOU ONLY MUST KNOW ONE THING, YOU CAN LEARN ANYTHING
                        </h3>
                        <p className="overview__text-2-content">
                            . Over period of time you will learn how to tackle your opponents in this busy
                            competitive world to achieve your dream and simultaneously, along with the
                            bookish knowledge you will get a chance to explore yourself by enrolling in to
                            our flagship programs and courses.
                        </p>
                    </div>

                    <img src={model2} alt="" className="model model2"/>

                </div>

            </section>
            <section className="courses-demo">
                <div className="courses-demo-content">
                    <h1 className="courses-demo-heading">WHAT WE OFFER</h1>

                    <Carousel className="demo-course-slide">
                        <Carousel.Item>
                            <div className="demo-items">
                                <div className="demo demo-item-1">
                                    <img src={demo1} alt="" className="demo-pic demo-pic1"/>
                                    <div className=" demo-card demo-card-front">
                                        <h4>Current Affairs</h4>
                                    </div>
                                    <div className=" demo-card demo-card-back">
                                        <Link to="/courses/CurrentAffairs">
                                            Check Out
                                            <i class="fas fa-shopping-bag checkout-icon"></i>
                                        </Link>
                                    </div>

                                </div>
                                <div className="demo demo-item-2">
                                    <img src={demo2} alt="" className="demo-pic demo-pic2"/>

                                    <div className=" demo-card demo-card-front">
                                        <h4>Daily Quiz</h4>
                                    </div>
                                    <div className=" demo-card demo-card-back">
                                        <Link to="/courses">
                                            Check Out
                                            <i class="fas fa-shopping-bag checkout-icon"></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className="demo demo-item-3">
                                    <img src={demo3} alt="" className="demo-pic demo-pic3"/>

                                    <div className=" demo-card demo-card-front">
                                        <h4>Newspapers</h4>
                                    </div>
                                    <div className=" demo-card demo-card-back">
                                        <Link to="/courses">
                                            Check Out
                                            <i class="fas fa-shopping-bag checkout-icon"></i>
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className="demo-items">
                                <div className="demo demo-item-4">
                                    <img src={demo4} alt="" className="demo-pic demo-pic4"/>
                                    <div className=" demo-card demo-card-front">
                                        <h4>Value Addition</h4>
                                    </div>
                                    <div className=" demo-card demo-card-back">
                                        <Link to="/courses">
                                            Check Out
                                            <i class="fas fa-shopping-bag checkout-icon"></i>
                                        </Link>
                                    </div>

                                </div>
                                <div className="demo demo-item-5">
                                    <img src={demo5} alt="" className="demo-pic demo-pic5"/>

                                    <div className=" demo-card demo-card-front">
                                        <h4>Academic Bank</h4>
                                    </div>
                                    <div className=" demo-card demo-card-back">
                                        <Link to="/courses">
                                            Check Out
                                            <i class="fas fa-shopping-bag checkout-icon"></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className="demo demo-item-6">
                                    <img src={demo6} alt="" className="demo-pic demo-pic6"/>

                                    <div className=" demo-card demo-card-front">
                                        <h4>Science Magazine</h4>
                                    </div>
                                    <div className=" demo-card demo-card-back">
                                        <Link to="/courses">
                                            Check Out
                                            <i class="fas fa-shopping-bag checkout-icon"></i>
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </Carousel.Item>

                    </Carousel>

                    <Link to="/courses">
                        <button className="courses__link-button" href="#">View All Courses &rarr;</button>
                    </Link>

                </div>
            </section>
            <section className="nep">

                <h1 className="nep-heading">NATIONAL EDUCATION POLICY 2020</h1>

                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100 nep-photo" src={nep1} alt="First slide"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100 nep-photo" src={nep2} alt="second slide"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100 nep-photo" src={nep3} alt="Third slide"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100 nep-photo" src={nep4} alt="fourth slide"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100 nep-photo" src={nep5} alt="fifth slide"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100 nep-photo" src={nep6} alt="sixth slide"/>
                    </Carousel.Item>
                </Carousel>
            </section>
            <section className="testimonials">
                <h1 className="testimonial-heading">WHAT OUR STUDENTS TELL !</h1>

                <div className="testimonial-content">
                    <div className="testimonial testimonial-1">
                        <p className="testimonial-text">
                            This is the first time that someone has spoken of and thought of the entire
                            learning journey and not just a learning event. The quiz, the regular good habit
                            of newspaper reading along with top class current affairs package is really a
                            boost to competitive preparations.
                        </p>
                        <div className="testimonial-profile">
                            <h5 className="testimonial-name">Snigdha nayak</h5>
                            <img
                                src={Snigdha}
                                alt="snigdha"
                                className="testimonial-image testimonial-image-1"/>
                        </div>
                    </div>
                    <div className="testimonial testimonial-2">
                        <p className="testimonial-text">
                            I started at stage zero. With EDSTAR, I was able to start getting detailed
                            current affairs of great in quality and eventually build up enough knowledge and
                            skills to transition into a well-paying knowledge.
                        </p>
                        <div className="testimonial-profile">
                            <h5 className="testimonial-name">Shubham Padhi</h5>
                            <img
                                src={Subham}
                                alt="subham"
                                className="testimonial-image testimonial-image-2"/>
                        </div>
                    </div>
                    <div className="testimonial testimonial-3">
                        <p className="testimonial-text">
                            What EDSTAR is doing and the area you are focussing on is important for our
                            nation. Once we define the value proposition in the context of the challenges in
                            quality education infrastructure, we can really help to apply the strong vision
                            of the new education policy.
                        </p>
                        <div className="testimonial-profile">
                            <h5 className="testimonial-name">Shreya Banerjee</h5>
                            <img
                                src={Shreya}
                                alt="shreya"
                                className="testimonial-image testimonial-image-3"/>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>

        </div>

    )
}

export default withRouter(Home)