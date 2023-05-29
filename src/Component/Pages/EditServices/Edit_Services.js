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
      if (response.data.msg == "Service POSTED") {
        setErr(false);
        setServiceName("");
        setDetailText("");
        inputRef.current.value = null;
        // return window.location.reload();
      } else {
        setErr(response.data);
      }
    });
  };
  const DeleteService = (val) => {
    Axios.delete(`http://localhost:1111/Admin/deleteService/${val}`, {
      withCredentials: true,
    }).then((response) => {
      if (response.data.msg == "deleted service") {
        //my-adv/128
        window.location.reload();
      }
    });
  };
  useEffect(() => {
    Axios.get(`http://localhost:1111/all/service`, {
      withCredentials: true,
    }).then((response) => {
      console.log(response.data);
      setAllService(response.data);
    });
  }, []);

  return (
    <div>
      <section id="innerBanner">
        <div class="inner-content">
          <h2>
            <span>Add Or Edit Services</span> <br />
            Striving for Excellence and Lasting Change!
          </h2>
          <div></div>
        </div>
      </section>
      <main id="main">
        <section id="services">
          <div class="container">
            <div class="row">
              <div class="container">
                <div class="section-header">
                  <h2>Our Service</h2>
                  <form class="well" id="contactForm" row="8">
                    <div class="control-group">
                      <div class="form-group">
                        <textarea
                          class="form-control"
                          rows="8"
                          placeholder="Operational Capacity"
                          id="name"
                          required
                          name="detailText"
                        ></textarea>
                      </div>
                    </div>
                    <div id="success"></div>
                    <br />
                    {/* <!-- For success/fail messages --> */}
                    <button type="submit" class="btn btn-primary pull-right">
                      Save
                    </button>
                    <br />
                  </form>
                </div>
              </div>
            </div>

            <div class="row">
              {all.length > 0 ? (
                all.map((val, index) => (
                  <div
                    class="col-lg-4"
                    // <!-- th:each="service :${services}" -->
                  >
                    <div class="box wow fadeInLeft">
                      <div class="icon">
                        <BsBriefcase />
                      </div>
                      <h4 class="title">
                        <Link to="/lhd/services/+''+service.serviceName">
                          {val.serviceName}
                        </Link>
                      </h4>

                      <div class="description">{val.detailText}</div>
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
                        class="btn btn-primary "
                        onClick={() => DeleteService(val.id)}
                      >
                        Delete
                      </button>
                      <br />

                      <br />

                      <Link to={`/edit/service/${val.id}`}>
                        {" "}
                        <button type="submit" class="btn btn-primary">
                          Edit
                        </button>
                      </Link>

                      <br />
                    </div>
                  </div>
                ))
              ) : (
                <>Insert Service</>
              )}
            </div>
          </div>
        </section>

        <section id="contact" class="wow fadeInUp">
          <div class="container">
            <div class="row contact-info">
              <div class="col-lg-5"></div>
              <div class="col-lg-7">
                <div class="container">
                  <div class="form">
                    {/* <!-- Form itself --> */}
                    <form class="well" id="contactForm">
                      <div class="control-group">
                        <div class="form-group">
                          <input
                            type="file"
                            name="img"
                            class="form-control"
                            placeholder="logo"
                            id="img"
                            onChange={getimg}
                            ref={inputRef}
                            required
                          />
                        </div>
                      </div>
                      <div class="control-group">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Service Name"
                            id="name"
                            required
                            name="serviceName"
                            onChange={getserviceName}
                            value={serviceName}
                          />
                        </div>
                      </div>
                      <div class="control-group">
                        <div class="form-group">
                          <textarea
                            class="form-control"
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
                        class="btn btn-primary pull-right"
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
