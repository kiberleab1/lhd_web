import React from "react";
import { NavLink, Outlet } from "react-router-dom";
// import "./st.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../img/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
// import { faTwitter } from "@fortawesome/free-solid-svg-icons";
// import { faFaceBook } from "@fortawesome/free-solid-svg-icons";
// import { faGooglePlus } from "@fortawesome/free-solid-svg-icons";
// import { faLinkedin } from "@fortawesome/free-solid-svg-icons";
// import { faInstagram } from "@fortawesome/free-solid-svg-icons";

const CollapsibleExample = () => {
  return (
    <div>
      <>
        <section id="topbar">
          <div className="container clearfix">
            <div className="contact-info float-left">
              <FontAwesomeIcon icon={faEnvelopeOpen} />
              <a>name@websitename.com</a>
              <FontAwesomeIcon icon={faPhone} />
              +1 2345 67855 22
            </div>
            <div className="social-links float-right">
              <a href="/instaadress" className="twitter">
                {/* <FontAwesomeIcon icon={faTwitter} /> */}
              </a>
              <a href="/instaadress" className="facebook">
                {/* <FontAwesomeIcon icon={faFaceBook} /> */}
                <i className="fa fa-facebook"></i>
              </a>
              <a href="/instaadress" className="google-plus">
                {/* <FontAwesomeIcon icon={faGooglePlus} /> */}
              </a>
              <a href="/instaadress" className="linkedin">
                {/* <FontAwesomeIcon icon={faLinkedin} /> */}
              </a>
              <a href="/instaadress" className="instagram">
                {/* <FontAwesomeIcon icon={faInstagram} /> */}
              </a>
            </div>
          </div>
        </section>
        <header id="header">
          <div className="container">
            <div id="logo" className="pull-left">
              <h1>
                <a href="/lhd/home" className="scrollto">
                  <i className="icon">
                    <img src={Logo} width="50" alt="logos" />
                  </i>
                  Le Monde
                </a>
              </h1>
            </div>

            <nav id="nav-menu-container">
              <ul className="nav-menu">
                <li>
                  <NavLink to="/lhd/Home">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/lhd/About">About Us</NavLink>
                </li>
                <li>
                  <NavLink to="/lhd/Service">Services</NavLink>
                </li>
                <li>
                  <NavLink to="/lhd/Experiance">Experience</NavLink>
                </li>
                <li className="menu-has-children">
                  <>Clients</>
                  <ul>
                    <li>
                      <NavLink to="/lhd/ClientEthiopia">In Ethiopia</NavLink>
                    </li>
                    <li>
                      <NavLink to="/lhd/ClientOther">Other Countries</NavLink>
                    </li>
                    <li>
                      <NavLink to="/lhd/Emails">Emails</NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink to="/lhd/Contact">Contact</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default CollapsibleExample;
