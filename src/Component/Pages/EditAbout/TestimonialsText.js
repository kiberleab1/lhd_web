import React, { useState } from "react";
import Axios from "axios";
const TestimonialsText = () => {
  const [Testmony, setTestmony] = useState("");
  const [testErr, settestErr] = useState("");
  const getTestmony = (e) => {
    setTestmony(e.target.value);
  };
  const submitTestimonial = (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("detailText", Testmony);
    formData.append("page", "Testimonial");
    formData.append("type", "");
    Axios.post(
      "http://localhost:1111/Admin/editAbout/saveOthersText",
      formData,
      {
        withCredentials: true,
      }
    ).then((response) => {
      if (response.data.msg === "OtherTexts POSTED") {
        settestErr(false);
        setTestmony("");
      } else {
        settestErr(response.data);
      }
    });
  };
  return (
    <div className="section-header" text="Testimonial">
      <h2>Testimonials Text</h2>
      <form name="sentMessage" className="well" id="contactForm">
        <div className="control-group">
          <div className="form-group">
            <textarea
              className="form-control"
              rows="8"
              placeholder="About Clients"
              id="name"
              required
              name="detailText"
              onChange={getTestmony}
              value={Testmony}
            ></textarea>
          </div>
        </div>
        <div id="success">{testErr}</div>
        <br />

        <button
          onClick={submitTestimonial}
          type="submit"
          className="btn btn-primary pull-right"
        >
          Save
        </button>
        <br />
      </form>
    </div>
  );
};

export default TestimonialsText;
