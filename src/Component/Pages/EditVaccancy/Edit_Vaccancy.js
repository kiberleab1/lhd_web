import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

const Edit_Vaccancy = () => {
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

    Axios.post("http://localhost:1111/lhd/Add_Vaccancy", formData, {
      withCredentials: true,
    }).then((response) => {
      console.log(response.data);
      if (response.data.msg == "Vaccancy posted") {
        setErr(false);
        settitle("");
        setresponsblities("");
        setQualification("");
        setposition("");
        setconditions("");
        setdeadline("");

        // return window.location.reload();
      } else {
        setErr(response.data);
      }
    });
  };
  const [Vacc, setVacc] = useState([]);
  useEffect(() => {
    Axios.get(`http://localhost:1111/vaccancy/getall`, {
      withCredentials: true,
    }).then((response) => {
      setVacc(response.data);
    });
  }, []);
  const DeleteVacc = (delId) => {
    Axios.delete(`http://localhost:1111/Admin/deleteVaccancy/${delId}`, {
      withCredentials: true,
    }).then((response) => {
      if (response.data.msg == "Vacc DELETED") {
        window.location.reload();
      }
    });
  };
  return (
    <div>
      <section id="innerBanner">
        <div class="inner-content">
          <h2>
            <span>Add or Edit Vaccancy </span>
            <br />
            Striving for Excellence &amp; Lasting Change!!
          </h2>
          <div></div>
        </div>
      </section>
      <main id="main">
        <section id="contact" class="wow fadeInUp">
          {Vacc.length > 0 ? (
            Vacc.map((val, index) => (
              <div
              //   th:each="vacc : ${vaccancys}"
              >
                <h4 class="col-md-4 offset-md-2">TITLE:</h4>

                <p class="col-md-4 offset-md-3 text-dark">{val.title}</p>
                <h4 class="col-md-4 offset-md-2">MAJOR RESPONSIBILITIES:</h4>
                <p class="col-md-4 offset-md-3 text-dark">
                  {val.responsblities}
                </p>
                <h4 class="col-md-4 offset-md-2">POSTION:</h4>
                <p class="col-md-4 offset-md-3 text-dark">{val.position}</p>

                {/* <div id="demo" class="collapse"> */}
                <h4 class="col-md-4 offset-md-2">QUALIFICATION:</h4>
                <p class="col-md-4 offset-md-3 text-dark">
                  {val.Qualification}
                </p>
                <h4 class="col-md-4 offset-md-2">Conditions:</h4>
                <p class="col-md-4 offset-md-3 text-dark">{val.conditions}</p>
                <h4 class="col-md-4 offset-md-2">DeadLine:</h4>
                <p class="col-md-4 offset-md-3 text-dark">{val.deadline}</p>
                <h4 class="col-md-4 offset-md-2">Still on:</h4>
                <p class="col-md-4 offset-md-3 text-dark">{val.isOn}</p>
                {/* </div> */}
                <a
                  class="col-md-4 offset-md-4"
                  ass="btn btn-info"
                  data-toggle="collapse"
                  data-target="#demo"
                >
                  See More
                </a>

                <div class="col-md-4 offset-md-3" name="sentMessage">
                  <button
                    type="submit"
                    class="btn btn-primary "
                    onClick={() => DeleteVacc(val.id)}
                  >
                    Delete
                  </button>
                  <br />
                  <br />
                </div>
                <div class="col-md-4 offset-md-3">
                  <Link to={`/vacc/editv/${val.id}`}>
                    <button type="submit" class="btn btn-primary">
                      Edit
                    </button>
                  </Link>

                  <br />
                </div>
              </div>
            ))
          ) : (
            <h4>No Vacancy</h4>
          )}
        </section>
        <section id="contact" class="wow fadeInUp">
          <div class="container">
            <div class="row contact-info">
              <div class="col-lg-5"></div>
              <div class="col-lg-7">
                <div class="container">
                  <div class="form">
                    <form name="sentMessage" class="well" id="contactForm">
                      <input type="hidden" name="Id" value="Id" />
                      <div class="control-group">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Title"
                            id="name"
                            required
                            name="title"
                            onChange={getTitle}
                            value={title}
                          />
                        </div>
                      </div>
                      <div class="control-group">
                        <div class="form-group">
                          <textarea
                            class="form-control"
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
                      <div class="control-group">
                        <div class="form-group">
                          <textarea
                            class="form-control"
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
                      <div class="control-group">
                        <div class="form-group">
                          <textarea
                            class="form-control"
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
                      <div class="control-group">
                        <div class="form-group">
                          <textarea
                            class="form-control"
                            rows="8"
                            placeholder="Conditions"
                            id="name"
                            required
                            name="conditions"
                            onChange={getConditions}
                            value={conditions}
                          ></textarea>
                          {/* <span class="text-danger"
                                                    th:if="${#fields.hasErrors('conditions')}"
                                                    th:errors="*{conditions}">Last Name Error </span> */}
                        </div>
                      </div>

                      <div class="col-sm-6 form-group">
                        <label for="">Dead Line</label>
                        <div>
                          <input
                            type="text"
                            name="deadline"
                            class="form-control"
                            id="departure_date"
                            onChange={getDeadline}
                            value={deadline}
                          />
                        </div>
                      </div>
                    </form>
                  </div>

                  <div className="text-danger">{err}</div>
                  <br />

                  <button
                    type="submit"
                    class="btn btn-primary pull-right"
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
