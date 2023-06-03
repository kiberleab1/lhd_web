import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Axios from "axios";
const EditTestimones = () => {
  const push = useNavigate();
  const { id } = useParams();
  const [fnames, setfnames] = useState("");
  const [lnames, setlnames] = useState("");
  const [Authoritys, setAuthoritys] = useState("");
  const [Organazations, setOrganazations] = useState("");
  const [detailTexts, setdetailTexts] = useState("");
  const [testimonyErr, setTestmonyerr] = useState("");
  // const [Testimoies, setTestimoies] = useState([]);
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

  useEffect(() => {
    const getFile = (id) => {
      Axios.get(`http://localhost:1111/one/testmonial/${id}`, {
        withCredentials: true,
      }).then((response) => {
        // console.log(response.data.id);
        setfnames(response.data.FirstName);
        setlnames(response.data.LastName);
        setAuthoritys(response.data.Organazations);
        setOrganazations(response.data.Authoritys);
        setdetailTexts(response.data.detailTexts);
      });
    };
    getFile(id);
  }, [id]);
  const SubmittTestimony = (e) => {
    e.preventDefault();
    let formData = new FormData();

    formData.append("FirstName", fnames);
    formData.append("LastName", lnames);
    formData.append("Authoritys", Authoritys);
    formData.append("Organazations", Organazations);
    formData.append("detailTexts", detailTexts);

    Axios.put(
      `http://localhost:1111/Admin/editTestmonialText/${id}`,
      formData,
      {
        withCredentials: true,
      }
    ).then((response) => {
      if (response.data.msg === "Testimonies updated") {
        setTestmonyerr(false);
        setfnames("");
        setlnames("");
        setAuthoritys("");
        setOrganazations("");
        setdetailTexts("");
        return push("/Admin/editAbout");
      } else {
        setTestmonyerr(response.data);
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
                <div className="section-header" text="clientText">
                  <h2>Add or Edit Testimony</h2>
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
      </section>
      <Footer />
    </div>
  );
};

export default EditTestimones;
