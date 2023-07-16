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

  const [serviceOther, setServiceOther] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:1111/service/othertext`, {
      withCredentials: true,
    }).then((response) => {
      setServiceOther([response.data]);
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
              {serviceOther.length > 0 ? (
                serviceOther.map((val, index) => (
                  <p key={index}>{val.detailText}</p>
                ))
              ) : (
                <div className="container">Add Single Services</div>
              )}
            </div>

            <div className="row">
              {service.length > 0 ? (
                service.map((val, index) => (
                  <div className="col-lg-4" key={index}>
                    <div className="box wow fadeInLeft">
                      <div className="icon">
                        <FontAwesomeIcon icon={faBriefcase} />
                      </div>
                      <h4 className="title">
                        <Link to={`/lhd/services/${val.serviceName}`}>
                          {val.serviceName}
                        </Link>
                      </h4>
                      <p className="description">{val.detailText}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="container">Add All Services</div>
              )}
            </div>
          </div>
        </section>
        <section id="call-to-action" className="wow fadeInUp">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 text-center text-lg-left">
                <h3 className="cta-title">Get Our Service</h3>
                {serviceOther.length > 0 ? (
                  serviceOther.map((val, index) => (
                    <p
                      className="cta-text"
                      style={{ color: "black" }}
                      key={index}
                    >
                      {val.detailText}
                    </p>
                  ))
                ) : (
                  <>Add single Services</>
                )}
              </div>
              <div className="col-lg-3 cta-btn-container text-center">
                <Link className="cta-btn align-middle" to={"/lhd/Contact"}>
                  Contact Us
                </Link>
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

//  {
//    service.length > 0 ? (
//      service.map((val, index) => (
//        <div className="row" key={index}>
//          <div className="col-lg-4">
//            <div className="box wow fadeInLeft">
//              <div className="icon">
//                <FontAwesomeIcon icon={faBriefcase} />
//              </div>
//              <h4 className="title">
//  <Link to={`/lhd/services/${val.serviceName}`}>
//    {val.serviceName}
//  </Link>
//              </h4>
//              <p className="description text-dark">{val.detailText}</p>
//            </div>
//          </div>
//        </div>
//      ))
//    ) : (
//      <div className="container">Add All Services</div>
//    );
//  }
