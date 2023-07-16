import React, { useState } from "react";

import Axios from "axios";
const Team = () => {
  const [teamText, setteamText] = useState("");
  const [errTeamTxt, setTeamtxtErr] = useState("");
  const getTeamText = (e) => {
    setteamText(e.target.value);
  };
  const submitTeamText = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("detailText", teamText);
    formData.append("page", "teamText");
    formData.append("type", "");
    Axios.post(
      "http://localhost:1111/Admin/editAbout/saveOthersText",
      formData,
      {
        withCredentials: true,
      }
    ).then((response) => {
      if (response.data.msg === "OtherTexts POSTED") {
        setTeamtxtErr(false);
        setteamText("");
      } else {
        setTeamtxtErr(response.data);
      }
    });
  };
  return (
    <div className="section-header">
      <h2>Our Team</h2>
      <form name="sentMessage" className="well" id="contactForm" row="8">
        <div className="control-group">
          <div className="form-group">
            <textarea
              className="form-control"
              rows="8"
              placeholder="Operational Capacity"
              id="name"
              required
              name="detailText"
              data-validation-required-message="Please enter your name"
              onChange={getTeamText}
              value={teamText}
            ></textarea>
          </div>
        </div>
        <div id="success">{errTeamTxt}</div>
        <br />

        <button
          type="submit"
          className="btn btn-primary pull-right"
          onClick={submitTeamText}
        >
          Save
        </button>
        <br />
      </form>
    </div>
  );
};

export default Team;
