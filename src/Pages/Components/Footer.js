import React from 'react'
import {Link, withRouter} from "react-router-dom";

import "../../CSS/footer.css";

const Footer = () => {

    //getting year for updating copyright period
    const date = new Date();
    const currentYear = " " + date.getFullYear() + " ";

    //social media links
    const LINKED_IN = "https://www.linkedin.com/in/illia-chaban/";
    const YOU_TUBE = "https://www.youtube.com/";
    const INSTAGRAM = "https://www.instagram.com/edu.edstar/?fbclid=IwAR0qQ0XSLYyY0Ec4O6DrMbAAnR7BUpt0i" +
            "aIRRPx8Ief0KpdJXn_AykqDnrQ";
    const TWITTER = "https://twitter.com/edstar_edu?fbclid=IwAR0vvVU2a7eMx1CKwQMhDMW1f9x4ktsDCREXiM-D" +
            "DUtz_zVHkx7TJBbj3xA";
    const FACEBOOK = "https://www.facebook.com/edu.edstar";

    const BLOGGER = "https://ed4star.blogspot.com/";

    //links of Edstar Website policies

    const PRIVACY = "https://drive.google.com/file/d/1JGALW9PRNuW29Hb8-xWkmNlbwbX4bO9x/view?usp=shari" +
            "ng";
    const TC = "https://drive.google.com/file/d/1ndoBcsa0_XyCg7zEA6Nb_YDqQf34NaZH/view?usp=shari" +
            "ng";
    const LEGAL = "https://drive.google.com/file/d/1c2wZHwNeG9kmWJzOKgzv_xqpoUAyLxBn/view?usp=shari" +
            "ng";

    return (
        <footer className="footer">

            <div className="footer-icons">
                <a className="footer-link blog" href={BLOGGER}>
                    <i class="fab fa-blogger-b footer-icon-1"></i>
                    <span className="footer-icon-title">BLOG</span>
                </a>

                <Link className="footer-link contact" to="/contact">
                    <i class="fas fa-id-card footer-icon-2 "></i>
                    <span className="footer-icon-title">CONTACT US</span>
                </Link>
            </div>

            <div className="mobo-socio-icons">
                <a href={BLOGGER}>
                    <i class="fab fa-blogger-b "></i>
                </a>

                <a href={LINKED_IN}>
                    <i class="fab fa-linkedin-in"></i>
                </a>
                <a href={TWITTER}>
                    <i class="fab fa-twitter"></i>
                </a>
                <a href={YOU_TUBE}>
                    <i class="fab fa-youtube"></i>
                </a>
                <a href={FACEBOOK}>
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a href={INSTAGRAM}>
                    <i class="fab fa-instagram"></i>
                </a>
                <Link to="/contact">
                    <i class="fas fa-id-card "></i>
                </Link>
            </div>

            <div id='contact-info'>
                <div class='links'>
                    <a href={LINKED_IN}>
                        <div>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span>
                                <i class="fab fa-linkedin-in"></i>
                            </span>
                        </div>
                    </a>
                    <a href={TWITTER}>
                        <div>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span>
                                <i class="fab fa-twitter"></i>
                            </span>
                        </div>
                    </a>
                    <a href={YOU_TUBE} class='orange-shadow'>
                        <div>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span>
                                <i class="fab fa-youtube"></i>
                            </span>

                        </div>
                    </a>
                    <a href={FACEBOOK} class='orange-border'>
                        <div>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span>
                                <i class="fab fa-facebook-f"></i>
                            </span>
                        </div>
                    </a>
                    <a href={INSTAGRAM} class='orange-border'>
                        <div>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span>
                                <i class="fab fa-instagram"></i>
                            </span>
                        </div>
                    </a>
                </div>
            </div>

            <h6 className="policy">

                <a href={PRIVACY}>Privacy</a>
                <a href={TC}>T&C</a>
                <a href={LEGAL}>Legal</a>
            </h6 >
            <h6 className="copyright">&copy; Copyright {currentYear}
                Edstar. All Rights Reserved
            </h6>

        </footer>

    )
}

export default withRouter(Footer);
