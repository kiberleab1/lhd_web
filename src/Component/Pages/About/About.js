import React, { useState, useEffect } from "react";
import Axios from "axios";
import { FcCheckmark } from "react-icons/fc";
import Footer from "../../Footer/Footer";
import AboutSvg from "../../../img/about.svg";
import AboutPNG from "../../../img/about-img.png";
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
      setvission([response.data]);
    });
  }, []);
  useEffect(() => {
    Axios.get(`http://localhost:1111/mission/OthersText`, {
      withCredentials: true,
    }).then((response) => {
      setmission([response.data]);
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
  const [FirmText, setFirmText] = useState("");
  useEffect(() => {
    Axios.get(`http://localhost:1111/firm/otherText`, {
      withCredentials: true,
    }).then((response) => {
      setFirmText([response.data]);
    });
  }, []);
  const [TeamText, setTeamText] = useState([]);
  useEffect(() => {
    Axios.get(`http://localhost:1111/teamtext/otherteamText`, {
      withCredentials: true,
    }).then((response) => {
      setTeamText([response.data]);
    });
  }, []);
  const [OperationalCapacity, setOperationalCapacity] = useState([]);
  useEffect(() => {
    Axios.get(`http://localhost:1111/opertional/capacity`, {
      withCredentials: true,
    }).then((response) => {
      setOperationalCapacity([response.data]);
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
      <div className="">
        <section id="innerBanner">
          <div className="inner-content">
            <h2>
              <span>About Us</span>
              <br />
              Striving for Excellence and Lasting Change!
            </h2>
            <div></div>
          </div>
        </section>
        <main id="main">
          <section id="clients" className="wow fadeInUp">
            <div className="container">
              <div className="section-header">
                <h2>Our Firm</h2>
                {FirmText.length > 0 ? (
                  FirmText.map((val, index) => (
                    <p key={index}>{val.detailText}</p>
                  ))
                ) : (
                  <>Add Firm</>
                )}
              </div>
            </div>
          </section>
          <section id="about" className="wow fadeInUp">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 about-img">
                  <img src={AboutSvg} alt="svgImg" />
                </div>

                <div className="col-lg-6 content">
                  <div className="section-header">
                    <h2>Vision</h2>
                  </div>
                  {vission.length > 0 ? (
                    vission.map((val, index) => (
                      <h3 key={index}>{val.detailText} </h3>
                    ))
                  ) : (
                    <>Insert LDH Vission</>
                  )}

                  <div className="section-header">
                    <h2>Mission</h2>
                  </div>
                  {mission.length > 0 ? (
                    mission.map((val, index) => (
                      <p className="text-dark" key={index}>
                        {val.detailText}
                      </p>
                    ))
                  ) : (
                    <>Insert LDH Mission</>
                  )}

                  <div className="section-header">
                    <h2>Objectives</h2>
                  </div>
                  {Objectives.length > 0 ? (
                    Objectives.map((val, index) => (
                      <ul key={index}>
                        <li>
                          {" "}
                          <FcCheckmark /> {val.detailText}
                        </li>
                      </ul>
                    ))
                  ) : (
                    <>Insert LDH Objectives</>
                  )}
                </div>
              </div>
            </div>
          </section>
          <section id="clients" className="wow fadeInUp">
            <div className="container">
              <div className="section-header">
                <h2>Our Team</h2>
                {TeamText.length > 0 ? (
                  TeamText.map((val, index) => (
                    <p key={index}>{val.detailText}</p>
                  ))
                ) : (
                  <>Add team Text</>
                )}
              </div>
            </div>
          </section>
          <section id="team" className="wow fadeInUp">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  {team.length > 0 ? (
                    team.map((val, index) => (
                      <div className="member" key={index}>
                        <div className="pic">
                          <img
                            src={require(`../../../../../server/uploads/${val.imgPath}`)}
                            alt="teampic"
                          />
                        </div>
                        <div className="details">
                          <h4 text="teamMember.fristName+' '+teamMember.lastName">
                            {val.fristName} {val.lastName}
                          </h4>
                          <span>{val.authority}</span>
                          <span>{val.qualification}</span>
                          <div className="social">
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
                    <>Insert LDH Team Members</>
                  )}
                </div>
              </div>
            </div>
          </section>
          <section id="about" className="wow fadeInUp">
            <div className="section-header">
              <h2>Operational Capacity</h2>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-6 about-img">
                  <img src={AboutPNG} alt="aboutPNG" />
                </div>
                <div className="col-lg-6 content">
                  {OperationalCapacity.length > 0 ? (
                    OperationalCapacity.map((val, index) => (
                      <p key={index} style={{ color: "black" }}>
                        {val.detailText}
                      </p>
                    ))
                  ) : (
                    <p style={{ color: "black" }}>Add OperationalCapacity</p>
                  )}
                </div>
              </div>
            </div>
          </section>
          <section id="clients" className="wow fadeInUp">
            <div className="container">
              <div className="section-header">
                <h2>Clients </h2>
                {ClintOther.length > 0
                  ? ClintOther.map((val, index) => (
                      <p key={index}>{val.detailText}</p>
                    ))
                  : "othertext Clients text"}
              </div>

              <div className="owl-carousel clients-carousel">
                {clients.length > 0 ? (
                  clients.map((val, index) => (
                    <Link key={index} target="_blank" to={`${val.link}`}>
                      <img
                        src={require(`../../../../../server/uploads/${val.imgPath}`)}
                        alt="clientpic"
                      />
                    </Link>
                  ))
                ) : (
                  <div className="container"> No clients img</div>
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
                    <div className="container">service-otherText </div>
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
      </div>
    </>
  );
};

export default About;
