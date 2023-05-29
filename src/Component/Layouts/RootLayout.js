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
          <div class="container clearfix">
            <div class="contact-info float-left">
              <FontAwesomeIcon icon={faEnvelopeOpen} />
              <a href="mailto:contact@example.com">name@websitename.com</a>
              <FontAwesomeIcon icon={faPhone} />
              +1 2345 67855 22
            </div>
            <div class="social-links float-right">
              <a href="/instaadress" class="twitter">
                {/* <FontAwesomeIcon icon={faTwitter} /> */}
              </a>
              <a href="/instaadress" class="facebook">
                {/* <FontAwesomeIcon icon={faFaceBook} /> */}
                <i class="fa fa-facebook"></i>
              </a>
              <a href="/instaadress" class="google-plus">
                {/* <FontAwesomeIcon icon={faGooglePlus} /> */}
              </a>
              <a href="/instaadress" class="linkedin">
                {/* <FontAwesomeIcon icon={faLinkedin} /> */}
              </a>
              <a href="/instaadress" class="instagram">
                {/* <FontAwesomeIcon icon={faInstagram} /> */}
              </a>
            </div>
          </div>
        </section>
        <header id="header">
          <div class="container">
            <div id="logo" class="pull-left">
              <h1>
                <a href="/lhd/home" class="scrollto">
                  <i class="icon">
                    <img src={Logo} width="50" alt="logo" title="" />
                  </i>
                  Le Monde
                </a>
              </h1>
            </div>

            <nav id="nav-menu-container">
              <ul class="nav-menu">
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
                <li class="menu-has-children">
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
