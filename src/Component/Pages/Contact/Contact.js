import React, { useState, useRef } from "react";

import emailjs from "@emailjs/browser";
import Footer from "../../Footer/Footer";
import Axios from "axios";
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
      if (
        response.data.msg ===
        `Thank you for contacting us and will respond to your quires.  Please\r\n  
				do reach out to the following emails and we will be able to respond to 
				you as soon as possible.
				antenanie35@gmail.com or anduye2@gmail.com,\r\n
        also you can contact kiberleabdemassie@gmail.com`
      ) {
        setname("");
        setemail("");
        setmessage("");
        seterr(false);
        // // return push("/Admin/Home");
        emailjs
          .sendForm(
            "service_3pv0i72",
            "template_goh566v",
            form.current,
            "dvcmF-AK3PcrB5obN"
          )
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
        emailjs
          .sendForm(
            "service_3pv0i72",
            "template_raa216t",
            form.current,
            "dvcmF-AK3PcrB5obN"
          )
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
      } else {
        // window.location.href =
        //   "mailto:zemelatmen@gmail.com?subject='Hello from Abstract!'&body='Just popped in to say hello'";
        seterr(response.data);
      }
    });
    e.target.reset();
  };
  return (
    <>
      <section id="innerBanner">
        <div class="inner-content">
          <h2>
            <span>Contact</span>
            <br />
            Straving for Excellence and Lasting Change!
          </h2>
          <div></div>
        </div>
      </section>
      <main id="main">
        <section id="contact" class="wow fadeInUp">
          <div class="container">
            <div class="section-header">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolores quae porro consequatur aliquam, incidunt fugiat culpa
                esse aute nulla. malis nulla duis fugiat culpa esse aute nulla
                ipsum velit export irure minim illum fore
              </p>
            </div>

            <div class="row contact-info">
              <div class="col-lg-5">
                <div class="contact-address">
                  <i class="ion-ios-location-outline"></i>
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
                <div class="contact-phone">
                  <i class="ion-ios-telephone-outline"></i>
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
                <div class="contact-email">
                  <i class="ion-ios-email-outline"></i>
                  <h3>Email</h3>
                  <p>
                    <a href="mailto:info@lhdconsult.org">info@lhdconsult.org</a>
                  </p>
                </div>
              </div>
              <div class="col-lg-7">
                <div class="container">
                  <div class="form">
                    <form
                      name="sentMessage"
                      class="well"
                      id="contactForm"
                      novalidate
                      method="POST"
                      ref={form}
                      onSubmit={submittContact}
                    >
                      <div class="control-group">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Full Name"
                            id="name"
                            required
                            name="name"
                            onChange={getName}
                            value={name}
                          />
                          <p class="help-block"></p>
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="controls">
                          <input
                            type="email"
                            class="form-control"
                            placeholder="Email"
                            id="email"
                            required
                            name="email"
                            onChange={getemail}
                            value={email}
                          />
                        </div>
                      </div>

                      <div class="form-group">
                        <div class="controls">
                          <textarea
                            rows="10"
                            cols="100"
                            class="form-control"
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
                      {/* <a href="mailto:zemelatmen@gmail.com?subject='Hello from Abstract!'&body='Just popped in to say hello'">
                        Click to Send an Email{" "}
                      </a> */}
                      <button
                        type="submit"
                        class="btn btn-primary pull-right"
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

          <div class="container mb-4 map">
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
