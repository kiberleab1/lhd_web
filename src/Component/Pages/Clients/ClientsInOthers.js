import React, { useState, useEffect } from "react";
import Axios from "axios";
import Footer from "../../Footer/Footer";
const ClientsInOthers = () => {
  // forign gov
  const [forignGov, setforignGov] = useState([]);
  useEffect(() => {
    Axios.get(`http://localhost:1111/forign/val/gov`, {
      withCredentials: true,
    }).then((response) => {
      setforignGov(response.data);
    });
  }, []);
  //forihn notGov
  const [forignNonGov, setforignNonGov] = useState([]);
  useEffect(() => {
    Axios.get(`http://localhost:1111/forign/nongov`, {
      withCredentials: true,
    }).then((response) => {
      setforignNonGov(response.data);
    });
  }, []);
  // un forign /forign/UNForign
  const [forignUN, setforignUN] = useState([]);
  useEffect(() => {
    Axios.get(`http://localhost:1111/forign/UNForign`, {
      withCredentials: true,
    }).then((response) => {
      setforignUN(response.data);
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
            <span>Our Clients In Other Countries</span>
            <br />
            Striving for Excellence &amp; Lasting Change!!
          </h2>
          <div></div>
        </div>
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
                <div
                  style={{ display: "none", width: 30 }}
                  className="list-group"
                  id="list-tab"
                  role="tablist"
                >
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
              <div className="col-12">
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
                          <th scope="col">Country</th>
                        </tr>
                      </thead>
                      <tbody>
                        {forignUN.length > 0 ? (
                          forignUN.map((val, index) => (
                            <tr text="unClients" key={index}>
                              <td></td>
                              <td>{val.name}</td>
                              <td>{val.country}</td>
                            </tr>
                          ))
                        ) : (
                          <>Insert Forign UN Clients</>
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
                          <th scope="col">Country</th>
                        </tr>
                      </thead>
                      <tbody>
                        {forignGov.length > 0 ? (
                          forignGov.map((val, index) => (
                            <tr text="govClients" key={index}>
                              <td></td>
                              <td>{val.name}</td>
                              <td>{val.country}</td>
                            </tr>
                          ))
                        ) : (
                          <>Insert Forign Goverment Clients</>
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
                      {" "}
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Organization</th>
                            <th scope="col">Country</th>
                          </tr>
                        </thead>
                        <tbody>
                          {forignNonGov.length > 0 ? (
                            forignNonGov.map((val, index) => (
                              <tr text="nongovClients" key={index}>
                                <td></td>
                                <td>{val.name}</td>
                                <td>{val.country}</td>
                              </tr>
                            ))
                          ) : (
                            <>Insert Forign Non-Goverment Clients</>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </section>
      <Footer />
    </div>
  );
};

export default ClientsInOthers;
