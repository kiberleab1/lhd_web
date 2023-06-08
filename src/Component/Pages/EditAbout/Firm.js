import React, { useState } from "react";

import Axios from "axios";
const Firm = () => {
  const [Firmerr, setFirmerr] = useState("");
  const [firm, setFirm] = useState("");
  const getfirmDetail = (e) => {
    setFirm(e.target.value);
  };
  const submittFirm = (e) => {
    e.preventDefault();
    let formData = new FormData();

    formData.append("detailText", firm);
    formData.append("page", "firm");
    formData.append("type", "");
    Axios.post(
      "http://localhost:1111/Admin/editAbout/saveOthersText",
      formData,
      {
        withCredentials: true,
      }
    ).then((response) => {
      console.log(response.data);
      if (response.data.msg === "OtherTexts POSTED") {
        setFirmerr(false);
        setFirm("");
      } else {
        setFirmerr(response.data);
      }
    });
  };
  return (
    <div className="container">
      <div className="section-header" text="FirmText">
        <h2>Our Firm</h2>
        <form name="sentMessage" className="well" id="contactForm">
          <div className="control-group">
            <div className="form-group">
              <textarea
                className="form-control"
                rows="8"
                placeholder="Operational Capacity"
                id="name"
                required
                name="detailText"
                onChange={getfirmDetail}
                value={firm}
              ></textarea>
            </div>
          </div>
          <div id="success">{Firmerr}</div>
          <br />
          <button
            onClick={submittFirm}
            type="submit"
            className="btn btn-primary pull-right"
          >
            Save
          </button>
          <br />
        </form>
      </div>
    </div>
  );
};

export default Firm;
