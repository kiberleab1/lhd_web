import React, { useState, useEffect } from "react";
import Axios from "axios";
import Footer from "../../Footer/Footer";

import Women from "../../../img/intro-carousel/women.png";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Home = () => {
  const [service, setservice] = useState([]);
  const [vcc, setVcc] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:1111/all/service`, {
      withCredentials: true,
    }).then((response) => {
      setservice(response.data);
    });
  }, []);
  useEffect(() => {
    Axios.get(`http://localhost:1111/vaccancy/getall`, {
      withCredentials: true,
    }).then((response) => {
      setVcc(response.data);
    });
  }, []);
  return (
    <>
      <section id="hero" className="clearfix">
        <div className="container">
          <div className="hero-banner">
            <img src={Women} alt="womenImg" className="img-fluid" />
          </div>

          <div className="hero-content">
            <h2>
              Health &amp; Development
              <br />
              <span> Consulting</span>
            </h2>
            <div>
              <Link to={"/lhd/Service"} className="btn-banner">
                Our Service
              </Link>
              {vcc.length > 0 ? (
                <Link to={"/lhd/Vaccancy"} className="btn-banner">
                  We are Hiring
                </Link>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </section>
      <main id="main">
        <section id="services">
          <div className="container">
            <div className="section-header">
              <h2>Services</h2>
              <p></p>
            </div>

            <div className="row">
              {service.length > 0 ? (
                service.map((val, index) => (
                  <div className="col-lg-4">
                    <div className="box wow fadeInLeft">
                      <div className="icon">
                        <FontAwesomeIcon icon={faBriefcase} />
                      </div>
                      <h4 className="title">
                        <Link to={`/lhd/services/${val.serviceName}`}>
                          {val.serviceName}
                        </Link>
                      </h4>
                      <p className="description text-dark">{val.detailText}</p>
                    </div>
                  </div>
                ))
              ) : (
                <></>
              )}
            </div>
          </div>
        </section>
        <section id="call-to-action" className="wow fadeInUp">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 text-center text-lg-left">
                <h3 className="cta-title">Get Our Service</h3>
                <p className="cta-text"></p>
              </div>
              <div className="col-lg-3 cta-btn-container text-center">
                <a className="cta-btn align-middle" href="/lhd/Contact">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <a href="lhd/home" className="back-to-top">
        <FontAwesomeIcon icon={faChevronUp} />
      </a>
    </>
  );
};

export default Home;
