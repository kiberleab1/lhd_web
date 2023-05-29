import React, { useState, useRef, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Axios from "axios";
import Footer from "../../Footer/Footer";

const EditClient = () => {
  const { id } = useParams();
  const inputRef = useRef(null);
  const push = useNavigate();
  const [data, setData] = useState([]);
  const [err, setErr] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [link, setLink] = useState("");
  const [country, setCountry] = useState("");
  const [img, setImg] = useState("");
  const getName = (e) => {
    setName(e.target.value);
  };
  const getCountry = (e) => {
    setCountry(e.target.value);
  };
  const getType = (e) => {
    setType(e.target.value);
  };
  const getLink = (e) => {
    setLink(e.target.value);
  };
  const getImg = (e) => {
    if (e.target.files[0] == null) {
      setImg(img);
    } else {
      setImg(e.target.files[0]);
    }
  };

  useEffect(() => {
    Axios.get(`http://localhost:1111/select/${id}`, {
      withCredentials: true,
    }).then((response) => {
      setName(response.data.name);
      setCountry(response.data.country);
      setType(response.data.type);
      setLink(response.data.link);
      setImg(response.data.imgPath);
    });
  }, []);
  const sumbittClint = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("name", name);
    formData.append("country", country);
    formData.append("type", type);
    formData.append("link", link);
    formData.append("img", img);

    Axios.put(`http://localhost:1111/Admin/editClient/edit/${id}`, formData, {
      withCredentials: true,
    }).then((response) => {
      if (response.data.msg == "POSTED") {
        // setErr(false);
        // setName("");
        // setCountry("");
        // setType("");
        // setLink("");
        // inputRef.current.value = null;
        return push("/Admin/editClient");
        // return window.location.reload();
      } else {
        setErr(response.data);
      }
    });
  };
  return (
    <div>
      <section id="innerBanner">
        <div class="inner-content">
          <h2>
            <span>Add or Edit Clients </span>
            <br />
            Striving for Excellence &amp; Lasting Change!!
          </h2>
          <div></div>
        </div>
      </section>
      <main id="main">
        <section id="contact" class="wow fadeInUp">
          <div class="container">
            <div class="row contact-info">
              <div class="col-lg-5"></div>
              <div class="col-lg-7">
                <div class="container">
                  <div class="form">
                    <form name="sentMessage" class="well" id="contactForm">
                      <div class="control-group">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Organization Name"
                            id="name"
                            required
                            name="name"
                            onChange={getName}
                            value={name}
                          />
                        </div>
                      </div>
                      <div class="control-group">
                        <div class="form-group">
                          <input
                            name="country"
                            class="form-control selectpicker countrypicker"
                            placeholder="Country name"
                            data-default="Ethiopia"
                            data-flag="true"
                            onChange={getCountry}
                            value={country}
                          />
                        </div>
                      </div>
                      <div class="control-group">
                        <div class="form-group">
                          <select
                            name="type"
                            class="selectpicker form-control"
                            onChange={getType}
                            value={type}
                          >
                            <option value="un">UN Agency</option>
                            <option value="gov">
                              Govermental Organization
                            </option>
                            <option value="nongov">
                              Non Govermental organization
                            </option>
                          </select>
                        </div>
                      </div>
                      <div class="control-group">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="link to Organazation"
                            id="name"
                            required
                            name="link"
                            onChange={getLink}
                            value={link}
                          />
                        </div>
                      </div>
                      <div class="control-group">
                        <div class="form-group">
                          <input
                            type="file"
                            name="img"
                            class="form-control"
                            placeholder="logo"
                            // value="Logo"
                            id="img"
                            required
                            onChange={getImg}
                            ref={inputRef}
                          />
                        </div>
                      </div>

                      <div id="success">{err}</div>
                      <br />

                      <button
                        type="submit"
                        class="btn btn-primary pull-right"
                        onClick={sumbittClint}
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

export default EditClient;
