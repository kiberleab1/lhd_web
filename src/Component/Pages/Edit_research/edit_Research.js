import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Axios from "axios";
import Input from "../InputFormat";
const EditResearch = () => {
  const push = useNavigate();

  const { id } = useParams();
  const [Rtypes, setRtype] = useState("");
  const [titles, setTitle] = useState("");
  const [methodlogys, setmethodlogy] = useState("");
  const [clients, setclient] = useState("");
  const [objectives, setobjective] = useState("");
  const [reerr, setEerr] = useState("");

  const getResearchType = (e) => {
    setRtype(e.target.value);
  };
  const getTitle = (e) => {
    setTitle(e.target.value);
  };
  const getRclient = (e) => {
    setclient(e.target.value);
  };
  const getmethodlogy = (e) => {
    setmethodlogy(e.target.value);
  };
  const getobjective = (e) => {
    setobjective(e.target.value);
  };
  useEffect(() => {
    const getFile = (id) => {
      Axios.get(`http://localhost:1111/research/one/${id}`, {
        withCredentials: true,
      }).then((response) => {
        setRtype(response.data.type);
        setTitle(response.data.title);
        setmethodlogy(response.data.methodlogy);
        setclient(response.data.client);
        setobjective(response.data.objective);
      });
    };
    getFile(id);
  }, [id]);
  const submittResearch = (e) => {
    e.preventDefault();
    let formData = new FormData();

    formData.append("Rtype", Rtypes);
    formData.append("title", titles);
    formData.append("client", clients);
    formData.append("methodlogy", methodlogys);
    formData.append("objective", objectives);
    Axios.put(`http://localhost:1111/Admin/editResearch/${id}`, formData, {
      withCredentials: true,
    }).then((response) => {
      if (response.data.msg === "research updated") {
        return push("/Admin/editExperiance");
      } else {
        setEerr(response.data);
      }
    });
  };
  return (
    <div>
      <div className="container">
        <div className="section-header" object="clientText">
          <h2>Add or Edit Research</h2>
        </div>
        <div className="form">
          {/* <!-- Form itself --> */}
          <form name="sentMessage" className="well" id="contactForm">
            <div className="control-group">
              <div className="form-group">
                <select
                  name="Rtype"
                  className="selectpicker form-control"
                  onChange={getResearchType}
                  value={Rtypes}
                >
                  <option value="health">Health</option>
                  <option value="food">
                    Nutrition, Livelihoods and Food Security
                  </option>
                  <option value="water">
                    WATER, SANITATION, AND HYGIENE (WASH)
                  </option>
                  <option value="hiv">HIV and AIDS</option>
                </select>
              </div>
            </div>
            <div className="control-group">
              <div className="form-group">
                <Input
                  TextType="text"
                  InputClassName="form-control"
                  OnPlaceHolder="Title"
                  id="name"
                  required
                  NameOfInput="title"
                  OnChangingInputs={getTitle}
                  ValueOfInput={titles}
                />
              </div>
            </div>
            <div className="control-group">
              <div className="form-group">
                <Input
                  TextType="text"
                  InputClassName="form-control"
                  OnPlaceHolder="Client"
                  id="name"
                  required
                  NameOfInput="client"
                  OnChangingInputs={getRclient}
                  ValueOfInput={clients}
                />
              </div>
            </div>
            <div className="control-group">
              <div className="form-group">
                <Input
                  TextType="text"
                  InputClassName="form-control"
                  OnPlaceHolder="Methodlogy"
                  id="name"
                  required
                  NameOfInput="methodlogy"
                  OnChangingInputs={getmethodlogy}
                  ValueOfInput={methodlogys}
                />
              </div>
            </div>
            <div className="control-group">
              <div className="form-group">
                <Input
                  TextType="text"
                  InputClassName="form-control"
                  OnPlaceHolder="Objective"
                  id="name"
                  required
                  NameOfInput="objective"
                  OnChangingInputs={getobjective}
                  ValueOfInput={objectives}
                />
              </div>
            </div>

            <div id="success">{reerr}</div>
            <br />

            <button
              type="submit"
              className="btn btn-primary pull-right"
              onClick={submittResearch}
            >
              Add
            </button>
            <br />
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EditResearch;
