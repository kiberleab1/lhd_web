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
      if (response.data.msg === "un") {
        setErr(false);
        setName("");
        setCountry("");
        setType("");
        setLink("");
        inputRef.current.value = null;
        setUn([
          ...un,
          {
            link: link,
            name: name,
            imgPath: img,
            type: type,
            country: country,
          },
        ]);
      } else if (response.data.msg === "gov") {
        setErr(false);
        setName("");
        setCountry("");
        setType("");
        setLink("");
        inputRef.current.value = null;
        setGov([
          ...gov,
          {
            link: link,
            name: name,
            imgPath: img,
            type: type,
            country: country,
          },
        ]);
      } else if (response.data.msg === "nongov") {
        setErr(false);
        setName("");
        setCountry("");
        setType("");
        setLink("");
        inputRef.current.value = null;
        setNongov([
          ...nongov,
          {
            link: link,
            name: name,
            imgPath: img,
            type: type,
            country: country,
          },
        ]);
        setcliImg([...cliImg]);
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
      if (response.data.msg === "Client DELETED") {
        //my-adv/128
        window.location.reload();
      }
    });
  };
  const [clintErr, setclintErr] = useState("");
  const [clintText, setclintText] = useState("");
  const getClintText = (e) => {
    setclintText(e.target.value);
  };
  const submitClientTxt = (e) => {
    e.preventDefault();
    let formData = new FormData();

    formData.append("detailText", clintText);
    formData.append("page", "clients");
    formData.append("type", "");
    Axios.post(
      "http://localhost:1111/Admin/editAbout/saveOthersText",
      formData,
      {
        withCredentials: true,
      }
    ).then((response) => {
      if (response.data.msg === "OtherTexts POSTED") {
        setclintErr(false);
        setclintText("");
      } else {
        setclintErr(response.data);
      }
    });
  };
  return (
    <div>
      <section id="innerBanner">
        <div className="inner-content">
          <h2>
            <span>Add or Edit Clients </span>
            <br />
            Striving for Excellence &amp; Lasting Change!!
          </h2>
          <div></div>
        </div>
      </section>
      <main id="main">
        <section id="contact" className="wow fadeInUp">
          <div className="row">
            <div className="col-3">
              <div className="list-group" id="list-tab" role="tablist">
                <a
                  className="list-group-item list-group-item-action active"
                  id="list-home-list"
                  data-toggle="list"
                  href="#list-home"
                  role="tab"
                  aria-controls="home"
                >
                  UN Agencies
                </a>{" "}
                <a
                  className="list-group-item list-group-item-action"
                  id="list-profile-list"
                  data-toggle="list"
                  href="#list-profile"
                  role="tab"
                  aria-controls="profile"
                >
                  Govermental Organizations{" "}
                </a>
                <a
                  className="list-group-item list-group-item-action"
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
            <div className="col-8">
              <div className="tab-content" id="nav-tabContent">
                <div
                  // className="tab-pane fade show active"
                  id="list-home"
                  role="tabpanel"
                  aria-labelledby="list-home-list"
                >
                  <table className="table table-striped">
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
                                className="btn btn-primary "
                                onClick={() => DeleteClients(val.id)}
                              >
                                Delete
                              </button>
                              <br />
                            </td>
                            <td>
                              <Link to={`/edit/clints/${val.id}`}>
                                {" "}
                                <button
                                  type="submit"
                                  className="btn btn-primary"
                                >
                                  Edit
                                </button>
                              </Link>

                              <br />
                            </td>
                          </tr>
                        ))
                      ) : (
                        <h4>Insert Non-gov clients</h4>
                      )}
                    </tbody>
                  </table>
                </div>
                <div
                  // className="tab-pane fade"
                  id="list-profile"
                  role="tabpanel"
                  aria-labelledby="list-profile-list"
                >
                  <table className="table table-striped">
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
                                className="btn btn-primary "
                                onClick={() => DeleteClients(val.id)}
                              >
                                Delete
                              </button>
                              <br />
                            </td>
                            <td>
                              <Link to={`/edit/clints/${val.id}`}>
                                {" "}
                                <button
                                  type="submit"
                                  className="btn btn-primary"
                                >
                                  Edit
                                </button>
                              </Link>
                              <br />
                            </td>
                          </tr>
                        ))
                      ) : (
                        <h4>Insert gov clients</h4>
                      )}
                    </tbody>
                  </table>
                </div>
                <div
                  // className="tab-pane fade"
                  id="list-messages"
                  role="tabpanel"
                  aria-labelledby="list-messages-list"
                >
                  <div>
                    <table className="table table-striped">
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
                                  className="btn btn-primary "
                                  onClick={() => DeleteClients(val.id)}
                                >
                                  Delete
                                </button>
                                <br />
                              </td>
                              <td>
                                <Link to={`/edit/clints/${val.id}`}>
                                  {" "}
                                  <button
                                    type="submit"
                                    className="btn btn-primary"
                                  >
                                    Edit
                                  </button>
                                </Link>
                                <br />
                              </td>
                            </tr>
                          ))
                        ) : (
                          <h4>Insert UN clients</h4>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
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
                    <form name="sentMessage" className="well" id="contactForm">
                      <div className="control-group">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Organization Name"
                            id="name"
                            required
                            name="name"
                            onChange={getName}
                            value={name}
                          />
                        </div>
                      </div>
                      <div className="control-group">
                        <div className="form-group">
                          <input
                            name="country"
                            className="form-control selectpicker countrypicker"
                            placeholder="Country name"
                            data-default="Ethiopia"
                            data-flag="true"
                            onChange={getCountry}
                            value={country}
                          />
                        </div>
                      </div>
                      <div className="control-group">
                        <div className="form-group">
                          <select
                            name="type"
                            className="selectpicker form-control"
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
                      <div className="control-group">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="link to Organazation"
                            id="name"
                            required
                            name="link"
                            onChange={getLink}
                            value={link}
                          />
                        </div>
                      </div>
                      <div className="control-group">
                        <div className="form-group">
                          <input
                            type="file"
                            name="img"
                            className="form-control"
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
                        className="btn btn-primary pull-right"
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

            <div className="row justify-content-end">
              <div>
                <section id="clients" className="wow fadeInUp col-9">
                  <div className="container">
                    <div
                      className="section-header"
                      //   th:object="${clientText}"
                    >
                      <h2>Client Text</h2>
                      <form
                        name="sentMessage"
                        className="well"
                        id="contactForm"
                        row="8"
                      >
                        <div className="control-group">
                          <div className="form-group">
                            <textarea
                              className="form-control"
                              rows="8"
                              placeholder="About Clients"
                              id="name"
                              required
                              name="detailText"
                              onChange={getClintText}
                              value={clintText}
                            ></textarea>
                          </div>
                        </div>
                        <div id="success">{clintErr}</div>
                        <br />

                        <button
                          onClick={submitClientTxt}
                          type="submit"
                          className="btn btn-primary pull-right"
                        >
                          Save
                        </button>
                        <br />
                      </form>
                    </div>
                  </div>
                  <div className="owl-carousel clients-carousel">
                    {cliImg.length > 0 ? (
                      cliImg.map((val, index) => (
                        <Link text="client" target="_blank" to={`${val.link}`}>
                          <img
                            src={require(`../../../../../lhd_node/uploads/${val.imgPath}`)}
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
