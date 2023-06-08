import React, { useState, useEffect } from "react";

import Axios from "axios";
const Vision = () => {
  const [viss, setViss] = useState([]);
  const [Text, setText] = useState("");
  const [errors, setErr] = useState(false);

  const getText = (e) => {
    setText(e.target.value);
  };

  const submitt = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("type", "");
    formData.append("page", "vision");
    formData.append("detailText", Text);
    Axios.post(
      "http://localhost:1111/Admin/editAbout/saveOthersText",
      formData,
      {
        withCredentials: true,
      }
    ).then((response) => {
      if (response.data.msg === "OtherTexts POSTED") {
        setErr(false);
        setText("");
        setViss([...viss, { detailText: Text }]);
      } else {
        setErr(response.data);
      }
    });
  };
  const Delete = (val) => {
    Axios.delete(
      `http://localhost:1111/Admin/editAbout/deleteObjective/${val}`,
      {
        withCredentials: true,
      }
    ).then((response) => {
      window.location.reload(true);
    });
  };
  useEffect(() => {
    Axios.get(`http://localhost:1111/vission/OthersText`, {
      withCredentials: true,
    }).then((response) => {
      if (response.data == [null]) {
        console.log("null");
      } else {
        setViss([response.data]);
      }
    });
  }, []);
  return (
    <div className="section-header" text="VisionText">
      <h2>Vision</h2>

      {viss.length > 0 ? (
        viss.map((val, index) => (
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
        <>Insert vission</>
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
              onChange={getText}
              value={Text}
            ></textarea>
            <span className="text-danger">{errors}</span>
          </div>
        </div>
        <div id="success"></div>
        <br />
        <button
          type="submit"
          className="btn btn-primary pull-right"
          onClick={submitt}
        >
          Save
        </button>
        <br />
      </form>
    </div>
  );
};

export default Vision;
