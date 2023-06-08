import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
const AddTestimonialText = () => {
  const [Testimoies, setTestimoies] = useState([]);

  const [testimonyErr, settestimonyErr] = useState("");
  const [fnames, setfnames] = useState("");
  const [lnames, setlnames] = useState("");
  const [Authoritys, setAuthoritys] = useState("");
  const [Organazations, setOrganazations] = useState("");
  const [detailTexts, setdetailTexts] = useState("");
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
        settestimonyErr(false);
        setfnames("");
        setlnames("");
        setAuthoritys("");
        setOrganazations("");
        setdetailTexts("");

        setTestimoies([
          ...Testimoies,
          {
            FirstName: fnames,
            LastName: lnames,
            Authoritys: Authoritys,
            Organazations: Organazations,
            detailTexts: detailTexts,
          },
        ]);
      } else {
        settestimonyErr(response.data);
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
  const DeleteTestimonies = (delId) => {
    Axios.delete(`http://localhost:1111/Admin/deleteTestmony/${delId}`, {
      withCredentials: true,
    }).then((response) => {
      if (response.data.msg === "Testimonies DELETED") {
        window.location.reload();
      }
    });
  };
  return (
    <>
      <section id="testimonials" className="wow fadeInUp">
        <div className="container"></div>

        <div className="owl-carousel testimonials-carousel">
          {Testimoies.length > 0 ? (
            Testimoies.map((val, index) => (
              <div className="testimonial-item" text="testomony Testimonies">
                <p text="testomony.detailText" key={val.id}>
                  {val.detailTexts}
                </p>
                <h3 text="testomony.FirstName + testomony.LastName">
                  {val.FirstName} {val.LastName}
                </h3>
                <h4>{val.Authoritys}</h4>
                <h4>{val.Organazations}</h4>
                <br />
                <input type="hidden" name="testomonyId" value="testomony.Id" />
                <button
                  type="submit"
                  className="btn btn-primary "
                  onClick={() => DeleteTestimonies(val.id)}
                >
                  Delete
                </button>
                <br /> <br />
                <input type="hidden" name="testomonyId" value="testomony.Id" />
                <Link to={`/one/testmonial/${val.id}`}>
                  <button type="submit" className="btn btn-primary">
                    Edit
                  </button>
                </Link>
              </div>
            ))
          ) : (
            <p classNameName="container">Insert testomony</p>
          )}
        </div>
      </section>
      <section id="contact" className="wow fadeInUp">
        <div className="container">
          <div className="row contact-info">
            <div className="col-lg-5"></div>
            <div className="col-lg-7">
              <div className="container">
                <div className="section-header" text="clientText">
                  <h2>Add or Edit Testimony</h2>
                </div>
                <div className="container">
                  <div className="section-header" text="clientText">
                    {/* <h2>Add or Edit Testimony</h2> */}
                  </div>
                  <div className="form">
                    <form
                      name="sentMessage"
                      className="well"
                      id="contactForm"
                      method="POST"
                    >
                      <div className="control-group">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
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
                      <div className="control-group">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
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
                      <div className="control-group">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
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
                      <div className="control-group">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
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
                      <div className="control-group">
                        <div className="form-group">
                          <textarea
                            className="form-control"
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
                        className="btn btn-primary pull-right"
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
        </div>
      </section>
    </>
  );
};

export default AddTestimonialText;
