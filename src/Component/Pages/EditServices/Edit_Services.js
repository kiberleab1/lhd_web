import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsBriefcase } from "react-icons/bs";
import Axios from "axios";
const Edit_Services = () => {
  const inputRef = useRef(null);
  const [all, setAllService] = useState([]);
  const [serviceName, setServiceName] = useState("");
  const [detailText, setDetailText] = useState("");
  const [img, setImg] = useState("");
  const [err, setErr] = useState("");
  const getserviceName = (e) => {
    setServiceName(e.target.value);
  };
  const getdetailText = (e) => {
    setDetailText(e.target.value);
  };
  const getimg = (e) => {
    setImg(e.target.files[0]);
  };
  const submittService = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("serviceName", serviceName);
    formData.append("detailText", detailText);
    formData.append("img", img);
    Axios.post("http://localhost:1111/lhd/Service", formData, {
      withCredentials: true,
    }).then((response) => {
      if (response.data.msg === "Service POSTED") {
        setErr(false);
        setServiceName("");
        setDetailText("");
        inputRef.current.value = null;
        setAllService([
          ...all,
          { serviceName: serviceName, detailText: detailText },
        ]);
      } else {
        setErr(response.data);
      }
    });
  };
  const DeleteService = (val) => {
    Axios.delete(`http://localhost:1111/Admin/deleteService/${val}`, {
      withCredentials: true,
    }).then((response) => {
      if (response.data.msg === "deleted service") {
        //my-adv/128
        window.location.reload();
      }
    });
  };
  useEffect(() => {
    Axios.get(`http://localhost:1111/all/service`, {
      withCredentials: true,
    }).then((response) => {
      setAllService(response.data);
    });
  }, []);
  const [service, setservice] = useState("");
  const [serErr, setserErr] = useState("");
  const getService = (e) => {
    setservice(e.target.value);
  };
  const submitservice = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("detailText", service);
    formData.append("page", "Service");
    formData.append("type", "");
    Axios.post(
      "http://localhost:1111/Admin/editAbout/saveOthersText",
      formData,
      {
        withCredentials: true,
      }
    ).then((response) => {
      if (response.data.msg === "OtherTexts POSTED") {
        setserErr(false);
        setservice("");
      } else {
        setserErr(response.data);
      }
    });
  };
  return (
    <div>
      <section id="innerBanner">
        <div className="inner-content">
          <h2>
            <span>Add Or Edit Services</span> <br />
            Striving for Excellence and Lasting Change!
          </h2>
          <div></div>
        </div>
      </section>
      <main id="main">
        <section id="services">
          <div className="container">
            <div className="row">
              <div className="container">
                <div className="section-header">
                  <h2>Our Service</h2>
                  <form className="well" id="contactForm" row="8">
                    <div className="control-group">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          rows="8"
                          placeholder="Operational Capacity"
                          id="name"
                          required
                          name="detailText"
                          onChange={getService}
                          value={service}
                        ></textarea>
                      </div>
                    </div>
                    <div id="success">{serErr}</div>
                    <br />
                    {/* <!-- For success/fail messages --> */}
                    <button
                      type="submit"
                      onClick={submitservice}
                      className="btn btn-primary pull-right"
                    >
                      Save
                    </button>
                    <br />
                  </form>
                </div>
              </div>
            </div>

            <div className="row">
              {all.length > 0 ? (
                all.map((val, index) => (
                  <div
                    className="col-lg-4"
                    // <!-- th:each="service :${services}" -->
                  >
                    <div className="box wow fadeInLeft">
                      <div className="icon">
                        <BsBriefcase />
                      </div>
                      <h4 className="title">
                        <Link to="/lhd/services/+''+service.serviceName">
                          {val.serviceName}
                        </Link>
                      </h4>

                      <div className="description">{val.detailText}</div>
                      <div></div>
                    </div>

                    <div>
                      <input
                        type="hidden"
                        name="serviceId"
                        value="service.Id"
                      />
                      <button
                        type="submit"
                        className="btn btn-primary "
                        onClick={() => DeleteService(val.id)}
                      >
                        Delete
                      </button>
                      <br />

                      <br />

                      <Link to={`/edit/service/${val.id}`}>
                        {" "}
                        <button type="submit" className="btn btn-primary">
                          Edit
                        </button>
                      </Link>

                      <br />
                    </div>
                  </div>
                ))
              ) : (
                <>Insert New Service</>
              )}
            </div>
          </div>
        </section>

        <section id="contact" className="wow fadeInUp">
          <div className="container">
            <div className="row contact-info">
              <div className="col-lg-5"></div>
              <div className="col-lg-7">
                <div className="container">
                  <div className="form">
                    {/* <!-- Form itself --> */}
                    <form className="well" id="contactForm">
                      <div className="control-group">
                        <div className="form-group">
                          <input
                            type="file"
                            name="img"
                            className="form-control"
                            placeholder="logo"
                            id="img"
                            onChange={getimg}
                            ref={inputRef}
                            required
                          />
                        </div>
                      </div>
                      <div className="control-group">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Service Name"
                            id="name"
                            required
                            name="serviceName"
                            onChange={getserviceName}
                            value={serviceName}
                          />
                        </div>
                      </div>
                      <div className="control-group">
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            rows="8"
                            placeholder="Detail Service"
                            id="name"
                            required
                            name="detailText"
                            onChange={getdetailText}
                            value={detailText}
                          ></textarea>
                        </div>
                      </div>

                      <div id="success">{err}</div>
                      <br />

                      <button
                        type="submit"
                        className="btn btn-primary pull-right"
                        onClick={submittService}
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
    </div>
  );
};

export default Edit_Services;
