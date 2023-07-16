import React, { useState, useEffect } from "react";

import Axios from "axios";

const Objective = () => {
  const [obgErr, setobgErr] = useState("");
  const [Obj, setObjs] = useState([]);

  const [Objective, setObj] = useState("");

  const getDetails = (e) => {
    setObj(e.target.value);
  };

  const Objsubmitt = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("type", "aboutPoint");
    formData.append("page", "about");
    formData.append("detailText", Objective);
    Axios.post(
      "http://localhost:1111/Admin/editAbout/saveOthersText",
      formData,
      {
        withCredentials: true,
      }
    ).then((response) => {
      console.log(response);
      if (response.data.msg === "OtherTexts POSTED") {
        setobgErr(false);
        setObj("");
        // return window.location.reload();
        setObjs([...Obj, { detailText: Objective }]);
      } else {
        setobgErr(response.data);
      }
    });
  };
  //fetch obj
  useEffect(() => {
    Axios.get(`http://localhost:1111/all/OthersText`, {
      withCredentials: true,
    }).then((response) => {
      setObjs(response.data);
    });
  }, []);
  const Delete = (val) => {
    Axios.delete(
      `http://localhost:1111/Admin/editAbout/deleteObjective/${val}`,
      {
        withCredentials: true,
      }
    ).then((response) => {
      window.location.reload();
    });
  };
  return (
    <div>
      <div className="section-header">
        <h2>Objectives</h2>
      </div>
      {Obj.length > 0 ? (
        Obj.map((val, index) => (
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
        <>Insert Objective</>
      )}

      <form method="POST" name="sentMessage">
        <div className="control-group">
          <div className="form-group">
            <textarea
              className="form-control"
              rows="8"
              placeholder="Objectives"
              id="name"
              required
              name="detailText"
              onChange={getDetails}
              data-validation-required-message="Please enter your name"
              value={Objective}
            ></textarea>
            <span className="text-danger">{obgErr} </span>
          </div>
        </div>
        <button type="submit" className="btn btn-primary " onClick={Objsubmitt}>
          Add
        </button>
        <br />
      </form>
    </div>
  );
};

export default Objective;
