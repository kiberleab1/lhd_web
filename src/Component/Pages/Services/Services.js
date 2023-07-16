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
  const [serOtherText, setserOtherText] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:1111/service/othertext`, {
      withCredentials: true,
    }).then((response) => {
      setserOtherText([response.data]);
    });
  }, []);
  const [ClintOther, setClintOther] = useState([]);
  useEffect(() => {
    Axios.get(`http://localhost:1111/client/about`, {
      withCredentials: true,
    }).then((response) => {
      setClintOther([response.data]);
    });
  }, []);

  return (
    <>
      <section id="innerBanner">
        <div className="inner-content">
          <h2>
            <span>Services</span> <br />
            Striving for Excellence and Lasting Change!
          </h2>
        </div>
      </section>
      <main id="main">
        <section id="services">
          <div className="container">
            <div className="section-header">
              <h2>Services</h2>
              {serOtherText.length > 0 ? (
                serOtherText.map((val, index) => (
                  <p key={index}>{val.detailText}</p>
                ))
              ) : (
                <div>service from other text</div>
              )}
            </div>
            <div className="row">
              {Services.length > 0 ? (
                Services.map((val, index) => (
                  <div className="col-lg-4">
                    <div className="box wow fadeInLeft">
                      <div className="icon">
                        <BsFillBriefcaseFill />
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
                <>Insert Services</>
              )}
            </div>
          </div>
        </section>
        {/* clint-section */}
        <section id="clients" className="wow fadeInUp">
          <div className="container">
            <div className="section-header">
              <h2>Clients</h2>
              {ClintOther.length > 0 ? (
                ClintOther.map((val, index) => (
                  <p key={index}>{val.detailText}</p>
                ))
              ) : (
                <div className="container">Clintes other text</div>
              )}
            </div>

            <div className="owl-carousel clients-carousel">
              {clients.length > 0 ? (
                clients.map((val, index) => (
                  <Link target="_blank" to={`${val.link}`} key={index}>
                    <img
                      src={require(`../../../../../lhd_node/uploads/${val.imgPath}`)}
                      alt="client-imgPath"
                    />
                  </Link>
                ))
              ) : (
                <>Add Clients img</>
              )}
            </div>
          </div>
        </section>
        <section id="call-to-action" className="wow fadeInUp">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 text-center text-lg-left">
                <h3 className="cta-title">Get Our Service</h3>

                {serOtherText.length > 0 ? (
                  serOtherText.map((val, index) => (
                    <p
                      className="cta-text"
                      style={{ color: "black" }}
                      key={index}
                    >
                      {val.detailText}
                    </p>
                  ))
                ) : (
                  <div className="container">service from other text</div>
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
    </>
  );
};

export default Services;
