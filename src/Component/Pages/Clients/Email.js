import React from "react";

const Email = () => {
  return (
    <div>
      <section id="innerBanner">
        <div className="inner-content">
          <h2>
            <span>Emails</span>
            <br />
            Straving for Excellence and Lasting Change!
          </h2>
          <div></div>
        </div>
      </section>
      <main id="main">
        <section id="contact" className="wow fadeInUp">
          <div className="container">
            <div className="section-header">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolores quae porro consequatur aliquam, incidunt fugiat culpa
                esse aute nulla. malis nulla duis fugiat culpa esse aute nulla
                ipsum velit export irure minim illum fore
              </p>
            </div>

            <div className="row contact-info">
              <div className="col-3" style={{ marginLeft: -20, width: 300 }}>
                <div className="list-group" id="list-tab" role="tablist">
                  <ul>
                    <div
                      className="list-group collapse"
                      id="homeSubmenu"
                      role="tablist"
                    >
                      <form action="#" style={{ marginLeft: -20, width: 300 }}>
                        <label
                          for="lang"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            margin: 0,
                          }}
                        >
                          Emails
                        </label>
                        <select
                          name="languages"
                          id="lang"
                          style={{
                            marginBottom: 10,
                            marginTop: 10,
                            height: 200,
                            padding: 10,
                          }}
                          multiple
                        >
                          <option value="javascript">
                            kibrleabenyiew@gmail.com
                          </option>
                          <option value="php">henokaddis@gmail.com</option>
                          <option value="java">kibrleabenyiew@gmail.com</option>
                          <option value="golang">
                            kibrleabenyiew@gmail.com
                          </option>
                          <option value="python">
                            kibrleabenyiew@gmail.com
                          </option>
                          <option value="c#">kibrleabenyiew@gmail.com</option>
                          <option value="C++">kibrleabenyiew@gmail.com</option>
                          <option value="erlang">
                            kibrleabenyiew@gmail.com
                          </option>
                          <option value="c#">kibrleabenyiew@gmail.com</option>
                          <option value="C++">kibrleabenyiew@gmail.com</option>
                          <option value="erlang">
                            kibrleabenyiew@gmail.com
                          </option>
                          <option value="c#">kibrleabenyiew@gmail.com</option>
                          <option value="C++">kibrleabenyiew@gmail.com</option>
                          <option value="erlang">
                            kibrleabenyiew@gmail.com
                          </option>
                          <option value="c#">kibrleabenyiew@gmail.com</option>
                          <option value="C++">kibrleabenyiew@gmail.com</option>
                          <option value="erlang">
                            kibrleabenyiew@gmail.com
                          </option>
                        </select>
                        {/* <!-- <input type="submit" value="Submit" /> --> */}
                      </form>
                    </div>
                  </ul>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="container">
                  <div className="form">
                    <form
                      name="sentMessage"
                      className="well"
                      id="contactForm"
                      method="POST"
                      style={{ marginLeft: 100 }}
                    >
                      <div className="control-group">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Full Name"
                            id="name"
                            required
                            name="name"
                          />
                          <p className="help-block"></p>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="controls">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            id="email"
                            required
                            name="email"
                            data-validation-required-message="Please enter your email"
                          />
                        </div>
                      </div>
                      <div id="success"> </div>
                      <button
                        type="submit"
                        className="btn btn-primary pull-right"
                      >
                        Add
                      </button>
                      <br />
                      <br />
                      <br />

                      <div className="form-group">
                        <div className="controls">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Edit Email"
                            id="email"
                            name="email"
                          />
                        </div>
                      </div>
                      <div id="success"> </div>
                      <button
                        type="submit"
                        className="btn btn-primary pull-right"
                      >
                        Save
                      </button>
                      <br />
                      <br />
                      <br />

                      <div className="form-group">
                        <div className="controls">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Subject"
                            id="email"
                            required
                            name="email"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="controls">
                          <textarea
                            rows="10"
                            cols="100"
                            className="form-control"
                            placeholder="Message"
                            id="message"
                            required
                            data-validation-required-message="Please enter your message"
                            minlength="5"
                            data-validation-minlength-message="Min 5 characters"
                            maxlength="999"
                            style={{ resize: "none" }}
                            name="message"
                          ></textarea>
                        </div>
                      </div>
                      <div id="success"> </div>
                      <button
                        type="submit"
                        className="btn btn-primary pull-right"
                      >
                        Send To All
                      </button>
                      <button
                        type="submit"
                        className="btn btn-primary pull-left"
                      >
                        Send To Selected
                      </button>
                      <br />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Email;
