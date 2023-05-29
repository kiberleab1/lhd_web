import React from "react";
import IndexImg from "../../img/intro-carousel/women.png";
import AbIndexImg from "../../img/about.svg";
import ImgClint1 from "../../img/clients/client-1.png";
import ImgClint2 from "../../img/clients/client-2.png";
import ImgClint3 from "../../img/clients/client-3.png";
import ImgClint4 from "../../img/clients/client-4.png";
import ImgClint5 from "../../img/clients/client-5.png";
import ImgClint6 from "../../img/clients/client-6.png";
import { FcCheckmark } from "react-icons/fc";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { SiMicrostrategy } from "react-icons/si";
import { BsTools } from "react-icons/bs";
import { SiGenius } from "react-icons/si";
import { BsFillMegaphoneFill } from "react-icons/bs";
import { AiFillTrophy } from "react-icons/ai";
const Index = () => {
  return (
    <div>
      <section id="hero" class="clearfix">
        <div class="container">
          <div class="hero-banner">
            <img src={IndexImg} alt="IndexImg" class="img-fluid" />
          </div>

          <div class="hero-content">
            <h2>
              Business Growth
              <br />
              <span> Consulting</span>
            </h2>
            <div>
              <a href="#" class="btn-banner">
                Our Service
              </a>
            </div>
          </div>
        </div>
      </section>
      <main id="main">
        <section id="about" class="wow fadeInUp">
          <div class="container">
            <div class="section-header">
              <h2>About</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolores quae porro consequatur aliquam, incidunt eius magni
                provident, doloribus omnis minus ovident, doloribus omnis minus
                temporibus perferendis nesciunt..
              </p>
            </div>
            <div class="row">
              <div class="col-lg-6 about-img">
                <img src={AbIndexImg} alt="img/about.svg" />
              </div>

              <div class="col-lg-6 content">
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing</h2>
                <h3>
                  Dolores quae porro consequatur aliquam, incidunt eius magni
                  provident, doloribus omnis minus ovident
                </h3>
                <p>
                  Consectetur adipisicing elit. Dolores quae porro consequatur
                  aliquam, incidunt fugiat. Dolores quae porro consequatur
                  aliquam, incidunt fugiat culpa esse aute nulla. malis nulla
                  duis fugiat
                </p>
                <ul>
                  <li>
                    {/* <i class="icon ion-ios-checkmark-outline"></i> */}
                    <FcCheckmark /> Dolores quae porro consequatur aliquam,
                    incidunt fugiat culpa.
                  </li>
                  <li>
                    {/* <i class="icon ion-ios-checkmark-outline"></i> */}
                    <FcCheckmark /> Dolores quae porro consequatur aliquam,
                    culpa esse aute nulla.
                  </li>
                  <li>
                    {/* <i class="icon ion-ios-checkmark-outline"> </i>*/}
                    <FcCheckmark /> Dolores quae porro esse aute nulla. malis
                    nulla duis fugiat
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="services">
          <div class="container">
            <div class="section-header">
              <h2>Services</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolores quae porro consequatur aliquam, incidunt fugiat culpa
                esse aute nulla. malis nulla duis fugiat culpa esse aute nulla
                ipsum velit export irure minim illum fore
              </p>
            </div>

            <div class="row">
              <div class="col-lg-4">
                <div class="box wow fadeInLeft">
                  <div class="icon">
                    {/* <i class="icon icon-briefcase"></i> */}
                    <BsFillBriefcaseFill />
                  </div>
                  <h4 class="title">
                    <a href="">Marketing</a>
                  </h4>
                  <p class="description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolores quae porro consequatur aliquam, incidunt fugiat
                    culpa esse aute nulla.
                  </p>
                </div>
              </div>

              <div class="col-lg-4">
                <div class="box wow fadeInRight">
                  <div class="icon">
                    <SiMicrostrategy />
                    {/* <i class="icon icon-strategy"></i> */}
                  </div>
                  <h4 class="title">
                    <a href="">Consulting</a>
                  </h4>
                  <p class="description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolores quae porro consequatur aliquam, incidunt fugiat
                    culpa esse aute nulla.
                  </p>
                </div>
              </div>

              <div class="col-lg-4">
                <div class="box wow fadeInLeft" data-wow-delay="0.2s">
                  <div class="icon">
                    {/* <i class="icon icon-tools"></i> */}
                    <BsTools />
                  </div>
                  <h4 class="title">
                    <a href="">Development</a>
                  </h4>
                  <p class="description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolores quae porro consequatur aliquam, incidunt fugiat
                    culpa esse aute nulla.
                  </p>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="box wow fadeInLeft">
                  <div class="icon">
                    <SiGenius />
                    {/* <i class="icon icon-genius"></i> */}
                  </div>
                  <h4 class="title">
                    <a href="">Financial</a>
                  </h4>
                  <p class="description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolores quae porro consequatur aliquam, incidunt fugiat
                    culpa esse aute nulla.
                  </p>
                </div>
              </div>

              <div class="col-lg-4">
                <div class="box wow fadeInRight">
                  <div class="icon">
                    <BsFillMegaphoneFill />
                  </div>
                  <h4 class="title">
                    <a href="">Consulting</a>
                  </h4>
                  <p class="description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolores quae porro consequatur aliquam, incidunt fugiat
                    culpa esse aute nulla.
                  </p>
                </div>
              </div>

              <div class="col-lg-4">
                <div class="box wow fadeInLeft" data-wow-delay="0.2s">
                  <div class="icon">
                    {/* <i class="icon icon-trophy"></i> */}
                    <AiFillTrophy />
                  </div>
                  <h4 class="title">
                    <a href="">Quality</a>
                  </h4>
                  <p class="description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolores quae porro consequatur aliquam, incidunt fugiat
                    culpa esse aute nulla.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="clients" class="wow fadeInUp">
          <div class="container">
            <div class="section-header">
              <h2>Clients</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolores quae porro consequatur aliquam, incidunt fugiat culpa
                esse aute nulla. duis fugiat culpa esse aute nulla ipsum velit
                export irure minim illum fore
              </p>
            </div>

            <div class="owl-carousel clients-carousel">
              <img src={ImgClint1} alt="client-1.png" />{" "}
              <img src={ImgClint2} alt="" /> <img src={ImgClint5} alt="" />{" "}
              <img src={ImgClint3} alt="" /> <img src={ImgClint6} alt="" />{" "}
              <img src={ImgClint4} alt="" />
            </div>
          </div>
        </section>
        <section id="testimonials" class="wow fadeInUp">
          <div class="container">
            <div class="section-header">
              <h2>Testimonials</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolores quae porro consequatur aliquam, incidunt fugiat culpa
                esse aute nulla. duis fugiat culpa esse aute nulla ipsum velit
                export irure minim illum fore
              </p>
            </div>
            <div class="owl-carousel testimonials-carousel">
              <div class="testimonial-item">
                <p>
                  Dolores quae porro consequatur aliquam, incidunt fugiat culpa
                  esse aute nulla. duis fugiat culpa esse aute nulla ipsum velit
                  export irure minim illum fore
                </p>
                <h3>Mrio James</h3>
                <h4>CEO &amp; Founder</h4>
              </div>

              <div class="testimonial-item">
                <p>
                  Dolores quae porro consequatur aliquam, incidunt fugiat culpa
                  esse aute nulla. duis fugiat culpa esse aute nulla ipsum velit
                  export irure minim illum fore
                </p>
                <h3>Finton Gofnes</h3>
                <h4>CTO</h4>
              </div>

              <div class="testimonial-item">
                <p>
                  Dolores quae porro consequatur aliquam, incidunt fugiat culpa
                  esse aute nulla. duis fugiat culpa esse aute nulla ipsum velit
                  export irure minim illum fore
                </p>
                <h3>Marcus Kell</h3>
                <h4>Marketing</h4>
              </div>

              <div class="testimonial-item">
                <p>
                  Dolores quae porro consequatur aliquam, incidunt fugiat culpa
                  esse aute nulla. duis fugiat culpa esse aute nulla ipsum velit
                  export irure minim illum fore
                </p>
                <h3>Williams Belly</h3>
                <h4>Accounts</h4>
              </div>

              <div class="testimonial-item">
                <p>
                  Dolores quae porro consequatur aliquam, incidunt fugiat culpa
                  esse aute nulla. duis fugiat culpa esse aute nulla ipsum velit
                  export irure minim illum fore
                </p>
                <h3>Larry Hanson</h3>
                <h4>Investor</h4>
              </div>
            </div>
          </div>
        </section>
        <section id="call-to-action" class="wow fadeInUp">
          <div class="container">
            <div class="row">
              <div class="col-lg-9 text-center text-lg-left">
                <h3 class="cta-title">Get Our Service</h3>
                <p class="cta-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolores quae porro consequatur aliquam, incidunt fugiat culpa
                  esse aute nulla cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </p>
              </div>
              <div class="col-lg-3 cta-btn-container text-center">
                <a class="cta-btn align-middle" href="/lhd/Contact">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
