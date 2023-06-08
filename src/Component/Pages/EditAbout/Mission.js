import React, { useState, useEffect } from "react";

import Axios from "axios";
const Mission = () => {
  const [missionErr, setMissionERR] = useState("");
  const [mission, setMission] = useState("");
  const [miss, setMiss] = useState([]);

  const getMission = (e) => {
    setMission(e.target.value);
  };
  const MissionSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("type", "");
    formData.append("page", "mision");
    formData.append("detailText", mission);
    Axios.post(
      "http://localhost:1111/Admin/editAbout/saveOthersText",
      formData,
      {
        withCredentials: true,
      }
    ).then((response) => {
      if (response.data.msg === "OtherTexts POSTED") {
        setMissionERR(false);
        setMission("");
        //  sessionStorage.setItem("userId", response.data.id);
        // dispatch(addRole(response.data.msg)); //redux
        // return push("/Admin/editAbout");
        setMiss([...miss, { detailText: mission }]);
      } else {
        setMissionERR(response.data);
      }
    });
  };
  useEffect(() => {
    Axios.get(`http://localhost:1111/mission/OthersText`, {
      withCredentials: true,
    }).then((response) => {
      if (response.data == [null]) {
        console.log("null");
      } else {
        setMiss([response.data]);
      }
    });
  }, []);

  const Delete = (val) => {
    Axios.delete(
      `http://localhost:1111/Admin/editAbout/deleteObjective/${val}`,
      {
        withCredentials: true,
      }
    ).then((response) => {
      window.location.reload(true);
    });
    // setMiss([[...miss]]);
  };
  return (
    <div className="section-header">
      <h2>Mission</h2>
      {/* mapping */}

      {miss.length > 0 ? (
        miss.map((val, index) => (
          <ul>
            <li text="Objectives" key={index}>
              <i className="icon ion-ios-checkmark-outline">{val.detailText}</i>
              <button
                onClick={() => Delete(val.id)}
                type="submit"
                className="btn btn-primary "
              >
                Delete
              </button>
              <br />
            </li>
          </ul>
        ))
      ) : (
        <>Insert Mission</>
      )}
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
              onChange={getMission}
              value={mission}
            ></textarea>
            <span className="text-danger">{missionErr} </span>
          </div>
        </div>
        <div id="success"></div>
        <br />
        <button
          type="submit"
          className="btn btn-primary pull-right"
          onClick={MissionSubmit}
        >
          Save
        </button>
        <br />
      </form>
    </div>
  );
};

export default Mission;
