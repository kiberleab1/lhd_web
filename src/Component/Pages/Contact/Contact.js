import React, { useState, useRef } from "react";
import Footer from "../../Footer/Footer";
import Axios from "axios";
import Input from "../InputFormat";
const Contact = () => {
  const form = useRef();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const [err, seterr] = useState("");
  const getName = (e) => {
    setname(e.target.value);
  };
  const getemail = (e) => {
    setemail(e.target.value);
  };
  const getmessage = (e) => {
    setmessage(e.target.value);
  };

  const submittContact = (e) => {
    e.preventDefault();

    let formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    Axios.post(`http://localhost:1111/lhd/Contact`, formData, {
      withCredentials: true,
    }).then((response) => {
      if (response.data.msg === `Thank you`) {
        setname("");
        setemail("");
        setmessage("");
        seterr(false);
        // // return push("/Admin/Home");
      } else {
        // window.location.href =
        //   "mailto:zemelatmen@gmail.com?subject='Hello from Abstract!'&body='Just popped in to say hello'";
        seterr(response.data);
      }
    });
  };
  return (
    <>
      <section id="innerBanner">
        <div className="inner-content">
          <h2>
            <span>Contact</span>
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
                <div className="contact-address">
                  <i className="ion-ios-location-outline"></i>
                  <h3>Address</h3>
                  <address>
                    Haile Geberselasie Road Matiyas Building(Beside lem Hotel),
                    <br />
                    5th floor,office #406 & 407
                    <br />
                    Yeka Sub City, Addis Ababa, Ethiopia
                  </address>
                  <address>
                    12727LayHill Rd,Apt #T2 <br /> Sliver Spring,MD 20906, USA{" "}
                  </address>
                </div>
                <div className="contact-phone">
                  <i className="ion-ios-telephone-outline"></i>
                  <h3>Phone Number</h3>
                  <p>
                    <a href="tel:+251">+251 909 564 185</a>
                  </p>
                  <p>
                    <a href="tel:+251">+251 913 054 265</a>
                  </p>
                  <p>
                    <a href="tel:+251">+1 (202) 751 56</a>
                  </p>
                </div>
                <div className="contact-email">
                  <i className="ion-ios-email-outline"></i>
                  <h3>Email</h3>
                  <p>
                    <a href="mailto:info@lhdconsult.org">info@lhdconsult.org</a>
                  </p>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="container">
                  <div className="form">
                    <form
                      name="sentMessage"
                      className="well"
                      id="contactForm"
                      novalidate
                      method="POST"
                      ref={form}
                      onSubmit={submittContact}
                    >
                      <div className="control-group">
                        <div className="form-group">
                          <Input
                            TextType="text"
                            InputClassName="form-control"
                            OnPlaceHolder="Full Name"
                            id="name"
                            required
                            NameOfInput="name"
                            OnChangingInputs={getName}
                            ValueOfInput={name}
                          />

                          <p className="help-block"></p>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="controls">
                          <Input
                            TextType="email"
                            InputClassName="form-control"
                            OnPlaceHolder="Email"
                            id="email"
                            required
                            NameOfInput="email"
                            OnChangingInputs={getemail}
                            ValueOfInput={email}
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
                            onChange={getmessage}
                            value={message}
                          ></textarea>
                        </div>
                      </div>
                      <div id="success">{err} </div>

                      <button
                        type="submit"
                        className="btn btn-primary pull-right"
                        // onClick={submittContact}
                      >
                        Send
                      </button>

                      <br />
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
              title="iframe"
              allowfullscreen
            ></iframe>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
