import React, { useState, useEffect, useRef } from "react";

import { Link } from "react-router-dom";
import Axios from "axios";
// team
import { AiFillLinkedin } from "react-icons/ai";
import { ImGooglePlus } from "react-icons/im";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
const TeamMember = () => {
  const inputRef = useRef(null);
  const [team, setTeam] = useState([]);

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
      if (response.data.msg == "ADD") {
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
      } else {
        setTeamerr(response.data);
      }
    });
    setTeam([...team]);
    // {
    //     fristName: Fname,
    //     lastName: Lname,
    //     qualification: Qualification,
    //     authority: Authority,
    //     twiter: Twiter,
    //     facebook: Facebook,
    //     googlePlus: GooglePlus,
    //     linkdon: Linkdon,
    //   },
  };
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
      window.location.reload();
    });
  };
  return (
    <>
      <section id="team" className="wow fadeInUp">
        <div className="container">
          <div className="section-header">
            <h2>Our Team</h2>
          </div>
          {team.length > 0 ? (
            team.map((val, index) => (
              <div className="row" key={index}>
                <div className="col-lg-3 col-md-6" text="teamMember">
                  <div className="member">
                    <>
                      <div className="pic">
                        {/* {require(`../../../../../server/uploads/${val.imgPath}`)} */}
                        <img
                          src={require(`../../../../../server/uploads/${val.imgPath}`)}
                          alt="val.imgPath"
                        />
                      </div>

                      <div className="details" key={val.id}>
                        <h4>
                          {val.fristName} {val.lastName}{" "}
                        </h4>
                        <span> {val.authority}</span>
                        <span> {val.qualification} </span>

                        <div className="social">
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
                    className="btn btn-primary "
                    onClick={() => DeleteTeam(val.id)}
                  >
                    Delete
                  </button>
                  <br /> <br />
                  <Link to={`/Admin/select/one/${val.id}`}>
                    <button type="submit" className="btn btn-primary">
                      Edit
                    </button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="container">Insert team member</p>
          )}
        </div>
      </section>
      <section id="contact" className="wow fadeInUp">
        <div className="container">
          <div className="row contact-info">
            <div className="col-lg-5"></div>
            <div className="col-lg-7">
              <div className="container"></div>
              <div className="form">
                <form className="well" id="contactForm">
                  <div className="control-group">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Frist Name"
                        id="name"
                        required
                        name="fristName"
                        onChange={getFname}
                        value={Fname}
                      />
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                        id="name"
                        required
                        name="lastName"
                        onChange={getLname}
                        value={Lname}
                      />
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Authority"
                        id="name"
                        required
                        name="authority"
                        onChange={getAuthority}
                        value={Authority}
                      />
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Qualification"
                        id="name"
                        required
                        name="qualification"
                        onChange={getQualification}
                        value={Qualification}
                      />
                    </div>
                  </div>

                  <div className="control-group">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Link to facebook  Account"
                        id="name"
                        required
                        name="facebook"
                        onChange={getFacebook}
                        value={Facebook}
                      />
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Link to tewiter  Account"
                        id="name"
                        required
                        name="twiter"
                        onChange={getTwiter}
                        value={Twiter}
                      />
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Link to Google+  Account"
                        id="name"
                        required
                        name="googlePlus"
                        onChange={getGooglePlus}
                        value={GooglePlus}
                      />
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Link to LinkdIn  Account"
                        id="name"
                        required
                        name="linkdon"
                        onChange={getLinkdon}
                        value={Linkdon}
                      />
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="form-group">
                      <input
                        type="file"
                        // Accept="image/*"
                        name="img"
                        className="form-control"
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
                    className="btn btn-primary pull-right"
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
      </section>
    </>
  );
};

export default TeamMember;
