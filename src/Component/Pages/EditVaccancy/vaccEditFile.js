import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Axios from "axios";

const Edit_Vaccancy = () => {
  const push = useNavigate();
  const { id } = useParams();
  const [err, setErr] = useState("");
  const [title, settitle] = useState("");
  const [responsblities, setresponsblities] = useState("");
  const [Qualification, setQualification] = useState("");
  const [position, setposition] = useState("");
  const [conditions, setconditions] = useState("");
  const [deadline, setdeadline] = useState("");
  const getTitle = (e) => {
    settitle(e.target.value);
  };
  const getResponsblities = (e) => {
    setresponsblities(e.target.value);
  };
  const getQualification = (e) => {
    setQualification(e.target.value);
  };
  const getPosition = (e) => {
    setposition(e.target.value);
  };
  const getConditions = (e) => {
    setconditions(e.target.value);
  };
  const getDeadline = (e) => {
    setdeadline(e.target.value);
  };
  const submittVaccancy = (e) => {
    e.preventDefault();
    let formData = new FormData();

    formData.append("title", title);
    formData.append("responsblities", responsblities);
    formData.append("Qualification", Qualification);
    formData.append("position", position);
    formData.append("conditions", conditions);
    formData.append("deadline", deadline);

    Axios.put(`http://localhost:1111/Admin/editVaccancy/${id}`, formData, {
      withCredentials: true,
    }).then((response) => {
      console.log(response.data);
      if (response.data.msg === "UPDATED") {
        return push("/Admin/editVaccancy");
        // return window.location.reload();
      } else {
        setErr(response.data);
      }
    });
  };
  useEffect(() => {
    Axios.get(`http://localhost:1111/vcc/${id}`, {
      withCredentials: true,
    }).then((response) => {
      settitle(response.data.title);
      setresponsblities(response.data.responsblities);
      setQualification(response.data.Qualification);
      setconditions(response.data.conditions);
      setposition(response.data.position);
      setdeadline(response.data.deadline);
      setErr("");
    });
  }, [id]);

  return (
    <div>
      <section id="innerBanner">
        <div className="inner-content">
          <h2>
            <span>Add or Edit Vaccancy </span>
            <br />
            Striving for Excellence &amp; Lasting Change!!
          </h2>
          <div></div>
        </div>
      </section>
      <main id="main">
        <section id="contact" className="wow fadeInUp">
          <div className="container">
            <div className="row contact-info">
              <div className="col-lg-5"></div>
              <div className="col-lg-7">
                <div className="container">
                  <div className="form">
                    <form name="sentMessage" className="well" id="contactForm">
                      <input type="hidden" name="Id" value="Id" />
                      <div className="control-group">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            id="name"
                            required
                            name="title"
                            onChange={getTitle}
                            value={title}
                          />
                        </div>
                      </div>
                      <div className="control-group">
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            rows="8"
                            placeholder="Responsblities"
                            id="name"
                            required
                            name="responsblities"
                            onChange={getResponsblities}
                            value={responsblities}
                          ></textarea>
                        </div>
                      </div>
                      <div className="control-group">
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            rows="8"
                            placeholder="Qualifications"
                            id="name"
                            required
                            name="Qualification"
                            onChange={getQualification}
                            value={Qualification}
                          ></textarea>
                        </div>
                      </div>
                      <div className="control-group">
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            rows="8"
                            placeholder="Position"
                            id="name"
                            required
                            name="position"
                            onChange={getPosition}
                            value={position}
                          ></textarea>
                        </div>
                      </div>
                      <div className="control-group">
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            rows="8"
                            placeholder="Conditions"
                            id="name"
                            required
                            name="conditions"
                            onChange={getConditions}
                            value={conditions}
                          ></textarea>
                          {/* <span className="text-danger"
                                                    th:if="${#fields.hasErrors('conditions')}"
                                                    th:errors="*{conditions}">Last Name Error </span> */}
                        </div>
                      </div>

                      <div className="col-sm-6 form-group">
                        <label for="">Dead Line</label>
                        <div>
                          <input
                            type="text"
                            name="deadline"
                            className="form-control"
                            id="departure_date"
                            onChange={getDeadline}
                            value={deadline}
                          />
                        </div>
                      </div>
                    </form>
                  </div>

                  <div classNameName="text-danger">{err}</div>
                  <br />

                  <button
                    type="submit"
                    className="btn btn-primary pull-right"
                    onClick={submittVaccancy}
                  >
                    Post
                  </button>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Edit_Vaccancy;
