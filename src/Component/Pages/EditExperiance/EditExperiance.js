import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Axios from "axios";
import Research from "./Research";
import Experiance from "./ExperiancePro";
const Experience = () => {
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
                <Research />

                <Experiance />
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
