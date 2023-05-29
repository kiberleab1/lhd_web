import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
const Vaccancy = () => {
  const [Vaccancy, setVaccancy] = useState([]);
  useEffect(() => {
    Axios.get(`http://localhost:1111/vaccancy/getall`, {
      withCredentials: true,
    }).then((response) => {
      setVaccancy(response.data);
    });
  }, []);
  return (
    <div>
      {" "}
      <section id="innerBanner">
        <div class="inner-content">
          <h2>
            <span>Add or Edit Vaccancy </span>
            <br />
            Striving for Excellence &amp; Lasting Change!!
          </h2>
          <div></div>
        </div>
      </section>
      <main id="main">
        <section id="contact" class="wow fadeInUp">
          {Vaccancy.length > 0 ? (
            Vaccancy.map((vacc, index) => (
              <div text="vaccancys-list">
                <h4 class="col-md-4 offset-md-2">TITLE:</h4>
                <p class="col-md-4 offset-md-3">{vacc.title}</p>
                <h4 class="col-md-4 offset-md-2">MAJOR RESPONSIBILITIES:</h4>
                <p class="col-md-4 offset-md-3">{vacc.responsblities}</p>
                <h4 class="col-md-4 offset-md-2">POSTION:</h4>
                <p class="col-md-4 offset-md-3">{vacc.position}</p>

                {/* <div id="`demo`" class="collapse"> */}
                <h4 class="col-md-4 offset-md-2">QUALIFICATION:</h4>
                <p class="col-md-4 offset-md-3">{vacc.Qualification}</p>
                <h4 class="col-md-4 offset-md-2">Conditions:</h4>
                <p class="col-md-4 offset-md-3">{vacc.conditions}</p>
                <h4 class="col-md-4 offset-md-2">DeadLine:</h4>
                <p class="col-md-4 offset-md-3">{vacc.deadline}</p>
                <Link
                  class="col-md-4 offset-md-3"
                  to={`/lhd/Vaccancy/apply/${vacc.id}`}
                >
                  {/* <input type="hidden" name="appId" value="vaccID" /> */}
                  <button type="submit" class="btn btn-primary ">
                    Apply
                  </button>
                  <br />
                </Link>
              </div>
            ))
          ) : (
            <>No Vaccancy added yet!</>
          )}

          <a
            class="col-md-4 offset-md-4"
            ass="btn btn-info"
            data-toggle="collapse"
            data-target="#demo"
          >
            See More
          </a>
          {/* </div> */}
        </section>
      </main>
    </div>
  );
};

export default Vaccancy;
