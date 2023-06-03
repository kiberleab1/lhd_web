import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Axios from "axios";
const Experience = () => {
  const [err, setTeamerr] = useState("");
  const [type, setType] = useState("");
  const [detailText, setDetailText] = useState("");
  const [client, setClient] = useState("");
  const [lhd, setLhd] = useState("LHD");
  const getType = (e) => {
    setType(e.target.value);
  };
  const getDetailText = (e) => {
    setDetailText(e.target.value);
  };
  const getClient = (e) => {
    setClient(e.target.value);
  };
  const submittExperince = (e) => {
    e.preventDefault();
    let formData = new FormData();

    formData.append("type", type);
    formData.append("detailText", detailText);
    formData.append("client", client);
    formData.append("firm", lhd);
    Axios.post(`http://localhost:1111/Admin/editExperiance`, formData, {
      withCredentials: true,
    }).then((response) => {
      if (response.data.msg === "Expirence POSTED") {
        setType("");
        setDetailText("");
        setClient("");
        setTeamerr("");
        // return push("/Admin/Home");
      } else {
        setTeamerr(response.data);
      }
    });
  };
  //research
  const [Rtypes, setRtype] = useState("");
  const [titles, setTitle] = useState("");
  const [methodlogys, setmethodlogy] = useState("");
  const [clients, setclient] = useState("");
  const [objectives, setobjective] = useState("");
  const [reerr, setEerr] = useState("");

  const getResearchType = (e) => {
    setRtype(e.target.value);
  };
  const getTitle = (e) => {
    setTitle(e.target.value);
  };
  const getRclient = (e) => {
    setclient(e.target.value);
  };
  const getmethodlogy = (e) => {
    setmethodlogy(e.target.value);
  };
  const getobjective = (e) => {
    setobjective(e.target.value);
  };
  const submittResearch = (e) => {
    e.preventDefault();
    let formData = new FormData();

    formData.append("Rtype", Rtypes);
    formData.append("title", titles);
    formData.append("client", clients);
    formData.append("methodlogy", methodlogys);
    formData.append("objective", objectives);
    Axios.post(`http://localhost:1111/register_research`, formData, {
      withCredentials: true,
    }).then((response) => {
      if (response.data.msg === "Research POSTED") {
        setEerr(false);
        setRtype("");
        setDetailText("");
        setClient("");
        setmethodlogy("");
        setobjective("");
        // return push("/Admin/Home");
      } else {
        setEerr(response.data);
      }
    });
  };
  // Reas
  const [all, setAll] = useState([]);
  useEffect(() => {
    Axios.get(`http://localhost:1111/on/health`, {
      withCredentials: true,
    }).then((response) => {
      setAll(response.data);
    });
  }, []);
  const [Food, setFood] = useState([]); //food

  useEffect(() => {
    Axios.get(`http://localhost:1111/on/food`, {
      withCredentials: true,
    }).then((response) => {
      setFood(response.data);
    });
  }, []);
  //water
  const [water, setWater] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:1111/on/water`, {
      withCredentials: true,
    }).then((response) => {
      setWater(response.data);
    });
  }, []);
  //hiv
  const [hiv, setHiv] = useState([]);
  useEffect(() => {
    Axios.get(`http://localhost:1111/on/hiv`, {
      withCredentials: true,
    }).then((response) => {
      setHiv(response.data);
    });
  }, []);
  const deleteResearch = (id) => {
    Axios.delete(`http://localhost:1111/Admin/deleteResearch/${id}`, {
      withCredentials: true,
    }).then((response) => {
      if (response.data.msg === "Research DELETED") {
        window.location.reload();
      }
    });
  };
  //Train
  const [Train, setTrain] = useState([]);
  useEffect(() => {
    Axios.get(`http://localhost:1111/on/train`, {
      withCredentials: true,
    }).then((response) => {
      setTrain(response.data);
    });
  }, []);
  // strat
  const [Strat, setStrat] = useState([]);
  useEffect(() => {
    Axios.get(`http://localhost:1111/on/strat`, {
      withCredentials: true,
    }).then((response) => {
      setStrat(response.data);
    });
  }, []);
  //Assist
  const [Assist, setAssist] = useState([]);
  useEffect(() => {
    Axios.get(`http://localhost:1111/on/assist`, {
      withCredentials: true,
    }).then((response) => {
      setAssist(response.data);
    });
  }, []);
  //Proposal
  const [Proposal, setProposal] = useState([]);
  useEffect(() => {
    Axios.get(`http://localhost:1111/on/propsal`, {
      withCredentials: true,
    }).then((response) => {
      setProposal(response.data);
    });
  }, []);
  const DeleteExp = (delId) => {
    Axios.delete(`http://localhost:1111/Admin/Experiance/delete/${delId}`, {
      withCredentials: true,
    }).then((response) => {
      if (response.data.msg === "Experince DELETED") {
        window.location.reload();
      }
    });
  };
  const [expText, setexpText] = useState("");
  const [expTextErr, setexperr] = useState("");
  const getexpDetails = (e) => {
    setexpText(e.target.value);
  };
  const submitExpText = (e) => {
    e.preventDefault();
    let formData = new FormData();

    formData.append("detailText", expText);
    formData.append("type", "experiance");
    formData.append("page", "experiance");
    Axios.post(
      `http://localhost:1111/Admin/editAbout/saveOthersText`,
      formData,
      {
        withCredentials: true,
      }
    ).then((response) => {
      if (response.data.msg === "OtherTexts POSTED") {
        setexperr(false);
        setexpText("");
      } else {
        setexperr(response.data);
      }
    });
  };
  return (
    <div>
      <section id="innerBanner">
        <div className="inner-content">
          <h2>
            <span>Experiance</span>
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
                <Link className="list-group-item">
                  Research, Survey &amp; Assessment
                </Link>
                <ul>
                  <div
                    className="list-group collapse"
                    id="homeSubmenu"
                    role="tablist"
                  >
                    <a
                      className="list-group-item list-group-item-action active"
                      id="list-health-list"
                      data-toggle="list"
                      href="#list-health"
                      role="tab"
                      aria-controls="health"
                    >
                      Health
                    </a>{" "}
                    <a
                      className="list-group-item list-group-item-action"
                      id="list-food-list"
                      data-toggle="list"
                      href="#list-food"
                      role="tab"
                      aria-controls="food"
                    >
                      Nutrition & Food Security{" "}
                    </a>{" "}
                    <a
                      className="list-group-item list-group-item-action"
                      id="list-water-list"
                      data-toggle="list"
                      href="#list-water"
                      role="tab"
                      aria-controls="water"
                    >
                      Water, Sanitation & Hygiene (WaSH)
                    </a>{" "}
                    <a
                      className="list-group-item list-group-item-action"
                      id="list-hiv-list"
                      data-toggle="list"
                      href="#list-hiv"
                      role="tab"
                      aria-controls="hiv"
                    >
                      HIV & AIDS
                    </a>
                  </div>
                </ul>
                <a
                  className="list-group-item list-group-item-action"
                  id="list-strat-list"
                  data-toggle="list"
                  href="#list-strat"
                  role="tab"
                  aria-controls="strat"
                >
                  Strategic &amp; Training Materials Development
                </a>{" "}
                <a
                  className="list-group-item list-group-item-action"
                  id="list-messages-list"
                  data-toggle="list"
                  href="#list-messages"
                  role="tab"
                  aria-controls="messages"
                >
                  Technical Assistance
                </a>{" "}
                <a
                  className="list-group-item list-group-item-action"
                  id="list-trian-list"
                  data-toggle="list"
                  href="#list-trian"
                  role="tab"
                  aria-controls="trian"
                >
                  Providing Training
                </a>{" "}
                <a
                  className="list-group-item list-group-item-action"
                  id="list-settings-list"
                  data-toggle="list"
                  href="#list-settings"
                  role="tab"
                  aria-controls="settings"
                >
                  Proposal Writing
                </a>
              </div>
            </div>
            <div className="col-8">
              <div className="tab-content" id="nav-tabContent">
                <div
                  // className="tab-pane fade show active"
                  id="list-health"
                  role="tabpanel"
                  aria-labelledby="list-health-list"
                >
                  <table className="table table-striped">
                    <thead />
                    <tbody>
                      {all.length > 0 ? (
                        all.map((val, index) => (
                          <tr>
                            <td></td>
                            <td>
                              <table>
                                <tr>
                                  <td></td>
                                  <td>Title:</td>
                                  <td text="">{val.title}</td>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td>Client:</td>
                                  <td text="">{val.client}</td>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td>Objective of the study:</td>
                                  <td text="">{val.objective}</td>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td>Methodology:</td>
                                  <td text="">{val.methodlogy}</td>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td>
                                    <button
                                      type="submit"
                                      className="btn btn-primary "
                                      onClick={() => deleteResearch(val.id)}
                                    >
                                      Delete
                                    </button>
                                    <br />
                                  </td>
                                  <td>
                                    <Link to={`/edit/exp/one/${val.id}`}>
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
                              </table>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <h3>No health experiance data updated</h3>
                      )}
                    </tbody>
                  </table>
                </div>

                <div
                  // className="tab-pane fade show"
                  // className="tab-pane fade show active"
                  id="list-food"
                  role="tabpanel"
                  aria-labelledby="list-food-list"
                >
                  <table className="table table-striped">
                    <thead />
                    <tbody>
                      {Food.length > 0 ? (
                        Food.map((val, index) => (
                          <tr text="food">
                            <td></td>
                            <td>
                              <table>
                                <tr>
                                  <td></td>
                                  <td>Title:</td>
                                  <td text="">{val.title}</td>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td>Client:</td>
                                  <td text="">{val.client}</td>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td>Objective of the study:</td>
                                  <td text="">{val.objective}</td>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td>Methodology:</td>
                                  <td text="">{val.methodlogy}</td>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td>
                                    <button
                                      type="submit"
                                      className="btn btn-primary "
                                      onClick={() => deleteResearch(val.id)}
                                    >
                                      Delete
                                    </button>
                                    <br />
                                  </td>
                                  <td>
                                    <Link to={`/edit/exp/one/${val.id}`}>
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
                              </table>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <h4>No food experiance data updated</h4>
                      )}
                    </tbody>
                  </table>
                </div>
                <div
                  // className="tab-pane fade show active"
                  id="list-water"
                  role="tabpanel"
                  aria-labelledby="list-water-list"
                >
                  <table className="table table-striped">
                    <thead />
                    <tbody>
                      {water.length > 0 ? (
                        water.map((val, index) => (
                          <tr text="food">
                            <td></td>
                            <td>
                              <table>
                                <tr>
                                  <td></td>
                                  <td>Title:</td>
                                  <td text="">{val.title}</td>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td>Client:</td>
                                  <td text="">{val.client}</td>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td>Objective of the study:</td>
                                  <td text="">{val.objective}</td>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td>Methodology:</td>
                                  <td text="">{val.methodlogy}</td>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td>
                                    <button
                                      type="submit"
                                      className="btn btn-primary "
                                      onClick={() => deleteResearch(val.id)}
                                    >
                                      Delete
                                    </button>
                                    <br />
                                  </td>
                                  <td>
                                    <Link to={`/edit/exp/one/${val.id}`}>
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
                              </table>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <h4>No water data updated</h4>
                      )}
                    </tbody>
                  </table>
                </div>
                <div
                  // className="tab-pane fade show active"
                  id="list-hiv"
                  role="tabpanel"
                  aria-labelledby="list-hiv-list"
                >
                  <table className="table table-striped">
                    <thead />
                    <tbody>
                      {hiv.length > 0 ? (
                        hiv.map((val, index) => (
                          <tr text="food">
                            <td></td>
                            <td>
                              <table>
                                <tr>
                                  <td></td>
                                  <td>Title:</td>
                                  <td text="">{val.title}</td>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td>Client:</td>
                                  <td text="">{val.client}</td>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td>Objective of the study:</td>
                                  <td text="">{val.objective}</td>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td>Methodology:</td>
                                  <td text="">{val.methodlogy}</td>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td>
                                    <button
                                      type="submit"
                                      className="btn btn-primary "
                                      onClick={() => deleteResearch(val.id)}
                                    >
                                      Delete
                                    </button>
                                    <br />
                                  </td>
                                  <td>
                                    <Link to={`/edit/exp/one/${val.id}`}>
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
                              </table>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <h4>No hiv data updated</h4>
                      )}
                    </tbody>
                  </table>
                </div>

                <div
                  id="list-trian"
                  role="tabpanel"
                  aria-labelledby="list-trian-list"
                >
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Provide Training</th>
                        <th scope="col">Client</th>
                        <th scope="col">Firm</th>
                        <th scope="col">Delete</th>
                        <th scope="col">Edit</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Train.length > 0 ? (
                        Train.map((val, index) => (
                          <tr text="experiance : trainExperiance">
                            <td></td>

                            <td text="">{val.detailText}</td>
                            <td text="">{val.client}</td>
                            <td text="">{val.firm}</td>
                            <td>
                              <button
                                type="submit"
                                className="btn btn-primary "
                                onClick={() => DeleteExp(val.id)}
                              >
                                Delete
                              </button>
                              <br />
                            </td>
                            <td>
                              <Link to={`/experiance/edit/${val.id}`}>
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
                        <h4>No train exp data inserted</h4>
                      )}
                    </tbody>
                  </table>
                </div>
                <div
                  // className="tab-pane fade"
                  id="list-strat"
                  role="tabpanel"
                  aria-labelledby="list-strat-list"
                >
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Strategic and Training Materials</th>
                        <th scope="col">Client</th>
                        <th scope="col">Firm</th>
                        <th scope="col">Delete</th>
                        <th scope="col">Edit</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Strat.length > 0 ? (
                        Strat.map((val, index) => (
                          <tr text="experiance : stratExperiance">
                            <td></td>
                            <td text="">{val.detailText}</td>
                            <td text="">{val.client}</td>
                            <td text="">{val.firm}</td>
                            <td>
                              <button
                                type="submit"
                                className="btn btn-primary "
                                onClick={() => DeleteExp(val.id)}
                              >
                                Delete
                              </button>
                              <br />
                            </td>
                            <td>
                              <Link to={`/experiance/edit/${val.id}`}>
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
                        <h4>No strat file inserted</h4>
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
                          <th scope="col">Technical Assistance</th>
                          <th scope="col">Client</th>
                          <th scope="col">Firm</th>
                          <th scope="col">Delete</th>
                          <th scope="col">Edit</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Assist.length > 0 ? (
                          Assist.map((val, index) => (
                            <tr text="experiance : assistExperiance">
                              <td></td>
                              <td>{val.detailText}</td>
                              <td>{val.client}</td>
                              <td>{val.firm}</td>
                              <td>
                                <button
                                  type="submit"
                                  className="btn btn-primary "
                                  onClick={() => DeleteExp(val.id)}
                                >
                                  Delete
                                </button>
                                <br />
                              </td>
                              <td>
                                <Link to={`/experiance/edit/${val.id}`}>
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
                          <h4>No assist file inserted</h4>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div
                  // className="tab-pane fade"
                  id="list-settings"
                  role="tabpanel"
                  aria-labelledby="list-settings-list"
                >
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Proposal Development</th>
                        <th scope="col">Client</th>
                        <th scope="col">Firm</th>
                        <th scope="col">Delete</th>
                        <th scope="col">Edit</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Proposal.length > 0 ? (
                        Proposal.map((val, index) => (
                          <tr text="experiance : proposalExperiance">
                            <td></td>
                            <td>{val.detailText}</td>
                            <td>{val.client}</td>
                            <td>{val.firm}</td>
                            <td>
                              <button
                                type="submit"
                                className="btn btn-primary "
                                onClick={() => DeleteExp(val.id)}
                              >
                                Delete
                              </button>
                              <br />
                            </td>
                            <td>
                              <Link to={`/experiance/edit/${val.id}`}>
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
                        <h4>No proposal data inserted</h4>
                      )}
                    </tbody>
                  </table>
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
                  <div className="section-header" object="clientText">
                    <h2>Add or Edit Experiance</h2>
                  </div>
                  <div className="form">
                    {/* <!-- Form itself --> */}
                    <form className="well" id="contactForm" method="POST">
                      <div className="control-group">
                        <div className="form-group">
                          <select
                            name="type"
                            className="selectpicker form-control"
                            onChange={getType}
                            value={type}
                          >
                            <option value="strat">
                              Strategic and Training Materials
                            </option>
                            <option value="train">Providing Training</option>
                            <option value="assist">Technical Assistance</option>
                            <option value="propsal">
                              Proposal Development
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="control-group">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Experiance Detail"
                            id="name"
                            required
                            name="detailText"
                            onChange={getDetailText}
                            value={detailText}
                          />
                        </div>
                      </div>
                      <div className="control-group">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Client"
                            id="name"
                            required
                            name="client"
                            onChange={getClient}
                            value={client}
                          />
                        </div>
                      </div>
                      <div className="control-group">
                        <div className="form-group">
                          <input
                            type="hidden"
                            className="form-control"
                            id="name"
                            required
                            field="firm"
                            name="firm"
                            value={lhd}
                          />
                        </div>
                      </div>

                      <div id="success">{err}</div>
                      <br />

                      <button
                        type="submit"
                        className="btn btn-primary pull-right"
                        onClick={submittExperince}
                      >
                        Add
                      </button>
                      <br />
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="row contact-info">
              <div className="col-lg-5"></div>
              <div className="col-lg-7">
                <div className="container">
                  <div className="section-header" object="clientText">
                    <h2>Add or Edit Research</h2>
                  </div>
                  <div className="form">
                    {/* <!-- Form itself --> */}
                    <form name="sentMessage" className="well" id="contactForm">
                      <div className="control-group">
                        <div className="form-group">
                          <select
                            name="Rtype"
                            className="selectpicker form-control"
                            onChange={getResearchType}
                            value={Rtypes}
                          >
                            <option value="health">Health</option>
                            <option value="food">
                              Nutrition, Livelihoods and Food Security
                            </option>
                            <option value="water">
                              WATER, SANITATION, AND HYGIENE (WASH)
                            </option>
                            <option value="hiv">HIV and AIDS</option>
                          </select>
                        </div>
                      </div>
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
                            value={titles}
                          />
                        </div>
                      </div>
                      <div className="control-group">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Client"
                            id="name"
                            required
                            name="client"
                            onChange={getRclient}
                            value={clients}
                          />
                        </div>
                      </div>
                      <div className="control-group">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Methodlogy"
                            id="name"
                            required
                            name="methodlogy"
                            onChange={getmethodlogy}
                            value={methodlogys}
                          />
                        </div>
                      </div>
                      <div className="control-group">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Objective"
                            id="name"
                            required
                            name="objective"
                            onChange={getobjective}
                            value={objectives}
                          />
                        </div>
                      </div>

                      <div id="success">{reerr}</div>
                      <br />

                      <button
                        type="submit"
                        className="btn btn-primary pull-right"
                        onClick={submittResearch}
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
        <div className="row justify-content-end">
          <section id="clients" className="wow fadeInUp col-9">
            <div className="container">
              <div className="section-header" object="expText">
                <h2>Experience Text</h2>
                <form
                  name="sentMessage"
                  className="well"
                  id="contactForm"
                  row="8"
                >
                  <input type="hidden" name="Id" value="Id" />{" "}
                  <input type="hidden" field="type" />{" "}
                  <input type="hidden" field="page" />
                  <div className="control-group">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        rows="8"
                        placeholder="About Clients"
                        id="name"
                        required
                        field="detailText"
                        onChange={getexpDetails}
                        value={expText}
                      ></textarea>
                      {/* <span className="text-danger" if="#fields.hasErrors('Id')"
									errors="detailText">Last Name Error </span> */}
                    </div>
                  </div>
                  <div id="success">{expTextErr}</div>
                  <br />
                  <button
                    onClick={submitExpText}
                    type="submit"
                    className="btn btn-primary pull-right"
                  >
                    Save
                  </button>
                  <br />
                </form>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Experience;
