import React, { useState } from "react";

import Axios from "axios";
const OperationalCapacity = () => {
  const [OpText, setOpText] = useState("");
  const [opErr, setopErr] = useState("");
  const getOpText = (e) => {
    setOpText(e.target.value);
  };
  const submittOperation = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("detailText", OpText);
    formData.append("page", "operational");
    formData.append("type", "");
    Axios.post(
      "http://localhost:1111/Admin/editAbout/saveOthersText",
      formData,
      {
        withCredentials: true,
      }
    ).then((response) => {
      if (response.data.msg === "OtherTexts POSTED") {
        setopErr(false);
        setOpText("");
      } else {
        setopErr(response.data);
      }
    });
  };
  return (
    <div className="section-header" text="OperationalCapacity">
      <h2>Operational Capacity</h2>
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
              onChange={getOpText}
              value={OpText}
            ></textarea>
          </div>
        </div>
        <div id="success">{opErr}</div>
        <br />

        <button
          onClick={submittOperation}
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

export default OperationalCapacity;
