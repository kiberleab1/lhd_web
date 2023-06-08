import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
const Experiance = () => {
  const [err, setTeamerr] = useState("");
  const [type, setType] = useState("");
  const [detailText, setDetailText] = useState("");
  const [client, setClient] = useState("");
  const [lhd, setLhd] = useState("LHD");
  const [Assist, setAssist] = useState([]);
  const [Strat, setStrat] = useState([]);
  const [Train, setTrain] = useState([]);
  const [Proposal, setProposal] = useState([]);
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
      if (response.data.msg === "strat") {
        setType("");
        setDetailText("");
        setClient("");
        setTeamerr("");
        setStrat([
          ...Strat,
          {
            type: type,
            detailText: detailText,
            client: client,
            firm: lhd,
          },
        ]);
      } else if (response.data.msg === "train") {
        setType("");
        setDetailText("");
        setClient("");
        setTeamerr("");
        setTrain([
          ...Train,
          {
            type: type,
            detailText: detailText,
            client: client,
            firm: lhd,
          },
        ]);
      } else if (response.data.msg == "assist") {
        setType("");
        setDetailText("");
        setClient("");
        setTeamerr("");
        setAssist([
          ...Assist,
          { type: type, detailText: detailText, client: client, firm: lhd },
        ]);
      } else if (response.data.msg == "propsal") {
        setType("");
        setDetailText("");
        setClient("");
        setTeamerr("");
        setProposal([
          ...Proposal,
          {
            type: type,
            detailText: detailText,
            client: client,
            firm: lhd,
          },
        ]);
      } else {
        setTeamerr(response.data);
      }
    });
  };
  //Train
  useEffect(() => {
    Axios.get(`http://localhost:1111/on/train`, {
      withCredentials: true,
    }).then((response) => {
      setTrain(response.data);
    });
  }, []);
  // strat
  useEffect(() => {
    Axios.get(`http://localhost:1111/on/strat`, {
      withCredentials: true,
    }).then((response) => {
      setStrat(response.data);
    });
  }, []);
  //Assist
  useEffect(() => {
    Axios.get(`http://localhost:1111/on/assist`, {
      withCredentials: true,
    }).then((response) => {
      setAssist(response.data);
    });
  }, []);
  //Proposal
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
  return (
    <div>
      <div id="list-trian" role="tabpanel" aria-labelledby="list-trian-list">
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
                      <button type="submit" className="btn btn-primary">
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
                      <button type="submit" className="btn btn-primary">
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
                        <button type="submit" className="btn btn-primary">
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
                      <button type="submit" className="btn btn-primary">
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
                          <option value="propsal">Proposal Development</option>
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
        </div>
      </section>
    </div>
  );
};

export default Experiance;
