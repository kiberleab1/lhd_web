import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Axios from "axios";
const EditService = () => {
  const push = useNavigate();
  const { id } = useParams();
  const inputRef = useRef(null);
  // const [all, setAllService] = useState([]);
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
    if (e.target.files[0] == null) {
      setImg(img);
    } else {
      setImg(e.target.files[0]);
    }
  };
  const submittService = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("serviceName", serviceName);
    formData.append("detailText", detailText);
    formData.append("img", img);
    Axios.put(`http://localhost:1111/Admin/editService/${id}`, formData, {
      withCredentials: true,
    }).then((response) => {
      if (response.data.msg === "Service Updated") {
        setErr(false);
        setServiceName("");
        setDetailText("");
        inputRef.current.value = null;
        return push("/Admin/editService");
      } else {
        setErr(response.data);
      }
    });
  };
  useEffect(() => {
    console.log(id);
    Axios.get(`http://localhost:1111/one/service/${id}`, {
      withCredentials: true,
    }).then((response) => {
      console.log(response.data);
      setErr(false);
      setServiceName(response.data.serviceName);
      setDetailText(response.data.detailText);
      setImg(response.data.svgImgPath);
    });
  }, [id]);

  return (
    <div>
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
      <Footer />
    </div>
  );
};

export default EditService;
