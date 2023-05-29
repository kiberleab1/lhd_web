import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import Footer from "../../Footer/Footer";

const EditClient = () => {
  const inputRef = useRef(null);
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
    setImg(e.target.files[0]);
  };
  const sumbittClint = (e) => {
    e.preventDefault();
    let formData = new FormData();

    formData.append("name", name);
    formData.append("country", country);
    formData.append("type", type);
    formData.append("link", link);
    formData.append("img", img);

    Axios.post("http://localhost:1111/registeringClints", formData, {
      withCredentials: true,
    }).then((response) => {
      console.log(response.data);
      if (response.data.msg == "POSTED") {
        setErr(false);
        setName("");
        setCountry("");
        setType("");
        setLink("");
        inputRef.current.value = null;
        // return window.location.reload();
      } else {
        setErr(response.data);
      }
    });
  };
  //gov
  const [gov, setGov] = useState([]);
  useEffect(() => {
    Axios.get(`http://localhost:1111/gov/client`, {
      withCredentials: true,
    }).then((response) => {
      setGov(response.data);
    });
  }, []);
  //nongov
  const [nongov, setNongov] = useState([]);
  useEffect(() => {
    Axios.get(`http://localhost:1111/nongov/client`, {
      withCredentials: true,
    }).then((response) => {
      setNongov(response.data);
    });
  }, []);
  //un
  const [un, setUn] = useState([]);
  useEffect(() => {
    Axios.get(`http://localhost:1111/un/clint`, {
      withCredentials: true,
    }).then((response) => {
      setUn(response.data);
    });
  }, []);
  //img
  const [cliImg, setcliImg] = useState([]);
  useEffect(() => {
    Axios.get(`http://localhost:1111/all/clients`, {
      withCredentials: true,
    }).then((response) => {
      setcliImg(response.data);
    });
  }, []);
  const DeleteClients = (vall) => {
    Axios.delete(`http://localhost:1111/Admin/editClient/delete/${vall}`, {
      withCredentials: true,
    }).then((response) => {
      if (response.data.msg == "Client DELETED") {
        //my-adv/128
        window.location.reload();
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
          <div class="row">
            <div class="col-3">
              <div class="list-group" id="list-tab" role="tablist">
                <a
                  class="list-group-item list-group-item-action active"
                  id="list-home-list"
                  data-toggle="list"
                  href="#list-home"
                  role="tab"
                  aria-controls="home"
                >
                  UN Agencies
                </a>{" "}
                <a
                  class="list-group-item list-group-item-action"
                  id="list-profile-list"
                  data-toggle="list"
                  href="#list-profile"
                  role="tab"
                  aria-controls="profile"
                >
                  Govermental Organizations{" "}
                </a>
                <a
                  class="list-group-item list-group-item-action"
                  id="list-messages-list"
                  data-toggle="list"
                  href="#list-messages"
                  role="tab"
                  aria-controls="messages"
                >
                  Non-Govermental Organazations
                </a>
              </div>
            </div>
            <div class="col-8">
              <div class="tab-content" id="nav-tabContent">
                <div
                  // class="tab-pane fade show active"
                  id="list-home"
                  role="tabpanel"
                  aria-labelledby="list-home-list"
                >
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Organization</th>
                        <th scope="col">Delete</th>
                        <th scope="col">Edit</th>
                      </tr>
                    </thead>
                    <tbody>
                      {nongov.length > 0 ? (
                        nongov.map((val, index) => (
                          <tr text="unClients">
                            <td></td>
                            <td>{val.name}</td>
                            <td>
                              <button
                                type="submit"
                                class="btn btn-primary "
                                onClick={() => DeleteClients(val.id)}
                              >
                                Delete
                              </button>
                              <br />
                            </td>
                            <td>
                              <Link to={`/edit/clints/${val.id}`}>
                                {" "}
                                <button type="submit" class="btn btn-primary">
                                  Edit
                                </button>
                              </Link>

                              <br />
                            </td>
                          </tr>
                        ))
                      ) : (
                        <h4>No gov clients</h4>
                      )}
                    </tbody>
                  </table>
                </div>
                <div
                  // class="tab-pane fade"
                  id="list-profile"
                  role="tabpanel"
                  aria-labelledby="list-profile-list"
                >
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Organization</th>
                        <th scope="col">Delete</th>
                        <th scope="col">Edit</th>
                      </tr>
                    </thead>
                    <tbody>
                      {gov.length > 0 ? (
                        gov.map((val, index) => (
                          <tr text="govClients">
                            <td
                            //   scope="row"
                            ></td>

                            <td>{val.name}</td>
                            <td>
                              <button
                                type="submit"
                                class="btn btn-primary "
                                onClick={() => DeleteClients(val.id)}
                              >
                                Delete
                              </button>
                              <br />
                            </td>
                            <td>
                              <Link to={`/edit/clints/${val.id}`}>
                                {" "}
                                <button type="submit" class="btn btn-primary">
                                  Edit
                                </button>
                              </Link>
                              <br />
                            </td>
                          </tr>
                        ))
                      ) : (
                        <h4>No gov clients</h4>
                      )}
                    </tbody>
                  </table>
                </div>
                <div
                  // class="tab-pane fade"
                  id="list-messages"
                  role="tabpanel"
                  aria-labelledby="list-messages-list"
                >
                  <div>
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Organization</th>
                          <th scope="col">Delete</th>
                          <th scope="col">Edit</th>
                        </tr>
                      </thead>
                      <tbody>
                        {un.length > 0 ? (
                          un.map((val, index) => (
                            <tr text="unClients">
                              <td></td>
                              <td>{val.name}</td>
                              <td>
                                <button
                                  type="submit"
                                  class="btn btn-primary "
                                  onClick={() => DeleteClients(val.id)}
                                >
                                  Delete
                                </button>
                                <br />
                              </td>
                              <td>
                                <Link to={`/edit/clints/${val.id}`}>
                                  {" "}
                                  <button type="submit" class="btn btn-primary">
                                    Edit
                                  </button>
                                </Link>
                                <br />
                              </td>
                            </tr>
                          ))
                        ) : (
                          <h4>No UN clients</h4>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
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

            <div class="row justify-content-end">
              <div>
                <section id="clients" class="wow fadeInUp col-9">
                  <div class="container">
                    <div
                      class="section-header"
                      //   th:object="${clientText}"
                    >
                      <h2>Client Text</h2>
                      <form
                        name="sentMessage"
                        class="well"
                        id="contactForm"
                        method="POST"
                        row="8"
                      >
                        <div class="control-group">
                          <div class="form-group">
                            <textarea
                              class="form-control"
                              rows="8"
                              placeholder="About Clients"
                              id="name"
                              required
                              name="detailText"
                            ></textarea>
                          </div>
                        </div>
                        <div id="success"></div>
                        <br />

                        <button
                          type="submit"
                          class="btn btn-primary pull-right"
                        >
                          Save
                        </button>
                        <br />
                      </form>
                    </div>
                  </div>
                  <div class="owl-carousel clients-carousel">
                    {cliImg.length > 0 ? (
                      cliImg.map((val, index) => (
                        <Link text="client" target="_blank" to={`${val.link}`}>
                          <img
                            src={require(`../../../../../server/uploads/${val.imgPath}`)}
                            alt="client.imgPath"
                          />
                        </Link>
                      ))
                    ) : (
                      <h4>no client image</h4>
                    )}
                  </div>
                </section>
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
