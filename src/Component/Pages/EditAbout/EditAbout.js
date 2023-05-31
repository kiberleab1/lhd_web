import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Axios from "axios";
// team
import { AiFillLinkedin } from "react-icons/ai";
import { ImGooglePlus } from "react-icons/im";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
const EditAbout = () => {
  const inputRef = useRef(null);

  const [errors, setErr] = useState(false);
  const [missionErr, setMissionERR] = useState("");
  const [Vision, setVision] = useState("Vision");
  const [Text, setText] = useState("");
  const [Obj, setObjs] = useState([]);

  //mission
  const [mission, setMission] = useState("");
  const getMission = (e) => {
    setMission(e.target.value);
  };
  //vision
  const getVision = (e) => {
    setVision("Vision");
  };
  const getText = (e) => {
    setText(e.target.value);
  };
  const submitt = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("type", Vision);
    formData.append("detailText", Text);
    Axios.post(
      "http://localhost:1111/Admin/editAbout/saveOthersText",
      formData,
      {
        withCredentials: true,
      }
    ).then((response) => {
      if (response.data === "OtherTexts POSTED") {
        setErr(false);
        setText("");
        //  sessionStorage.setItem("userId", response.data.id);
        // dispatch(addRole(response.data.msg)); //redux
        // return push("/Admin/editAbout");
      } else {
        setErr(response.data);
      }
    });
  };
  const MissionSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("type", "Mission");
    formData.append("detailText", mission);
    Axios.post(
      "http://localhost:1111/Admin/editAbout/saveOthersText",
      formData,
      {
        withCredentials: true,
      }
    ).then((response) => {
      if (response.data === "OtherTexts POSTED") {
        setMissionERR(false);
        setMission("");

        //  sessionStorage.setItem("userId", response.data.id);
        // dispatch(addRole(response.data.msg)); //redux
        // return push("/Admin/editAbout");
      } else {
        setMissionERR(response.data);
      }
    });
  };
  //fetch obj
  useEffect(() => {
    Axios.get(`http://localhost:1111/all/OthersText`, {
      withCredentials: true,
    }).then((response) => {
      setObjs(response.data);
    });
  }, []); // obj
  const Delete = (val) => {
    Axios.delete(
      `http://localhost:1111/Admin/editAbout/deleteObjective/${val}`,
      {
        withCredentials: true,
      }
    ).then((response) => {
      if (response.data.msg === "deleted obj") {
        window.location.reload();
      }
    });
  };
  //OBJ
  const [obgErr, setobgErr] = useState("");
  const [Objective, setObj] = useState("");
  const [type, setType] = useState("Objectives");

  const getDetails = (e) => {
    setObj(e.target.value);
  };

  const Objsubmitt = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("type", type);
    formData.append("detailText", Objective);
    Axios.post(
      "http://localhost:1111/Admin/editAbout/saveOthersText",
      formData,
      {
        withCredentials: true,
      }
    ).then((response) => {
      console.log(response);
      if (response.data === "OtherTexts POSTED") {
        setobgErr(false);
        setObj("");
        // return window.location.reload();
      } else {
        setobgErr(response.data);
      }
    });
  };
  // Team

  const [team, setTeam] = useState([]);
  useEffect(() => {
    Axios.get(`http://localhost:1111/all/Team`, {
      withCredentials: true,
    }).then((response) => {
      setTeam(response.data);
    });
  }, []);
  const DeleteTeam = (vall) => {
    Axios.delete(`http://localhost:1111/Admin/deleteTeam/${vall}`, {
      withCredentials: true,
    }).then((response) => {
      if (response.data.msg === "deleted team") {
        //my-adv/128
        //  window.location.reload();
      }
    });
  };
  //TEAM
  const [teamERR, setTeamerr] = useState("");
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [Authority, setAuthority] = useState("");
  const [Qualification, setQualification] = useState("");
  const [Facebook, setFacebook] = useState("");
  const [Twiter, setTwiter] = useState("");
  const [GooglePlus, setGooglePlus] = useState("");
  const [Linkdon, setLinkdon] = useState("");
  const [photo, setimg] = useState("");
  const getFname = (e) => setFname(e.target.value);
  const getLname = (e) => setLname(e.target.value);
  const getAuthority = (e) => setAuthority(e.target.value);
  const getQualification = (e) => setQualification(e.target.value);
  const getFacebook = (e) => setFacebook(e.target.value);
  const getTwiter = (e) => setTwiter(e.target.value);
  const getGooglePlus = (e) => setGooglePlus(e.target.value);
  const getLinkdon = (e) => setLinkdon(e.target.value);
  const getImg = (e) => setimg(e.target.files[0]);

  const submittTeam = (e) => {
    e.preventDefault();
    let formData = new FormData();

    formData.append("fristName", Fname);
    formData.append("lastName", Lname);
    formData.append("authority", Authority);
    formData.append("qualification", Qualification);
    formData.append("facebook", Facebook);
    formData.append("twiter", Twiter);
    formData.append("googlePlus", GooglePlus);
    formData.append("linkdon", Linkdon);
    formData.append("img", photo);

    Axios.post("http://localhost:1111/register_TeamMembers", formData, {
      withCredentials: true,
    }).then((response) => {
      console.log(response.data);
      if (response.data.msg === "NEW TEAM MEMBER ADD") {
        setTeamerr(false);
        setFname("");
        setLname("");
        setAuthority("");
        setQualification("");
        setFacebook("");
        setTwiter("");
        setGooglePlus("");
        setLinkdon("");
        inputRef.current.value = null;
        // return window.location.reload();
      } else {
        setTeamerr(response.data);
      }
    });
  };
  // testimony
  const [fnames, setfnames] = useState("");
  const [lnames, setlnames] = useState("");
  const [Authoritys, setAuthoritys] = useState("");
  const [Organazations, setOrganazations] = useState("");
  const [detailTexts, setdetailTexts] = useState("");
  const [Testimoies, setTestimoies] = useState([]);
  const [testimonyErr, setTestmonyerr] = useState("");

  const getFirstName = (e) => {
    setfnames(e.target.value);
  };
  const getLastName = (e) => {
    setlnames(e.target.value);
  };
  const getAuthoritys = (e) => {
    setAuthoritys(e.target.value);
  };
  const getOrganazations = (e) => {
    setOrganazations(e.target.value);
  };
  const getdetailTexts = (e) => {
    setdetailTexts(e.target.value);
  };
  const SubmittTestimony = (e) => {
    e.preventDefault();
    let formData = new FormData();

    formData.append("FirstName", fnames);
    formData.append("LastName", lnames);
    formData.append("Authoritys", Authoritys);
    formData.append("Organazations", Organazations);
    formData.append("detailTexts", detailTexts);

    Axios.post("http://localhost:1111/Admin/saveTestmonialText", formData, {
      withCredentials: true,
    }).then((response) => {
      console.log(response.data);
      if (response.data.msg === "Testimonies POSTED") {
        setTestmonyerr(false);
        setfnames("");
        setlnames("");
        setAuthoritys("");
        setOrganazations("");
        setdetailTexts("");
        // return window.location.reload();
      } else {
        setTestmonyerr(response.data);
      }
    });
  };
  useEffect(() => {
    Axios.get(`http://localhost:1111/all/fetch/testmonial`, {
      withCredentials: true,
    }).then((response) => {
      setTestimoies(response.data);
    });
  }, []);
  //delete testimonies
  const DeleteTestimonies = (delId) => {
    Axios.delete(`http://localhost:1111/Admin/deleteTestmony/${delId}`, {
      withCredentials: true,
    }).then((response) => {
      if (response.data.msg === "Testimonies DELETED") {
        window.location.reload();
      }
    });
  };

  const [viss, setViss] = useState([]);
  useEffect(() => {
    Axios.get(`http://localhost:1111/vission/OthersText`, {
      withCredentials: true,
    }).then((response) => {
      setViss(response.data);
    });
  }, []);
  const [miss, setMiss] = useState([]);
  useEffect(() => {
    Axios.get(`http://localhost:1111/mission/OthersText`, {
      withCredentials: true,
    }).then((response) => {
      setMiss(response.data);
    });
  }, []);
  return (
    <div>
      <section id="innerBanner">
        <div class="inner-content">
          <h2>
            <span>Add or Edit About Us</span>
            <br />
            Striving for Excellence and Lasting Change!
          </h2>
          <div></div>
        </div>
      </section>
      <main id="main">
        <section id="about" class="wow fadeInUp">
          <div class="container">
            <div class="row">
              <div class="container">
                <div class="section-header" text="FirmText">
                  <h2>Our Firm</h2>
                  <form name="sentMessage" class="well" id="contactForm">
                    <div class="control-group">
                      <div class="form-group">
                        <textarea
                          class="form-control"
                          rows="8"
                          placeholder="Operational Capacity not working"
                          id="name"
                          required
                          name="detailText"
                        ></textarea>
                      </div>
                    </div>
                    <div id="success"></div>
                    <br />

                    <button type="submit" class="btn btn-primary pull-right">
                      Save
                    </button>
                    <br />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about" class="wow fadeInUp">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 about-img">
                <img src="/img/about.svg" alt="" />
              </div>

              <div class="col-lg-6 content">
                <div class="container">
                  <div class="section-header" text="VisionText">
                    <h2>Vision</h2>

                    {viss.length > 0 ? (
                      viss.map((val) => (
                        <ul>
                          <li text="Objectives">
                            <i
                              class="icon ion-ios-checkmark-outline"
                              key={val.id}
                            >
                              {val.detailText}
                            </i>
                            <button
                              onClick={() => Delete(val.id)}
                              type="submit"
                              class="btn btn-primary "
                            >
                              Delete
                            </button>
                            <br />
                          </li>
                        </ul>
                      ))
                    ) : (
                      <>Insert vission</>
                    )}
                    <form
                      name="sentMessage"
                      class="well"
                      id="contactForm"
                      row="8"
                    >
                      <input
                        type="hidden"
                        value="Vision"
                        name="type"
                        onChange={getVision}
                      />{" "}
                      <div class="control-group">
                        <div class="form-group">
                          <textarea
                            class="form-control"
                            rows="8"
                            placeholder="Operational Capacity"
                            id="name"
                            required
                            name="detailText"
                            data-validation-required-message="Please enter your name"
                            onChange={getText}
                            value={Text}
                          ></textarea>
                          <span class="text-danger">{errors}</span>
                        </div>
                      </div>
                      <div id="success"></div>
                      <br />
                      <button
                        type="submit"
                        class="btn btn-primary pull-right"
                        onClick={submitt}
                      >
                        Save
                      </button>
                      <br />
                    </form>
                  </div>
                  <div class="container">
                    <div class="section-header">
                      <h2>Mission</h2>
                      {/* mapping */}
                      {miss.length > 0 ? (
                        miss.map((val) => (
                          <ul>
                            <li text="Objectives">
                              <i
                                class="icon ion-ios-checkmark-outline"
                                key={val.id}
                              >
                                {val.detailText}
                              </i>
                              <button
                                onClick={() => Delete(val.id)}
                                type="submit"
                                class="btn btn-primary "
                              >
                                Delete
                              </button>
                              <br />
                            </li>
                          </ul>
                        ))
                      ) : (
                        <>Insert Mission</>
                      )}
                      <form
                        name="sentMessage"
                        class="well"
                        id="contactForm"
                        row="8"
                      >
                        {" "}
                        <input type="hidden" name="mission" value="Mission" />
                        <div class="control-group">
                          <div class="form-group">
                            <textarea
                              class="form-control"
                              rows="8"
                              placeholder="Operational Capacity"
                              id="name"
                              required
                              name="detailText"
                              data-validation-required-message="Please enter your name"
                              onChange={getMission}
                              value={mission}
                            ></textarea>
                            <span class="text-danger">{missionErr} </span>
                          </div>
                        </div>
                        <div id="success"></div>
                        <br />
                        <button
                          type="submit"
                          class="btn btn-primary pull-right"
                          onClick={MissionSubmit}
                        >
                          Save
                        </button>
                        <br />
                      </form>
                    </div>

                    <div class="section-header">
                      <h2>Objectives</h2>
                    </div>
                    {Obj.length > 0 ? (
                      Obj.map((val) => (
                        <ul>
                          <li text="Objectives">
                            <i
                              class="icon ion-ios-checkmark-outline"
                              key={val.id}
                            >
                              {val.detailText}
                            </i>
                            <button
                              onClick={() => Delete(val.id)}
                              type="submit"
                              class="btn btn-primary "
                            >
                              Delete
                            </button>
                            <br />
                          </li>
                        </ul>
                      ))
                    ) : (
                      <>Insert Objective</>
                    )}

                    <form method="POST" name="sentMessage">
                      <div class="control-group">
                        <div class="form-group">
                          <textarea
                            class="form-control"
                            rows="8"
                            placeholder="Objectives"
                            id="name"
                            required
                            name="detailText"
                            onChange={getDetails}
                            data-validation-required-message="Please enter your name"
                            value={Objective}
                          ></textarea>
                          <span class="text-danger">{obgErr} </span>
                        </div>
                      </div>
                      <button
                        type="submit"
                        class="btn btn-primary "
                        onClick={Objsubmitt}
                      >
                        Add
                      </button>
                      <br />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about" class="wow fadeInUp">
          <div class="container">
            <div class="row">
              <div class="container">
                <div class="section-header">
                  <h2>Our Team</h2>
                  <form
                    name="sentMessage"
                    class="well"
                    id="contactForm"
                    row="8"
                  >
                    <div class="control-group">
                      <div class="form-group">
                        <textarea
                          class="form-control"
                          rows="8"
                          placeholder="NOT CHEKED"
                          // Operational Capacity
                          id="name"
                          required
                          name="detailText"
                          data-validation-required-message="Please enter your name"
                        ></textarea>
                      </div>
                    </div>
                    <div id="success"></div>
                    <br />

                    <button type="submit" class="btn btn-primary pull-right">
                      Save
                    </button>
                    <br />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="team" class="wow fadeInUp">
          <div class="container">
            <div class="section-header">
              <h2>Our Team</h2>
            </div>
            {team.length > 0 ? (
              team.map((val, index) => (
                <div class="row">
                  <div class="col-lg-3 col-md-6" text="teamMember">
                    <div class="member">
                      <>
                        <div class="pic">
                          {/* {require(`../../../../../server/uploads/${val.imgPath}`)} */}
                          <img
                            src={require(`../../../../../server/uploads/${val.imgPath}`)}
                            alt="val.imgPath"
                          />
                        </div>

                        <div class="details" key={val.id}>
                          <h4>
                            {val.fristName} {val.lastName}{" "}
                          </h4>
                          <span> {val.authority}</span>
                          <span> {val.qualification} </span>

                          <div class="social">
                            <a href={val.twiter}>
                              <AiFillTwitterCircle />
                            </a>{" "}
                            <a href={val.facebook}>
                              <BsFacebook />
                            </a>
                            <a href={val.googlePlus}>
                              <ImGooglePlus />
                            </a>{" "}
                            <a href={val.linkdon}>
                              <AiFillLinkedin />
                            </a>
                          </div>
                        </div>
                      </>
                    </div>
                    <button
                      type="submit"
                      class="btn btn-primary "
                      onClick={() => DeleteTeam(val.id)}
                    >
                      Delete
                    </button>
                    <br /> <br />
                    <Link to={`/Admin/select/one/${val.id}`}>
                      <button type="submit" class="btn btn-primary">
                        Edit
                      </button>
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <p class="container">Insert team member</p>
            )}
          </div>
        </section>
        <section id="contact" class="wow fadeInUp">
          <div class="container">
            <div class="row contact-info">
              <div class="col-lg-5"></div>
              <div class="col-lg-7">
                <div class="container">
                  <div class="form">
                    <form class="well" id="contactForm">
                      <div class="control-group">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Frist Name"
                            id="name"
                            required
                            name="fristName"
                            onChange={getFname}
                            value={Fname}
                          />
                        </div>
                      </div>
                      <div class="control-group">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Last Name"
                            id="name"
                            required
                            name="lastName"
                            onChange={getLname}
                            value={Lname}
                          />
                        </div>
                      </div>
                      <div class="control-group">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Authority"
                            id="name"
                            required
                            name="authority"
                            onChange={getAuthority}
                            value={Authority}
                          />
                        </div>
                      </div>
                      <div class="control-group">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Qualification"
                            id="name"
                            required
                            name="qualification"
                            onChange={getQualification}
                            value={Qualification}
                          />
                        </div>
                      </div>

                      <div class="control-group">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Link to facebook  Account"
                            id="name"
                            required
                            name="facebook"
                            onChange={getFacebook}
                            value={Facebook}
                          />
                        </div>
                      </div>
                      <div class="control-group">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Link to tewiter  Account"
                            id="name"
                            required
                            name="twiter"
                            onChange={getTwiter}
                            value={Twiter}
                          />
                        </div>
                      </div>
                      <div class="control-group">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Link to Google+  Account"
                            id="name"
                            required
                            name="googlePlus"
                            onChange={getGooglePlus}
                            value={GooglePlus}
                          />
                        </div>
                      </div>
                      <div class="control-group">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Link to LinkdIn  Account"
                            id="name"
                            required
                            name="linkdon"
                            onChange={getLinkdon}
                            value={Linkdon}
                          />
                        </div>
                      </div>
                      <div class="control-group">
                        <div class="form-group">
                          <input
                            type="file"
                            // Accept="image/*"
                            name="img"
                            class="form-control"
                            id="img"
                            // value={Img}
                            ref={inputRef}
                            onChange={getImg}
                            required
                          />
                        </div>
                      </div>

                      <div id="text-danger">{teamERR}</div>
                      <br />

                      <button
                        type="submit"
                        class="btn btn-primary pull-right"
                        onClick={submittTeam}
                      >
                        Add
                      </button>
                      <br />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* #team */}
        <section id="about" class="wow fadeInUp">
          <div class="container">
            <div class="section-header" text="OperationalCapacity">
              <h2>Operational Capacity</h2>
              <form name="sentMessage" class="well" id="contactForm">
                <div class="control-group">
                  <div class="form-group">
                    <textarea
                      class="form-control"
                      rows="8"
                      placeholder="Operational Capacity not working"
                      id="name"
                      required
                      name="detailText"
                      data-validation-required-message="Please enter your name"
                    ></textarea>
                  </div>
                </div>
                <div id="success"></div>
                <br />

                <button type="submit" class="btn btn-primary pull-right">
                  Save
                </button>
                <br />
              </form>
            </div>
          </div>
        </section>
        {/* Testimonials Section */}
        <section id="testimonials" class="wow fadeInUp">
          <div class="container">
            <div class="section-header" text="Testimonial">
              <h2>Testimonials Text</h2>
              <form name="sentMessage" class="well" id="contactForm">
                <div class="control-group">
                  <div class="form-group">
                    <textarea
                      class="form-control"
                      rows="8"
                      placeholder="About Clients"
                      id="name"
                      required
                      name="detailText"
                    ></textarea>
                  </div>
                </div>
                <div id="success"></div>
                <br />

                <button type="submit" class="btn btn-primary pull-right">
                  Save
                </button>
                <br />
              </form>
            </div>
          </div>

          <div class="owl-carousel testimonials-carousel">
            {Testimoies.length > 0 ? (
              Testimoies.map((val, index) => (
                <div class="testimonial-item" text="testomony Testimonies">
                  <p text="testomony.detailText" key={val.id}>
                    {val.detailTexts}
                  </p>
                  <h3 text="testomony.FirstName + testomony.LastName">
                    {val.FirstName} {val.LastName}
                  </h3>
                  <h4>{val.Authoritys}</h4>
                  <h4>{val.Organazations}</h4>
                  <br />
                  <input
                    type="hidden"
                    name="testomonyId"
                    value="testomony.Id"
                  />
                  <button
                    type="submit"
                    class="btn btn-primary "
                    onClick={() => DeleteTestimonies(val.id)}
                  >
                    Delete
                  </button>
                  <br /> <br />
                  <input
                    type="hidden"
                    name="testomonyId"
                    value="testomony.Id"
                  />
                  <Link to={`/one/testmonial/${val.id}`}>
                    <button type="submit" class="btn btn-primary">
                      Edit
                    </button>
                  </Link>
                </div>
              ))
            ) : (
              <p className="container">Insert testomony</p>
            )}
          </div>
        </section>
        <section id="contact" class="wow fadeInUp">
          <div class="container">
            <div class="row contact-info">
              <div class="col-lg-5"></div>
              <div class="col-lg-7">
                <div class="container">
                  <div class="section-header" text="clientText">
                    <h2>Add or Edit Testimony</h2>
                  </div>
                  <div class="form">
                    <form
                      name="sentMessage"
                      class="well"
                      id="contactForm"
                      method="POST"
                    >
                      <div class="control-group">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Frist Name"
                            id="name"
                            required
                            name="FirstName"
                            onChange={getFirstName}
                            value={fnames}
                            data-validation-required-message="Please enter your name"
                          />
                        </div>
                      </div>
                      <div class="control-group">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Last Name"
                            id="name"
                            required
                            name="LastName"
                            onChange={getLastName}
                            value={lnames}
                            data-validation-required-message="Please enter your name"
                          />
                        </div>
                      </div>
                      <div class="control-group">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Authority"
                            id="name"
                            required
                            name="Authoritys"
                            onChange={getAuthoritys}
                            value={Authoritys}
                            data-validation-required-message="Please enter your name"
                          />
                        </div>
                      </div>
                      <div class="control-group">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Organization"
                            id="name"
                            required
                            name="Organazations"
                            onChange={getOrganazations}
                            value={Organazations}
                            data-validation-required-message="Organization"
                          />{" "}
                        </div>
                      </div>
                      <div class="control-group">
                        <div class="form-group">
                          <textarea
                            class="form-control"
                            rows="8"
                            placeholder="Testimonial Text"
                            id="name"
                            required
                            name="detailTexts"
                            onChange={getdetailTexts}
                            value={detailTexts}
                            data-validation-required-message="Please enter your name"
                          ></textarea>
                        </div>
                      </div>

                      <div id="text-danger">{testimonyErr}</div>
                      <br />

                      <button
                        type="submit"
                        class="btn btn-primary pull-right"
                        onClick={SubmittTestimony}
                      >
                        Add
                      </button>

                      <br />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EditAbout;
