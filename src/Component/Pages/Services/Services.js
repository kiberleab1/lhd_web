import React, { useState, useEffect } from "react";
import Axios from "axios";
import Footer from "../../Footer/Footer";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const Services = () => {
  const [Services, setServices] = useState([]);
  const [clients, setclients] = useState([]);
  useEffect(() => {
    Axios.get(`http://localhost:1111/all/service`, {
      withCredentials: true,
    }).then((response) => {
      setServices(response.data);
    });
  }, []);
  useEffect(() => {
    Axios.get(`http://localhost:1111/all/clients`, {
      withCredentials: true,
    }).then((response) => {
      setclients(response.data);
    });
  }, []);
  return (
    <>
      <section id="innerBanner">
        <div class="inner-content">
          <h2>
            <span>Services</span> <br />
            Striving for Excellence and Lasting Change!
          </h2>
        </div>
      </section>
      <main id="main">
        <section id="services">
          <div class="container">
            <div class="section-header">
              <h2>Services</h2>
              {/* <p>detailText</p> */}
            </div>
            <div class="row">
              {Services.length > 0 ? (
                Services.map((val, index) => (
                  <div class="col-lg-4">
                    <div class="box wow fadeInLeft">
                      <div class="icon">
                        <BsFillBriefcaseFill />
                      </div>
                      <h4 class="title">
                        <a href="/lhd/services/service.serviceName">
                          {val.serviceName}
                        </a>
                      </h4>
                      <p class="description text-dark">{val.detailText}</p>
                    </div>
                  </div>
                ))
              ) : (
                <>Insert Services</>
              )}
            </div>
          </div>
        </section>
        {/* clint-section */}
        <section id="clients" class="wow fadeInUp">
          <div class="container">
            <div class="section-header">
              <h2>Clients</h2>
              {/* <p>detailText</p> */}
            </div>

            <div class="owl-carousel clients-carousel">
              {clients.length > 0 ? (
                clients.map((val, index) => (
                  <Link target="_blank" to={`${val.link}`}>
                    <img
                      src={require(`../../../../../server/uploads/${val.imgPath}`)}
                      alt="client-imgPath"
                    />
                  </Link>
                ))
              ) : (
                <>Add Clients</>
              )}
            </div>
          </div>
        </section>
        <section id="call-to-action" class="wow fadeInUp">
          <div class="container">
            <div class="row">
              <div class="col-lg-9 text-center text-lg-left">
                <h3 class="cta-title">Get Our Service</h3>
                {/* <p class="cta-text">detailText</p> */}
              </div>
              <div class="col-lg-3 cta-btn-container text-center">
                <Link class="cta-btn align-middle" to={"/lhd/Contact"}>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Services;
