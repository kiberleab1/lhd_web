import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Footer from "../../Footer/Footer";
import Axios from "axios";

import Firm from "./Firm";
import Vision from "./Vision";
import Mission from "./Mission";
import Team from "./TeamText";
import Objective from "./Objective";
import TeamMember from "./TeamMember";
import OperationalCapacity from "./OperationalCapacity";
// import TestimonialsText from "./TestimonialsText";
import AddTestimonialText from "./AddTestimonialText";
const EditAbout = () => {
  //delete testimonies

  return (
    <div>
      <section id="innerBanner">
        <div className="inner-content">
          <h2>
            <span>Add or Edit About Us</span>
            <br />
            Striving for Excellence and Lasting Change!
          </h2>
          <div></div>
        </div>
      </section>
      <main id="main">
        <section id="about" className="wow fadeInUp">
          <div className="container">
            <div className="row">
              <Firm />
            </div>
          </div>
        </section>
        <section id="about" className="wow fadeInUp">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 about-img">
                <img src="/img/about.svg" alt="" />
              </div>

              <div className="col-lg-6 content">
                <div className="container">
                  <Vision />

                  <div className="container">
                    <Mission />

                    <Objective />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="wow fadeInUp">
          <div className="container">
            <div className="row">
              <div className="container">
                <Team />
              </div>
            </div>
          </div>
        </section>

        <TeamMember />

        {/* #team */}
        <section id="about" className="wow fadeInUp">
          <div className="container">
            <OperationalCapacity />
          </div>
        </section>
        {/* Testimonials Section */}

        <AddTestimonialText />
      </main>
      <Footer />
    </div>
  );
};

export default EditAbout;
