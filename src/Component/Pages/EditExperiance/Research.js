import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
const Experiance = () => {
  //   const [detailText, setDetailText] = useState("");
  const [all, setAll] = useState([]);
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
      if (response.data.msg === "health") {
        setEerr(false);
        setTitle("");
        setRtype("");
        setclient("");
        setmethodlogy("");
        setobjective("");
        setAll([
          ...all,
          {
            title: titles,
            methodlogy: methodlogys,
            client: clients,
            objective: objectives,
            type: Rtypes,
          },
        ]);
      } else if (response.data.msg === "water") {
        // setDetailText("");
        setEerr(false);
        setTitle("");
        setRtype("");
        setclient("");
        setmethodlogy("");
        setobjective("");
        setWater([
          ...water,
          {
            title: titles,
            methodlogy: methodlogys,
            client: clients,
            objective: objectives,
            type: Rtypes,
          },
        ]);
      } else if (response.data.msg === "hiv") {
        setEerr(false);
        setTitle("");
        setRtype("");
        setclient("");
        setmethodlogy("");
        setobjective("");
        setHiv([
          ...hiv,
          {
            title: titles,
            methodlogy: methodlogys,
            client: clients,
            objective: objectives,
            type: Rtypes,
          },
        ]);
      } else if (response.data.msg === "food") {
        setEerr(false);
        setTitle("");
        setRtype("");
        setclient("");
        setmethodlogy("");
        setobjective("");
        setFood([
          ...Food,
          {
            title: titles,
            methodlogy: methodlogys,
            client: clients,
            objective: objectives,
            type: Rtypes,
          },
        ]);
      } else {
        setEerr(response.data);
      }
    });
  };

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
      if (response.data.msg == "Research DELETED") {
        window.location.reload();
      }
    });
  };
  return (
    <div>
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
                            <td style={{ display: "none", width: 0 }}></td>
                            <td style={{ width: 20 }}>Title:</td>
                            <td text="">{val.title}</td>
                          </tr>
                          <tr>
                            <td style={{ display: "none", width: 0 }}></td>
                            <td style={{ width: 20 }}>Client:</td>
                            <td text="">{val.client}</td>
                          </tr>
                          <tr>
                            <td style={{ display: "none", width: 0 }}></td>
                            <td style={{ width: 20 }}>
                              Objective of the study:
                            </td>
                            <td>{val.objective}</td>
                          </tr>
                          <tr>
                            <td style={{ display: "none", width: 0 }}></td>
                            <td style={{ width: 20 }}>Methodology:</td>
                            <td text="">{val.methodlogy}</td>
                          </tr>
                          <tr>
                            <td style={{ display: "none", width: 0 }}></td>
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
                  <h3>No health Experiance data updated</h3>
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
                            <td style={{ display: "none", width: 0 }}></td>
                            <td>Title:</td>
                            <td text="">{val.title}</td>
                          </tr>
                          <tr>
                            <td style={{ display: "none", width: 0 }}></td>
                            <td>Client:</td>
                            <td text="">{val.client}</td>
                          </tr>
                          <tr>
                            <td style={{ display: "none", width: 0 }}></td>
                            <td>Objective of the study:</td>
                            <td text="">{val.objective}</td>
                          </tr>
                          <tr>
                            <td style={{ display: "none", width: 0 }}></td>
                            <td>Methodology:</td>
                            <td text="">{val.methodlogy}</td>
                          </tr>
                          <tr>
                            <td style={{ display: "none", width: 0 }}></td>
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
                            <td style={{ display: "none", width: 0 }}></td>
                            <td>Title:</td>
                            <td text="">{val.title}</td>
                          </tr>
                          <tr>
                            <td style={{ display: "none", width: 0 }}></td>
                            <td>Client:</td>
                            <td text="">{val.client}</td>
                          </tr>
                          <tr>
                            <td style={{ display: "none", width: 0 }}></td>
                            <td>Objective of the study:</td>
                            <td text="">{val.objective}</td>
                          </tr>
                          <tr>
                            <td style={{ display: "none", width: 0 }}></td>
                            <td>Methodology:</td>
                            <td text="">{val.methodlogy}</td>
                          </tr>
                          <tr>
                            <td style={{ display: "none", width: 0 }}></td>
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
                            <td style={{ display: "none", width: 0 }}></td>
                            <td>Title:</td>
                            <td text="">{val.title}</td>
                          </tr>
                          <tr>
                            <td style={{ display: "none", width: 0 }}></td>
                            <td>Client:</td>
                            <td text="">{val.client}</td>
                          </tr>
                          <tr>
                            <td style={{ display: "none", width: 0 }}></td>
                            <td>Objective of the study:</td>
                            <td text="">{val.objective}</td>
                          </tr>
                          <tr>
                            <td style={{ display: "none", width: 0 }}></td>
                            <td>Methodology:</td>
                            <td text="">{val.methodlogy}</td>
                          </tr>
                          <tr>
                            <td style={{ display: "none", width: 0 }}></td>
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
      </div>
    </div>
  );
};

export default Experiance;
