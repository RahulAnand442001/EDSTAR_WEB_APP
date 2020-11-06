import React from 'react'

import {Carousel} from "react-bootstrap"

import Header from "../Pages/Components/Header"
import Footer from "../Pages/Components/Footer"
import "../CSS/covid.css"

//photos
import covid from "../media/covid.jpg"
import covid1 from "../media/covid1.jpg"
import covid2 from "../media/covid2.jpg"
import covid3 from "../media/covid3.jpg"
import covid4 from "../media/covid4.jpg"
import c1 from "../media/1.png"
import c2 from "../media/2.png"
import c3 from "../media/3.png"
import c4 from "../media/4.png"
import c5 from "../media/5.png"
import c6 from "../media/6.jpg"
import c7 from "../media/7.png"
import c8 from "../media/8.png"
import c9 from "../media/9.png"
import c10 from "../media/10.jpg"
import c11 from "../media/11.jpg"
import c12 from "../media/12.png"
import c13 from "../media/13.png"
import c14 from "../media/14.jpg"
import c15 from "../media/15.png"
import c16 from "../media/16.png"
import g1 from "../media/logo-who.jpg"
import g2 from "../media/logomygov.png"
import g3 from "../media/mohfw.jpg"
import message from "../media/17.jpg"

function Covid() {
    return (
        <div className="Covid">
            <Header/>
            <section className="covid">
                <h1 className="covid-heading">FIGHT AGAINST COVID-19</h1>
                <div className="covid-links">
                    <a className="covid-link covid-link-india" href="https://www.covid19india.org/">
                        COVID-19 Statistics of INDIA
                    </a>
                    <a className="covid-link covid-link-world" href="https://covid19.who.int/table">
                        COVID-19 World Statistics
                    </a>
                </div>
                <Carousel>
                    <Carousel.Item>
                        <img src={covid} alt="covidpic" className="covid-slide-photo"/>
                        <img src={covid1} alt="covid1pic" className="covid-slide-photo"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={covid2} alt="covid2pic" className="covid-slide-photo"/>
                        <img src={covid4} alt="covid4pic" className="covid-slide-photo"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={covid3} alt="covid3pic" className="covid-slide-photo"/>
                    </Carousel.Item>

                </Carousel>
                <section className="covid-content">
                    <div className="content content-1">
                        <h1 className="content-heading heading-1">You matter, and we miss you
                        </h1>
                        <p className="content-description content-description-1">
                            Many teachers to whom we contacted told us, what they wanted students to know is
                            they miss them 100%. EDSTAR ensures amid the outbreak of coronavirus disease
                            (COVID-19) the quality learning and learning standards won’t be compromised.

                        </p>
                        <div className="content-photos">
                            <img src={c1} alt="c1" className="content-photo content-photo-1"/>
                            <img src={c5} alt="c5" className="content-photo content-photo-2"/>
                        </div>
                    </div>
                    <div className="content content-2">
                        <h1 className="content-heading heading-2">Stay safe
                        </h1>
                        <p className="content-description content-description-2">
                            The whole purpose of this partial lockdown/ quarantine/ isolation time is to
                            keep as many of us safe and healthy as possible. School is important but so is
                            your health. Take care of yourself and each other (from a safe distance of
                            course). And no matter what happens this year, be proud of yourself, your
                            resilience, and your ability to adapt to extreme circumstances. We are proud of
                            each and every one of you

                        </p>
                        <div className="content-photos">
                            <img src={c3} alt="c3" className="content-photo content-photo-3"/>
                            <img src={c4} alt="c4" className="content-photo content-photo-4"/>
                        </div>
                    </div>
                    <div className="content content-3">
                        <h1 className="content-heading heading-3">Be kind to your family</h1>
                        <p className="content-description content-description-3">
                            We know being home (in sometimes tight quarters) is tough on everyone, so now is
                            the time to dig deep and be kind. Be kind to your little brother and your older
                            sister. Help them understand the technology they might need for school. Set the
                            table and do the dishes.
                        </p>
                        <div className="content-photos">
                            <img src={c2} alt="c2" className="content-photo content-photo-5"/>
                            <img src={c9} alt="c9" className="content-photo content-photo-6"/>
                        </div>
                    </div>
                    <div className="content content-4">
                        <h1 className="content-heading heading-4">Investigate your own interests</h1>
                        <p className="content-description content-description-4">Being home means school
                            or college time is a lot shorter. EDSTAR hopes students take the time to figure
                            out what they love and find out more about it.
                        </p>
                        <div className="content-photos">
                            <img src={c7} alt="c7" className="content-photo content-photo-7"/>
                            <img src={c8} alt="c8" className="content-photo content-photo-8"/>
                        </div>
                    </div>
                    <div className="content content-5">
                        <h1 className="content-heading heading-5">Get creative
                        </h1>
                        <p className="content-description content-description-5">One of the best ways to
                            relieve stress and discover what matters to you is to get creative. EDSTAR hopes
                            students create art in any way that matters to them. Keep those creative juices
                            flowing. You have a lot of time on your hands.
                        </p>
                        <div className="content-photos">
                            <img src={c12} alt="c12" className="content-photo content-photo-9"/>
                            <img src={c10} alt="c10" className="content-photo content-photo-10"/>
                        </div>
                    </div>
                    <div className="content content-6">
                        <h1 className="content-heading heading-6">Go outside every day</h1>
                        <p className="content-description content-description-6">One of the best, safe
                            activities for students to do is get outside and play or exercise. So EDSTAR
                            hopes that students are doing this every single day. Take a walk. Kick a ball
                            around. Walk the dog. Just get outside.
                        </p>
                        <div className="content-photos">
                            <img src={c11} alt="c11" className="content-photo content-photo-11"/>
                            <img src={c16} alt="c16" className="content-photo content-photo-12"/>
                        </div>
                    </div>
                    <div className="content content-7">
                        <h1 className="content-heading heading-7">Find ways to make a difference
                        </h1>
                        <p className="content-description content-description-7">It’s easy to feel
                            helpless in situations like this, but we can make small differences. We’re
                            hoping students will be supportive and kind to each other remotely as well.
                            Don’t stigmatize your peers or tease anyone about being sick; remember that the
                            virus doesn’t follow geographical boundaries, ethnicities, age or ability or
                            gender.
                        </p>

                        <div className="content-photos">
                            <img src={c13} alt="c13" className="content-photo content-photo-13"/>
                            <img src={c14} alt="c14" className="content-photo content-photo-14"/>
                        </div>
                    </div>
                    <div className="content content-8">
                        <h1 className="content-heading heading-8">We’ll be there when you need us</h1>
                        <p className="content-description content-description-8">Today, children and
                            young people are global citizens, powerful agents of change and the next
                            generation of caregivers, scientists, and doctors. Any crisis presents the
                            opportunity to help them learn, cultivate compassion, and increase resilience
                            while building a safer and more caring community.
                        </p>
                        <div className="content-photos">
                            <img src={c15} alt="c15" className="content-photo content-photo-15"/>
                            <img src={c6} alt="c6" className="content-photo content-photo-16"/>
                        </div>
                        <p className="content-description content-sub-description-8">
                            EDSTAR promises to be in touch with any of its user who need moral support on
                            learning methodology as well as proper knowledge on coronavirus pandemic and in
                            the process, we shall develop a bond of friendship with our e-learners to combat
                            this Public Health Emergency of International Concern.

                        </p>
                    </div>
                </section>
                <section className="covid-guidlines">
                    <h1 className="guideline-heading">
                        <span className="covid-title">
                            COVID-19</span>
                        guidelines and regulations
                    </h1>
                    <div className="guideline-content">
                        <div className="content content-1">
                            <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019">
                                <img src={g1} alt="g1" className="guideline-content-photo content-photo-1"/></a>
                            <h6 className="content-heading content-heading-1"></h6>
                        </div>
                        <div className="content content-2">
                            <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019">
                                <img src={g3} alt="g3" className="guideline-content-photo content-photo-3"/></a>
                            <h6 className="content-heading content-heading-3"></h6>
                        </div>
                        <div className="content content-3">
                            <a href="https://www.mygov.in/covid-19">
                                <img src={g2} alt="g3" className="guideline-content-photo content-photo-2"/></a>
                            <h6 className="content-heading content-heading-2"></h6>
                        </div>

                    </div>
                </section>

                <h1 className="covid-message-heading">Message for every corona warrior and
                    ground level worker who are working 24/7 to save humanity!!!
                </h1>

                <section className="covid-message-box">
                    <div className="message">
                        <p className="message-content message-1">Ultimately, the greatest lesson that
                            COVID-19 can teach humanity is that we are all in this together. There are many
                            on the front lines, who while risking their lives, are making sure we are safe.
                            We need to be thankful for all of them! We are, or will be, going through the
                            most radical transformation the world has ever seen; people are justly
                            terrified, excited, depressed, heartbroken and hopeful, all at once. One day
                            this will be over, and we will be grateful for life in ways we never felt
                            possible for.
                        </p>
                        <p className="message-content message-2">
                            EDSTAR salutes to every doctor, soldier, social activists to keep the fight
                            against CORONA highly efficient and thankful to the Government of India for
                            channelising it’s best resources to protect citizens across the length and
                            breadth of the nation.

                        </p>
                        <p className="message-content message-3">
                            “To reach a port we must set sail – Sail, not tie at anchor Sail, not drift.”

                        </p>
                        <p className="message-content message-4">“We have a chance to do something
                            extraordinary. As we head out of this pandemic, we can change the world. Create
                            a world of love. A world where we are kind to each other. A world where we are
                            kind no matter what class, race, sexual orientation, what religion or lack of or
                            what job we have. A world we don't judge those at the food bank because that may
                            be us if things were just slightly different. Let love and kindness be our
                            roadmap.”
                        </p>

                        <h5 className="company">
                            ~
                            <span className="brand">
                                EDSTAR</span>
                            Team</h5>
                    </div>
                    <img src={message} alt="message" className="message-photo"/>
                </section>

            </section>
            <Footer/>
        </div>
    )
}

export default Covid
