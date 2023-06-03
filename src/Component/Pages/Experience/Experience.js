import React, { useState, useEffect } from "react";
import Axios from "axios";
import Footer from "../../Footer/Footer";
import "./exp.css";
const Experience = () => {
  const [all, setAll] = useState([]);
  useEffect(() => {
    Axios.get(`http://localhost:1111/on/health`, {
      withCredentials: true,
    }).then((response) => {
      setAll(response.data);
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
  const [Food, setFood] = useState([]); //food

  useEffect(() => {
    Axios.get(`http://localhost:1111/on/food`, {
      withCredentials: true,
    }).then((response) => {
      setFood(response.data);
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
  //Train
  const [Train, setTrain] = useState([]);
  useEffect(() => {
    Axios.get(`http://localhost:1111/on/train`, {
      withCredentials: true,
    }).then((response) => {
      setTrain(response.data);
    });
  }, []);
  const [expText, setexpText] = useState([]);
  useEffect(() => {
    Axios.get(`http://localhost:1111/exp/othertext`, {
      withCredentials: true,
    }).then((response) => {
      setexpText([response.data]);
    });
  }, []);
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
          <div className="section-header">
            {expText.length > 0 ? (
              expText.map((val, index) => <p key={index}>{val.detailText}</p>)
            ) : (
              <p>exp-otherText</p>
            )}
          </div>
          <div className="row">
            <div className="col-3">
              <div className="list-group" id="list-tab" role="tablist">
                <a className="list-group-item" href=".//">
                  Research, Survey &amp; Assessment
                </a>
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
                  id="list-profile-list"
                  data-toggle="list"
                  href="#list-profile"
                  role="tab"
                  aria-controls="profile"
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
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  id="list-train-list"
                  data-toggle="list"
                  href="#list-train"
                  role="tab"
                  aria-controls="train"
                >
                  Providing Training
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  id="list-settings-list"
                  data-toggle="list"
                  href="#list-settings"
                  role="tab"
                  aria-controls="settings"
                >
                  Proposal Development
                </a>
              </div>
            </div>
            <div className="col-8">
              <div className="tab-content" id="nav-tabContent">
                <div
                  // className="tab-pane fade show"
                  id="list-health"
                  role="tabpanel"
                  aria-labelledby="list-health-list"
                >
                  <table className="table table-striped">
                    <thead>
                      {all.length > 0 ? (
                        all.map((val, index) => (
                          <tbody>
                            <tr text="health">
                              <td style={{ display: "none", width: 0 }}></td>
                              <td>
                                <table>
                                  <tr>
                                    <td
                                      style={{ display: "none", width: 0 }}
                                    ></td>
                                    <td style={{ width: 20 }}>Title:</td>
                                    <td>{val.title}</td>
                                  </tr>
                                  <tr>
                                    <td
                                      style={{ display: "none", width: 0 }}
                                    ></td>
                                    <td style={{ width: 20 }}>Client:</td>
                                    <td>{val.client}</td>
                                  </tr>
                                  <tr>
                                    <td
                                      style={{ display: "none", width: 0 }}
                                    ></td>
                                    <td style={{ width: 20 }}>
                                      Objective of the study:
                                    </td>
                                    <td>{val.objective}</td>
                                  </tr>
                                  <tr>
                                    <td
                                      style={{ display: "none", width: 0 }}
                                    ></td>
                                    <td style={{ width: 20 }}>Methodology:</td>
                                    <td>{val.methodlogy}</td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        ))
                      ) : (
                        <h6>No health exp data updated</h6>
                      )}
                    </thead>
                  </table>
                </div>

                <div
                  // className="tab-pane fade "
                  id="list-water"
                  role="tabpanel"
                  aria-labelledby="list-water-list"
                >
                  <table className="table table-striped">
                    <thead>
                      {water.length > 0 ? (
                        water.map((val, index) => (
                          <tbody>
                            <tr text="water">
                              <td style={{ display: "none", width: 0 }}></td>
                              <td>
                                <table>
                                  <tr>
                                    <td
                                      style={{ display: "none", width: 0 }}
                                    ></td>
                                    <td style={{ width: 20 }}>Title:</td>
                                    <td>{val.title}</td>
                                  </tr>
                                  <tr>
                                    <td
                                      style={{ display: "none", width: 0 }}
                                    ></td>
                                    <td style={{ width: 20 }}>Client:</td>
                                    <td>{val.client}</td>
                                  </tr>
                                  <tr>
                                    <td
                                      style={{ display: "none", width: 0 }}
                                    ></td>
                                    <td style={{ width: 20 }}>
                                      Objective of the study:
                                    </td>
                                    <td>{val.objective}</td>
                                  </tr>
                                  <tr>
                                    <td
                                      style={{ display: "none", width: 0 }}
                                    ></td>
                                    <td style={{ width: 20 }}>Methodology:</td>
                                    <td>{val.methodlogy}</td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        ))
                      ) : (
                        <h6>No water exp data updated</h6>
                      )}
                    </thead>
                  </table>
                </div>

                <div
                  // className="tab-pane fade"
                  id="list-food"
                  role="tabpanel"
                  aria-labelledby="list-food-list"
                >
                  {" "}
                  {Food.length > 0 ? (
                    Food.map((val, index) => (
                      <table className="table table-striped">
                        <thead>
                          <tbody>
                            <tr text="food">
                              <td style={{ display: "none", width: 0 }}></td>
                              <td>
                                <table>
                                  <tr>
                                    <td
                                      style={{ display: "none", width: 0 }}
                                    ></td>
                                    <td style={{ width: 20 }}>Title:</td>
                                    <td>{val.title}</td>
                                  </tr>
                                  <tr>
                                    <td
                                      style={{ display: "none", width: 0 }}
                                    ></td>
                                    <td style={{ width: 20 }}>Client:</td>
                                    <td>{val.client}</td>
                                  </tr>
                                  <tr>
                                    <td
                                      style={{ display: "none", width: 0 }}
                                    ></td>
                                    <td style={{ width: 20 }}>
                                      Objective of the study:
                                    </td>
                                    <td>{val.objective}</td>
                                  </tr>
                                  <tr>
                                    <td
                                      style={{ display: "none", width: 0 }}
                                    ></td>
                                    <td style={{ width: 20 }}>Methodology:</td>
                                    <td>{val.methodlogy}</td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </thead>
                      </table>
                    ))
                  ) : (
                    <h6>No food exp updated</h6>
                  )}
                </div>
                <div
                  // className="tab-pane fade"
                  id="list-hiv"
                  role="tabpanel"
                  aria-labelledby="list-hiv-list"
                >
                  {" "}
                  {hiv.length > 0 ? (
                    hiv.map((val, index) => (
                      <table className="table table-striped">
                        <thead>
                          <tbody>
                            <tr text="hiv">
                              <td style={{ display: "none", width: 0 }}></td>
                              <td>
                                <table>
                                  <tr>
                                    <td
                                      style={{ display: "none", width: 0 }}
                                    ></td>
                                    <td style={{ width: 20 }}>Title:</td>
                                    <td>{val.title}</td>
                                  </tr>
                                  <tr>
                                    <td
                                      style={{ display: "none", width: 0 }}
                                    ></td>
                                    <td style={{ width: "20px" }}>Client:</td>
                                    <td>{val.client}</td>
                                  </tr>
                                  <tr>
                                    <td
                                      style={{ display: "none", width: 0 }}
                                    ></td>
                                    <td style={{ width: 20 }}>
                                      Objective of the study:
                                    </td>
                                    <td>{val.objective}</td>
                                  </tr>
                                  <tr>
                                    <td
                                      style={{ display: "none", width: 0 }}
                                    ></td>
                                    <td>Methodology:</td>
                                    <td>{val.methodlogy}</td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </thead>
                      </table>
                    ))
                  ) : (
                    <h6>No hiv exp data updated</h6>
                  )}
                </div>
                <div
                  // className="tab-pane fade"
                  id="list-profile"
                  role="tabpanel"
                  aria-labelledby="list-profile-list"
                >
                  {Strat.length > 0 ? (
                    Strat.map((val, index) => (
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">
                              Strategic and Training Materials
                            </th>
                            <th scope="col">Client</th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td key={index}></td>
                            <td>{val.detailText}</td>
                            <td>{val.client}</td>
                          </tr>
                        </tbody>
                      </table>
                    ))
                  ) : (
                    <h4>no strat file inserted</h4>
                  )}
                </div>
                <div
                  // className="tab-pane fade"
                  id="list-messages"
                  role="tabpanel"
                  aria-labelledby="list-messages-list"
                >
                  <div>
                    {Assist.length > 0 ? (
                      Assist.map((val, index) => (
                        <table className="table table-striped">
                          <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">Technical Assistance</th>
                              <th scope="col">Client</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr key={index}>
                              <td></td>
                              <td>{val.detailText}</td>
                              <td>{val.client}</td>
                            </tr>
                          </tbody>
                        </table>
                      ))
                    ) : (
                      <h4>no assist file inserted</h4>
                    )}
                  </div>
                </div>
                <div
                  // className="tab-pane fade"
                  id="list-settings"
                  role="tabpanel"
                  aria-labelledby="list-settings-list"
                >
                  {Proposal.length > 0 ? (
                    Proposal.map((val, index) => (
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Proposal Development</th>
                            <th scope="col">Client</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr key={index}>
                            <td></td>
                            <td>{val.detailText}</td>
                            <td>{val.client}</td>
                          </tr>
                        </tbody>
                      </table>
                    ))
                  ) : (
                    <h4>no proposal data inserted</h4>
                  )}
                </div>
                <div
                  // className="tab-pane fade"
                  id="list-train"
                  role="tabpanel"
                  aria-labelledby="list-train-list"
                >
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Providing Training</th>
                        <th scope="col">Client</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Train.length > 0 ? (
                        Train.map((val, index) => (
                          <tr key={index}>
                            <td></td>
                            <td>{val.detailText}</td>
                            <td>{val.client}</td>
                          </tr>
                        ))
                      ) : (
                        <h4>No train exp inserted</h4>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div class="container">
            <div
              class="row"
              // th:with="someVariable=${pageCounter}"
            >
              <nav
                aria-label="Page navigation example"
                class="col align-self-end row justify-content-center"
              >
                <ul class="pagination">
                  <li class="page-item">
                    <a class="page-link" href="/">
                      {" "}
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Experience;
