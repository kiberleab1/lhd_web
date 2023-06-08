import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Axios from "axios";
const EditTestimones = () => {
  const push = useNavigate();
  var inputRef = useRef(null);

  const { id } = useParams();
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
  const getImg = (e) => {
    if (e.target.files[0] == null) {
      setimg(photo);
    } else {
      setimg(e.target.files[0]);
    }
  };

  useEffect(() => {
    const getFile = (id) => {
      Axios.get(`http://localhost:1111/Admin/select/one/${id}`, {
        withCredentials: true,
      }).then((response) => {
        setFname(response.data.fristName);
        setLname(response.data.lastName);
        setAuthority(response.data.authority);
        setQualification(response.data.qualification);
        setFacebook(response.data.facebook);
        setTwiter(response.data.twiter);
        setGooglePlus(response.data.googlePlus);
        setLinkdon(response.data.linkdon);
        setimg(response.data.imgPath);
      });
    };
    getFile(id);
  }, [id]);
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

    Axios.put(`http://localhost:1111/Admin/editTeam/${id}`, formData, {
      withCredentials: true,
    }).then((response) => {
      if (response.data.msg === "TEAM updated") {
        setTeamerr(false);
        return push("/Admin/editAbout");
      } else {
        setTeamerr(response.data);
      }
    });
  };

  return (
    <div>
      <section id="contact" className="wow fadeInUp">
        <div className="container">
          <div className="row contact-info">
            <div className="col-lg-5"></div>
            <div className="col-lg-7">
              <div className="container">
                <div className="form">
                  <form className="well" id="contactForm">
                    {/* <input type="hidden" name="Id" th:value="*{Id}" /> */}
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
                          data-validation-required-message="Please enter your name"
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
                          data-validation-required-message="Please enter your name"
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
                          data-validation-required-message="Please enter your name"
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
                          data-validation-required-message="Please enter your name"
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
                          data-validation-required-message="Please enter your name"
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
                          data-validation-required-message="Please enter your name"
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
                          data-validation-required-message="Please enter your name"
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
                          data-validation-required-message="Please enter your name"
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
                          //   value={photo}
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
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default EditTestimones;
