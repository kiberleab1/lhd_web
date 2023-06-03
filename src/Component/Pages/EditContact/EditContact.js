import React from "react";

const EditContact = () => {
  return (
    <div>
      {" "}
      <section id="innerBanner">
        <div className="inner-content">
          <h2>
            <span>Edit Contact</span>
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
              <div className="col-lg-5">
                <form
                  name="sentMessage"
                  className="well"
                  id="contactForm"

                  //   th:object="${newContact}"
                >
                  <div className="control-group">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Add Address"
                        id="name"
                        required
                        name="name"
                      />
                      <p className="help-block"></p>
                      <button
                        type="submit"
                        className="btn btn-primary pull-right"
                      >
                        Add
                      </button>
                      <br />
                      <br />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone Number"
                        id="name"
                        required
                        name="name"
                        data-validation-required-message="Please enter your Phone Number"
                      />
                      <p className="help-block"></p>
                      <button
                        type="submit"
                        className="btn btn-primary pull-right"
                      >
                        Add
                      </button>
                      <br />
                      <br />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        id="name"
                        required
                        name="name"
                        data-validation-required-message="Please enter your Email"
                      />
                      <p className="help-block"></p>
                      <button
                        type="submit"
                        className="btn btn-primary pull-right"
                      >
                        Add
                      </button>
                      <br />
                      <br />

                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Link"
                          id="name"
                          required
                          name="name"
                          data-validation-required-message="Please enter your Email"
                        />
                        <p className="help-block"></p>
                        <button
                          type="submit"
                          className="btn btn-primary pull-right"
                        >
                          Add Link
                        </button>
                        <br />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-lg-7">
                <div className="container">
                  <div className="form">
                    <form
                      name="sentMessage"
                      className="well"
                      id="contactForm"
                      novalidate
                      action="/lhd/Contact"
                      //   th:object="${newContact}"
                      method="POST"
                    >
                      <form action="#">
                        <label for="lang">Select</label>
                        <select name="languages" id="lang">
                          <optgroup label="Choice">
                            <option value="Address">Address</option>
                            <option value="Phone">Phone Number</option>
                            <option value="Email">Email</option>
                          </optgroup>
                        </select>
                      </form>

                      <div className="control-group">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Edit Address"
                            id="name"
                            required
                            name="name"
                          />
                          <p className="help-block"></p>
                          <button
                            type="submit"
                            className="btn btn-primary pull-right"
                          >
                            Save
                          </button>
                          <br />
                          <br />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="controls">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Edit phone Number"
                            id="email"
                            required
                            name="email"
                          />
                          <p className="help-block"></p>
                          <button
                            type="submit"
                            className="btn btn-primary pull-right"
                          >
                            Save
                          </button>
                          <br />
                          <br />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="controls">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Edit Email"
                            id="email"
                            required
                            name="email"
                            data-validation-required-message="Please enter your email"
                          />
                        </div>
                      </div>

                      <div className="form-group">
                        <div className="controls"></div>
                      </div>
                      <div id="success"> </div>
                      <button
                        type="submit"
                        className="btn btn-primary pull-right"
                      >
                        Save
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container mb-4 map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5348696893707!2d38.78105031366575!3d9.014874493530636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b857490af8af3%3A0x979ce5703b0e5957!2sLem+Hotel!5e0!3m2!1sen!2set!4v1553023393272"
              width="100%"
              height="450"
              frameborder="0"
              style={{ border: 0 }}
              allowfullscreen
              title="location"
            ></iframe>
          </div>
        </section>
      </main>
    </div>
  );
};

export default EditContact;
