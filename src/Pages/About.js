import React from 'react'
import {Link, withRouter} from "react-router-dom"
import CollapsibleBar from './Components/CollapsibleBar'

import "../CSS/about.css"

import about2 from "../media/about2.jpg"
import about3 from "../media/about3.jpg"
import about4 from "../media/about4.jpg"
import Rahul from "../media/rahul.jpeg"
import Subhrangsu from "../media/subhrangshu.jpg"
import Debasish from "../media/debasis.jpg"
import Vipul from "../media/vipul.JPG"

function About() {
    const date = new Date();
    const currentYear = " " + date.getFullYear() + " ";

    const DeviceWidth = window.innerWidth;
    //TODO:change content size according to width

    return (
        <div className="About">
            <div className="about-panel">
                <ul className="side-panel-items">
                    <li className="side-panel-item">
                        <a href="#abstract" className="side-links">
                            <i class="fas fa-magnet link-icons"/>
                            ABSTRACT
                        </a>
                    </li>
                    <li className="side-panel-item">
                        <a href="#mission" className="side-links">
                            <i class="fas fa-crosshairs link-icons"/>MISSION</a>
                    </li>
                    <li className="side-panel-item">
                        <a href="#vision" className="side-links">
                            <i class="fas fa-glasses link-icons"/>
                            VISION
                        </a>
                    </li>
                    <li className="side-panel-item">
                        <a href="#team" className="side-links">
                            <i class="fas fa-users link-icons"/>
                            TEAM
                        </a>
                    </li>
                </ul>
                <Link to="/">
                    <i class="fas fa-home fa-3x about-home"/></Link>
                <div class="legal">
                    &copy; {currentYear}
                    by EDSTAR.
                </div>
            </div>
            <div className="about-container">
                <h1 className="about-heading" id="abstract">
                    <span className="brand">EDSTAR</span>
                </h1>
                <div className="intro">
                    <div className="intro-1">
                        <p className="intro-para">EDSTAR is an online platform developed with the idea
                            of blended learning that includes ultimate flexibility, quick knowledge delivery
                            and different personalization options. The biggest challenge of teaching in
                            today’s context is teachers must face when teaching a diverse group of students
                            with different knowledge levels, grasping power, and learning preferences. To
                            combat this challenge a team of dedicated young minds has been designed to
                            provide supplementary online education support at the most affordable market
                            price for connecting especially, the excluded section of society with mainstream
                            education process. Our goal is achieving excellence and reflect the innovation
                            in the process of learning. Teaching holds the power to open minds that create
                            brainstorming ideas relieving and reconnecting. We aim to sustain every kid’s
                            enthusiasm, interests, idealism, and instructive achievement.</p>

                        <img src={about2} className="about-image intro-1-image" alt=""/>
                    </div>
                    <div className="intro-2">
                        <p className="intro-para">Our digital resources, tools and learning materials
                            are developed by instructive specialists and designed under expert guidance to
                            consolidate decrepit academic practices. Because we believe in inclusive
                            education- all students, regardless of any challenges they may have are to
                            receive high quality yet accessible and feasible instruction, interventions and
                            supports that enable them to meet success in the core curriculum.</p>
                        <p className="intro-para">Here at EDSTAR, we provide education to everyone for
                            everyone by laying a efficient-potential foundation for students in academic
                            practices, inculcating social values of equality, plurality, inclusivity in the
                            broadest terms and developing solid base of moral concepts attached with real
                            life learning methodology. Join us, take a step towards better education,
                            gleaming future, and equality.</p>
                    </div>

                </div>
                <div className="intro-subpart">
                    <h2 className="about-subheading">What Makes Us Different ?</h2>
                    <p className="intro-para">We at EDSTAR put hard efforts to provide courses that
                        deals with critical thinking, logical reasoning, unleashing creativity and
                        decoding others and this is why our team works 24/7 to structure a model of
                        learning that is based upon following listed process of learning :</p>
                </div>
                <div className="collapse-items mission-collapse">

                    <CollapsibleBar
                        collapseHeading="Crossover Learning"
                        collapseText="Learning in informal settings, such as using technology and after-school hours,
                     can link educational content with issues that matter to learners in their lives.
                     These connections work in both directions. Learning in schools and colleges can be
                     enriched by experiences from everyday life; informal learning can be deepened by adding
                     questions and knowledge from the classroom. These connected experiences spark further interest
                      and motivation to learn. These crossover learning experiences exploit the strengths of both
                       environments and provide learners with authentic and engaging opportunities for learning.
                       Since learning occurs over a lifetime, drawing on experiences across multiple settings, the
                       wider opportunity is to support learners in recording, linking, recalling, and sharing their diverse learning events."/>

                    <CollapsibleBar
                        collapseHeading="Learning Through Argumentation"
                        collapseText="Argumentation helps students attend to contrasting ideas, which can deepen their learning. It makes
                         technical reasoning public, for all to learn. It also allows students to refine ideas with others, so they learn how
                         scientists think and work together to establish or refute claims."/>

                    <CollapsibleBar
                        collapseHeading="Incidental Learning"
                        collapseText="Incidental learning is unplanned or unintentional learning. It may occur while carrying out an activity
                        that is seemingly unrelated to what is learned. It triggers self-reflection and this could be used to encourage learners
                         to reconceive what could otherwise be isolated learning fragments as part of more coherent and longer-term learning journeys."/>

                    <CollapsibleBar
                        collapseHeading="Context-Based Learning"
                        collapseText="Context enables us to learn from experience. By interpreting new information in the context of where and when it
                        occurs and relating it to what we already know, we come to understand its relevance and meaning."/>

                    <CollapsibleBar
                        collapseHeading="Computational Thinking"
                        collapseText="Computational thinking is a powerful approach to thinking and problem solving.
                         It involves breaking large problems down into smaller ones (decomposition), recognizing how these
                         relate to problems that have been solved in the past (pattern recognition), setting aside unimportant
                         details (abstraction), identifying and developing the steps that will be necessary to reach a solution
                         (algorithms) and refining these steps (debugging). The aim is to teach children to structure problems so
                         that they can be solved and be master in an art of thinking that will enable them to tackle complex challenges
                         in all aspects of their lives."/>

                    <CollapsibleBar
                        collapseHeading="Embodied Learning"
                        collapseText="Embodied learning involves self-awareness of the students interacting with a real or
                         simulated world to support the learning process. When learning a new sport, physical movement is an
                         obvious part of the learning process. In embodied learning, the aim is that mind and body work together so
                          that physical feedback and actions reinforce the learning process."/>

                    <CollapsibleBar
                        collapseHeading="Adaptive Teaching"
                        collapseText="Adaptive teaching uses data about a learner’s previous and current learning to create
                         a personalized path through educational content. Continuous monitoring on one’s progress keeps both the
                          learner as well as teacher motivated in the learning process."/>

                    <CollapsibleBar
                        collapseHeading="Stealth Assessment"
                        collapseText="Stealth assessment can test hard-to-measure aspects of learning such as perseverance, creativity,
                         and strategic thinking. It can also collect information about students’ learning states and processes without asking
                         them to stop and take an examination. In principle, stealth assessment techniques could provide teachers with continual
                         data on how each learner is progressing."/>

                    <CollapsibleBar
                        collapseHeading="Scientific approach"
                        collapseText="The young minds engaged in learning process can only be developed if from the very first
                         day students gain knowledge in multiple domains of a subject with scientific ideology to apply the same
                         in their surroundings."/>

                </div>
                <div id="mission">
                    <h1 className="mission-heading">MISSION</h1>
                    <div className="mission-1">
                        <img src={about3} className="about-image intro-2-image" alt="mission"/>
                        <p className="mission-para">We believe that continuous hard work, sincere
                            efforts for self-assessment and affordable education process that connect social
                            aspects of livelihood with prescribed curriculum by the education board could
                            only mould a child in becoming a full potential candidate to provide services to
                            the nation. Keeping in view of this, not only we aim to provide the best
                            learning practices to all but also, we provide the platform for young talented
                            minds who want to impart their knowledge at best possible affordable-accessible
                            price in multi-disciplinary level so that the mindset of today’s generation
                            could develop in a broader way. All in all, we want to build an equal platform
                            for every student to compete with broadly acquired knowledge that carries equal
                            amount of importance which is being emphasised in the New Education Policy Bill,
                            2020. Ultimately our purpose of providing education is to make a student
                            academically stronger and socially upright to think ideally, analyse
                            intellectually and act responsibly.</p>
                    </div>

                    <div className="mission-2">
                        <p className="mission-para">The biggest motive behind EDSTAR is that finance
                            should not be the constraint to acquire knowledge and if the knowledge provided
                            to the students, could not be the part of elite business then for sure India is
                            the next biggest market economy in the world and then definitely, the vision of
                            ‘missile man of India’ to make India superpower could be fulfilled.</p>
                    </div>

                </div>
                <div id="vision">
                    <h1 className="vision-heading">VISION</h1>
                    <div className="vision-1">
                        <img src={about4} className="about-image intro-3-image" alt="vision"/>

                        <p className="vision-para">Education now should not be about (although it still
                            is unfortunately) testing on mundane formulas and in strict time constraints
                            (this doesn't only go on in primary school but gets worse the first few years of
                            higher education). Testing is not representative of what goes on in the business
                            world anymore, no one will tell you to dead-memorize a bunch of information
                            (most of which is widely available as mass information anyway) and sit down to
                            take your test in a cubicle on time constraint. What IS required however to be
                            successful in today's new working environment and leadership positions is the
                            ability to collaborate and communicate. Keeping this in mind, EDSTAR ensures to
                            provide the best possible, affordable, accessible quality education platform for
                            everyone in current digital age, which is deeply shaping the way students learn
                            and will also determine their prospects. At EDSTAR, we encourage students to
                            embrace this fast, changing world and making them ready for tomorrow by being
                            their constant learning partner.</p>

                    </div>
                    <div className="vision-collapse">
                        <CollapsibleBar
                            collapseHeading="Distinctive curriculum"
                            collapseText="Our innovative courses are tailored for crucial 21st century workplace skills."/>
                        <CollapsibleBar
                            collapseHeading="Pracademic Pedagogy"
                            collapseText="Our approach is rooted in research, expert insights, and behavioural science."/>
                        <CollapsibleBar
                            collapseHeading="Career Focus"
                            collapseText="Our focus is to guide learners continuously on their academic journeys"/>
                    </div>

                    <div className="vision-2">

                        <p className="vision-para">A straightforward and easy -to-understand vision of
                            EDSTAR is the course which we provide to our users is designed in keeping view
                            of learning objective, concept development, skill development, relevance to real
                            life, skill closure and independent practice.</p>

                    </div>
                </div>

                <div id="team">
                    <h1 className="team-heading">TEAM MEMBERS</h1>

                    <div className="users">

                        <div className="user">
                            <img src={Debasish} alt="debasish" className="user-image"/>
                            <h4 className="user-name">Debashis Mahapatra</h4>
                            <a
                                href="mailto:debashiskumar.edu@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer">
                                <i class="fas fa-envelope fa-2x"></i>

                            </a>
                        </div>
                        <div className="user">
                            <img src={Subhrangsu} alt="subhrangshu" className="user-image"/>
                            <h4 className="user-name">Subhrangshu Sekhar Sahoo</h4>
                            <a
                                href="mailto:subhrangshu.edu@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer">
                                <i class="fas fa-envelope fa-2x"></i>
                            </a>
                        </div>
                        <div className="user">
                            <img src={Vipul} alt="vipul" className="user-image"/>
                            <h4 className="user-name">Adv. P Vipul Rao</h4>
                            <a
                                href="mailto:pvipulrao7.edu@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer">
                                <i class="fas fa-envelope fa-2x"></i>
                            </a>
                        </div>
                        <div className="user">
                            <img src={Rahul} alt="rahul" className="user-image"/>
                            <h4 className="user-name">Rahul Anand Sahu</h4>
                            <a
                                href="mailto:rahulsahu.edu@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer">
                                <i class="fas fa-envelope fa-2x"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default withRouter(About)
