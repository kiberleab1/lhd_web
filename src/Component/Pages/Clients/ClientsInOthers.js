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
  return (
    <div>
      <section id="innerBanner">
        <div class="inner-content">
          <h2>
            <span>Our Clients In Other Countries</span>
            <br />
            Striving for Excellence &amp; Lasting Change!!
          </h2>
          <div></div>
        </div>
        <main id="main">
          <section id="contact" class="wow fadeInUp">
            <div class="section-header" text="clientText">
              <p>detailText</p>
            </div>
            <div class="row">
              <div class="col-3">
                <div
                  style={{ display: "none", width: 30 }}
                  class="list-group"
                  id="list-tab"
                  role="tablist"
                >
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
              <div class="col-12">
                <div class="tab-content" id="nav-tabContent">
                  <div
                    class="tab-pane fade show active"
                    id="list-home"
                    role="tabpanel"
                    aria-labelledby="list-home-list"
                  >
                    <table class="table table-striped">
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
                            <tr text="unClients">
                              <td></td>
                              <td>{val.name}</td>
                              <td>{val.country}</td>
                            </tr>
                          ))
                        ) : (
                          <>Insert forign gov clients</>
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
                          <th scope="col">Country</th>
                        </tr>
                      </thead>
                      <tbody>
                        {forignGov.length > 0 ? (
                          forignGov.map((val, index) => (
                            <tr text="govClients">
                              <td></td>
                              <td>{val.name}</td>
                              <td>{val.country}</td>
                            </tr>
                          ))
                        ) : (
                          <>Insert forign gov clients</>
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
                            <th scope="col">Country</th>
                          </tr>
                        </thead>
                        <tbody>
                          {forignNonGov.length > 0 ? (
                            forignNonGov.map((val, index) => (
                              <tr text="nongovClients">
                                <td></td>
                                <td>{val.name}</td>
                                <td>{val.country}</td>
                              </tr>
                            ))
                          ) : (
                            <>Insert forign Nongov clients</>
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
