import React, { useState, useEffect } from "react";
import Axios from "axios";
import Footer from "../../Footer/Footer";
const Clients_in_ethiopia = () => {
  //Proposal
  // const [Proposal, setProposal] = useState([]);
  // useEffect(() => {
  //   Axios.get(`http://localhost:1111/on/propsal`, {
  //     withCredentials: true,
  //   }).then((response) => {
  //     setProposal(response.data);
  //   });
  // }, []);

  //gov;
  const [gov, setGov] = useState([]);
  useEffect(() => {
    Axios.get(`http://localhost:1111/eth/gov`, {
      withCredentials: true,
    }).then((response) => {
      setGov(response.data);
    });
  }, []);
  //nongov
  const [nongov, setNongov] = useState([]);
  useEffect(() => {
    Axios.get(`http://localhost:1111/eth/nongov`, {
      withCredentials: true,
    }).then((response) => {
      setNongov(response.data);
    });
  }, []);
  //un in eth
  const [un, setUn] = useState([]);
  useEffect(() => {
    Axios.get(`http://localhost:1111/UNEth/val`, {
      withCredentials: true,
    }).then((response) => {
      setUn(response.data);
    });
  }, []);
  const [serOtherText, setserOtherText] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:1111/client/about`, {
      withCredentials: true,
    }).then((response) => {
      setserOtherText([response.data]);
    });
  }, []);
  return (
    <div>
      <section id="innerBanner">
        <div className="inner-content">
          <h2>
            <span>Our Clients In Ethiopia</span>
            <br />
            Striving for Excellence &amp; Lasting Change!!
          </h2>
          <div></div>
        </div>
      </section>
      <main id="main">
        <section id="contact" className="wow fadeInUp">
          <div className="section-header">
            {serOtherText.length > 0 ? (
              serOtherText.map((val, index) => (
                <p text="detailText" key={index}>
                  {val.detailText}
                </p>
              ))
            ) : (
              <>clientText</>
            )}
          </div>
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
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  id="list-profile-list"
                  data-toggle="list"
                  href="#list-profile"
                  role="tab"
                  aria-controls="profile"
                >
                  Govermental Organizations
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
                  href="#list-home"
                  role="tabpanel"
                  aria-labelledby="list-home-list"
                >
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Organization</th>
                      </tr>
                    </thead>
                    <tbody>
                      {un.length > 0 ? (
                        un.map((val, index) => (
                          <tr text="unClients">
                            <td></td>
                            <td>{val.name}</td>
                          </tr>
                        ))
                      ) : (
                        <h4>No UN clients</h4>
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
                      </tr>
                    </thead>
                    <tbody>
                      {gov.length > 0 ? (
                        gov.map((val, index) => (
                          <tr text="govClients">
                            <td></td>
                            <td>{val.name}</td>
                          </tr>
                        ))
                      ) : (
                        <h4>No gov clients</h4>
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
                        </tr>
                      </thead>
                      <tbody>
                        {nongov.length > 0 ? (
                          nongov.map((val, index) => (
                            <tr text="nongovClients">
                              <td></td>
                              <td>{val.name}</td>
                            </tr>
                          ))
                        ) : (
                          <h4>No nongov clients</h4>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* <div
                  // className="tab-pane fade"
                  id="list-settings"
                  role="tabpanel"
                  aria-labelledby="list-settings-list"
                >
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Organization</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Proposal.length > 0 ? (
                        Proposal.map((val, index) => (
                          <tr text="proposalExperiance">
                            <th scope="row">{val.Id}</th>
                            <td>{val.detailText}</td>
                          </tr>
                        ))
                      ) : (
                        <h6>No proposal Experiance inserted</h6>
                      )}
                    </tbody>
                  </table>
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Clients_in_ethiopia;
