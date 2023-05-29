import React, { useState, useEffect } from "react";
import Axios from "axios";
import Footer from "../../Footer/Footer";
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
  return (
    <div>
      <section id="innerBanner">
        <div class="inner-content">
          <h2>
            <span>Experiance</span>
            <br />
            Striving for Excellence &amp; Lasting Change!!
          </h2>
          <div></div>
        </div>
      </section>
      <main id="main">
        <section id="contact" class="wow fadeInUp">
          <div class="section-header">
            <p>expText - detailText</p>
          </div>
          <div class="row">
            <div class="col-3">
              <div class="list-group" id="list-tab" role="tablist">
                <a class="list-group-item" href=".//">
                  Research, Survey &amp; Assessment
                </a>
                <ul>
                  <div
                    class="list-group collapse"
                    id="homeSubmenu"
                    role="tablist"
                  >
                    <a
                      class="list-group-item list-group-item-action active"
                      id="list-health-list"
                      data-toggle="list"
                      href="#list-health"
                      role="tab"
                      aria-controls="health"
                    >
                      Health
                    </a>{" "}
                    <a
                      class="list-group-item list-group-item-action"
                      id="list-food-list"
                      data-toggle="list"
                      href="#list-food"
                      role="tab"
                      aria-controls="food"
                    >
                      Nutrition & Food Security{" "}
                    </a>{" "}
                    <a
                      class="list-group-item list-group-item-action"
                      id="list-water-list"
                      data-toggle="list"
                      href="#list-water"
                      role="tab"
                      aria-controls="water"
                    >
                      Water, Sanitation & Hygiene (WaSH)
                    </a>{" "}
                    <a
                      class="list-group-item list-group-item-action"
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
                  class="list-group-item list-group-item-action"
                  id="list-profile-list"
                  data-toggle="list"
                  href="#list-profile"
                  role="tab"
                  aria-controls="profile"
                >
                  Strategic &amp; Training Materials Development
                </a>{" "}
                <a
                  class="list-group-item list-group-item-action"
                  id="list-messages-list"
                  data-toggle="list"
                  href="#list-messages"
                  role="tab"
                  aria-controls="messages"
                >
                  Technical Assistance
                </a>
                <a
                  class="list-group-item list-group-item-action"
                  id="list-train-list"
                  data-toggle="list"
                  href="#list-train"
                  role="tab"
                  aria-controls="train"
                >
                  Providing Training
                </a>
                <a
                  class="list-group-item list-group-item-action"
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
            <div class="col-8">
              <div class="tab-content" id="nav-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="list-health"
                  role="tabpanel"
                  aria-labelledby="list-health-list"
                >
                  <table class="table table-striped">
                    <thead>
                      <tbody>
                        {all.length > 0 ? (
                          all.map((val, index) => (
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
                          ))
                        ) : (
                          <h3>No health exp data updated</h3>
                        )}
                      </tbody>
                    </thead>
                  </table>
                </div>

                <div
                  // class="tab-pane fade "
                  id="list-water"
                  role="tabpanel"
                  aria-labelledby="list-water-list"
                >
                  <table class="table table-striped">
                    <thead>
                      <tbody>
                        {water.length > 0 ? (
                          water.map((val, index) => (
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
                          ))
                        ) : (
                          <h3>No water exp data updated</h3>
                        )}
                      </tbody>
                    </thead>
                  </table>
                </div>

                <div
                  // class="tab-pane fade"
                  id="list-food"
                  role="tabpanel"
                  aria-labelledby="list-food-list"
                >
                  <table class="table table-striped">
                    <thead>
                      <tbody>
                        {Food.length > 0 ? (
                          Food.map((val, index) => (
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
                          ))
                        ) : (
                          <h4>No food exp updated</h4>
                        )}
                      </tbody>
                    </thead>
                  </table>
                </div>
                <div
                  // class="tab-pane fade"
                  id="list-hiv"
                  role="tabpanel"
                  aria-labelledby="list-hiv-list"
                >
                  <table class="table table-striped">
                    <thead>
                      <tbody>
                        {hiv.length > 0 ? (
                          hiv.map((val, index) => (
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
                          ))
                        ) : (
                          <h4>No hiv exp data updated</h4>
                        )}
                      </tbody>
                    </thead>
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
                        <th scope="col">Strategic and Training Materials</th>
                        <th scope="col">Client</th>
                      </tr>
                    </thead>

                    <tbody>
                      {Strat.length > 0 ? (
                        Strat.map((val, index) => (
                          <tr>
                            <td></td>
                            <td>{val.detailText}</td>
                            <td>{val.client}</td>
                          </tr>
                        ))
                      ) : (
                        <h4>no strat file inserted</h4>
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
                          <th scope="col">Technical Assistance</th>
                          <th scope="col">Client</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Assist.length > 0 ? (
                          Assist.map((val, index) => (
                            <tr>
                              <td></td>
                              <td>{val.detailText}</td>
                              <td>{val.client}</td>
                            </tr>
                          ))
                        ) : (
                          <h4>no assist file inserted</h4>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div
                  // class="tab-pane fade"
                  id="list-settings"
                  role="tabpanel"
                  aria-labelledby="list-settings-list"
                >
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Proposal Development</th>
                        <th scope="col">Client</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Proposal.length > 0 ? (
                        Proposal.map((val, index) => (
                          <tr>
                            <td></td>
                            <td>{val.detailText}</td>
                            <td>{val.client}</td>
                          </tr>
                        ))
                      ) : (
                        <h4>no proposal data inserted</h4>
                      )}
                    </tbody>
                  </table>
                </div>
                <div
                  // class="tab-pane fade"
                  id="list-train"
                  role="tabpanel"
                  aria-labelledby="list-train-list"
                >
                  <table class="table table-striped">
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
                          <tr>
                            <td></td>
                            <td>{val.detailText}</td>
                            <td>{val.client}</td>
                          </tr>
                        ))
                      ) : (
                        <h4>no train exp inserted</h4>
                      )}
                    </tbody>
                  </table>
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

export default Experience;
