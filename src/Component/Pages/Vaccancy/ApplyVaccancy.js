import React, { useRef, useState } from "react";
import Axios from "axios";
const ApplyVaccancy = () => {
  const inputRef = useRef(null);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const [err, seterr] = useState("");
  const [img, setimg] = useState("");
  const getname = (e) => {
    setname(e.target.value);
  };
  const getemail = (e) => {
    setemail(e.target.value);
  };
  const getmessage = (e) => {
    setmessage(e.target.value);
  };
  const getimg = (e) => {
    setimg(e.target.files[0]);
    console.log(e.target.files[0]);
  };
  const sumbittClint = (e) => {
    e.preventDefault();
    let formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);
    formData.append("img", img);

    Axios.post("http://localhost:1111/lhd/applyVaccancy", formData, {
      withCredentials: true,
    }).then((response) => {
      if (response.data.msg == "Thanks We will contact u") {
        seterr(response.data.msg);
        setname("");
        setemail("");
        setmessage("");
        inputRef.current.value = null;
        // return window.location.reload();
      } else {
        seterr(response.data);
      }
    });
  };
  return (
    <div>
      <section id="innerBanner">
        <div class="inner-content">
          <h2>
            <span>Apply on Vaccancy</span>
            <br />
            Straving for Excellence and Lasting Change!
          </h2>
          <div></div>
        </div>
      </section>
      <main id="main">
        <section id="contact" class="wow fadeInUp">
          <div class="container">
            <div class="row contact-info">
              <div class="col-lg-5">
                <div class="contact-address">
                  <i class="ion-ios-location-outline"></i>
                  <h3>Address</h3>
                  <address>Yeka Sub City, Addis Ababa, Ethiopia</address>
                </div>
                <div class="contact-phone">
                  <i class="ion-ios-telephone-outline"></i>
                  <h3>Phone Number</h3>
                  <p>
                    <a href="tel:+251">+251 11*******</a>
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
                      enctype="multipart/form-data"
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
                            onChange={getname}
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
                            maxlength="999"
                            style={{ resize: "none" }}
                            name="message"
                            onChange={getmessage}
                            value={message}
                          ></textarea>
                        </div>
                      </div>

                      <div class="control-group">
                        <div class="form-group">
                          <span>CV</span>
                          <input
                            type="file"
                            accept=".pdf"
                            name="img"
                            class="form-control"
                            placeholder="logo"
                            id="img"
                            onChange={getimg}
                            ref={inputRef}
                            required
                          />
                        </div>
                      </div>
                      <div id="success">{err}</div>

                      <button
                        type="submit"
                        class="btn btn-primary pull-right"
                        onClick={sumbittClint}
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
              allowfullscreen
            ></iframe>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ApplyVaccancy;
