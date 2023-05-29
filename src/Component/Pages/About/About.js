import React, { useState, useEffect } from "react";
import Axios from "axios";
import { FcCheckmark } from "react-icons/fc";
import Footer from "../../Footer/Footer";
import AboutSvg from "../../../img/about.svg";
import AboutPNG from "../../../img/about-img.png";
// import { faLinkedin } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSquareGooglePlus } from "@fortawesome/free-solid-svg-icons";
// import { faFacebook } from "@fortawesome/free-solid-svg-icons";
// import { faTwitter } from "@fortawesome/free-solid-svg-icons";
import { AiFillLinkedin } from "react-icons/ai";
import { ImGooglePlus } from "react-icons/im";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
const About = () => {
  const [vission, setvission] = useState([]);
  const [mission, setmission] = useState([]);
  const [Objectives, setObjectives] = useState([]);
  const [team, setteam] = useState([]);
  const [clients, setclients] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:1111/vission/OthersText`, {
      withCredentials: true,
    }).then((response) => {
      setvission(response.data);
    });
  }, []);
  useEffect(() => {
    Axios.get(`http://localhost:1111/mission/OthersText`, {
      withCredentials: true,
    }).then((response) => {
      setmission(response.data);
    });
  }, []);
  useEffect(() => {
    Axios.get(`http://localhost:1111/all/OthersText`, {
      withCredentials: true,
    }).then((response) => {
      setObjectives(response.data);
    });
  }, []);
  useEffect(() => {
    Axios.get(`http://localhost:1111/all/Team`, {
      withCredentials: true,
    }).then((response) => {
      setteam(response.data);
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
      <div className="">
        <section id="innerBanner">
          <div class="inner-content">
            <h2>
              <span>About Us</span>
              <br />
              Striving for Excellence and Lasting Change!
            </h2>
            <div></div>
          </div>
        </section>
        <main id="main">
          <section id="clients" class="wow fadeInUp">
            <div class="container">
              <div class="section-header">
                <h2>Our Firm</h2>
                <p></p>
              </div>
            </div>
          </section>
          <section id="about" class="wow fadeInUp">
            <div class="container">
              <div class="row">
                <div class="col-lg-6 about-img">
                  <img src={AboutSvg} alt="svgImg" />
                </div>

                <div class="col-lg-6 content">
                  <div class="section-header">
                    <h2>Vision</h2>
                  </div>
                  {vission.length > 0 ? (
                    vission.map((val, index) => <h3>{val.detailText} </h3>)
                  ) : (
                    <>Insert your Vission</>
                  )}

                  <div class="section-header">
                    <h2>Mission</h2>
                  </div>
                  {mission.length > 0 ? (
                    mission.map((val, index) => (
                      <p class="text-dark">{val.detailText}</p>
                    ))
                  ) : (
                    <>Insert your Mission</>
                  )}

                  <div class="section-header">
                    <h2>Objectives</h2>
                  </div>
                  {Objectives.length > 0 ? (
                    Objectives.map((val, index) => (
                      <ul>
                        <li>
                          {" "}
                          <FcCheckmark /> {val.detailText}
                        </li>
                      </ul>
                    ))
                  ) : (
                    <>Insert your Objectives</>
                  )}
                </div>
              </div>
            </div>
          </section>
          <section id="clients" class="wow fadeInUp">
            <div class="container">
              <div class="section-header">
                <h2>Our Team</h2>
                {/* <p>detailText</p> */}
              </div>
            </div>
          </section>
          <section id="team" class="wow fadeInUp">
            <div class="container">
              <div class="row">
                <div class="col-lg-3 col-md-6">
                  {team.length > 0 ? (
                    team.map((val, index) => (
                      <div class="member">
                        <div class="pic">
                          <img
                            src={require(`../../../../../server/uploads/${val.imgPath}`)}
                            alt="teampic"
                          />
                        </div>
                        <div class="details">
                          <h4 text="teamMember.fristName+' '+teamMember.lastName">
                            {val.fristName} {val.lastName}
                          </h4>
                          <span>{val.authority}</span>
                          <span>{val.qualification}</span>
                          <div class="social">
                            <Link target="_blank" to={`${val.twiter}`}>
                              <AiFillTwitterCircle />
                              {/* <FontAwesomeIcon icon={faTwitter} /> */}
                            </Link>
                            <Link target="_blank" to={`${val.facebook}`}>
                              <BsFacebook />
                              {/* <FontAwesomeIcon icon={faFacebook} /> */}
                            </Link>
                            <Link target="_blank" to={`${val.googlePlus}`}>
                              <ImGooglePlus />
                              {/* <FontAwesomeIcon icon={faSquareGooglePlus} /> */}
                            </Link>
                            <Link target="_blank" to={`${val.linkdon}`}>
                              {/* <FontAwesomeIcon icon={faLinkedin} /> */}
                              <AiFillLinkedin />
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <>Insert your Team Members</>
                  )}
                </div>
              </div>
            </div>
          </section>
          <section id="about" class="wow fadeInUp">
            <div class="section-header">
              <h2>Operational Capacity</h2>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-lg-6 about-img">
                  <img src={AboutPNG} alt="aboutPNG" />
                </div>

                <div class="col-lg-6 content">{/* <p>detailText</p> */}</div>
              </div>
            </div>
          </section>
          <section id="clients" class="wow fadeInUp">
            <div class="container">
              <div class="section-header">
                <h2>Clients </h2>
                {/* <p>Clients-detailText</p> */}
              </div>

              <div class="owl-carousel clients-carousel">
                {clients.length > 0 ? (
                  clients.map((val, index) => (
                    <Link target="_blank" to={`${val.link}`}>
                      <img
                        src={require(`../../../../../server/uploads/${val.imgPath}`)}
                        alt="clientpic"
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
                  {/* <p class="cta-text">Service - detailText</p> */}
                </div>
                <div class="col-lg-3 cta-btn-container text-center">
                  <a class="cta-btn align-middle" href="/lhd/Contact">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default About;
