import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Axios from "axios";
const EditExpFile = () => {
  const push = useNavigate();
  const { id } = useParams();
  const [err, setErr] = useState("");
  const [type, setType] = useState("");
  const [detailText, setDetailText] = useState("");
  const [Client, setClient] = useState("");
  const [lhd, setLhd] = useState("lhd");

  const getType = (e) => setType(e.target.value);
  const getDetailText = (e) => setDetailText(e.target.value);
  const getClient = (e) => setClient(e.target.value);

  useEffect(() => {
    const getFile = (id) => {
      Axios.get(`http://localhost:1111/one/expselect/${id}`, {
        withCredentials: true,
      }).then((response) => {
        console.log(response.data);
        setType(response.data.type);
        setDetailText(response.data.detailText);
        setClient(response.data.client);
        setErr(false);
      });
    };
    getFile(id);
  }, [id]);
  const submittExperince = (e) => {
    e.preventDefault();
    let formData = new FormData();

    formData.append("type", type);
    formData.append("detailText", detailText);
    formData.append("client", Client);
    formData.append("firm", lhd);
    Axios.put(`http://localhost:1111/Admin/ExperianceID/edit/${id}`, formData, {
      withCredentials: true,
    }).then((response) => {
      if (response.data.msg == "experince updated") {
        setErr(false);
        return push("/Admin/editExperiance");
      } else {
        setErr(response.data);
      }
    });
  };

  return (
    <div>
      <div class="row contact-info">
        <div class="col-lg-5"></div>
        <div class="col-lg-7">
          <div class="container">
            <div class="section-header" object="clientText">
              <h2>Add or Edit Experiance</h2>
            </div>
            <div class="form">
              {/* <!-- Form itself --> */}
              <form class="well" id="contactForm" method="POST">
                <div class="control-group">
                  <div class="form-group">
                    <select
                      name="type"
                      class="selectpicker form-control"
                      onChange={getType}
                      value={type}
                    >
                      <option value="strat">
                        Strategic and Training Materials
                      </option>
                      <option value="train">Providing Training</option>
                      <option value="assist">Technical Assistance</option>
                      <option value="propsal">Proposal Development</option>
                    </select>
                  </div>
                </div>
                <div class="control-group">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Experiance Detail"
                      id="name"
                      required
                      name="detailText"
                      onChange={getDetailText}
                      value={detailText}
                    />
                  </div>
                </div>
                <div class="control-group">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Client"
                      id="name"
                      required
                      name="client"
                      onChange={getClient}
                      value={Client}
                    />
                  </div>
                </div>
                <div class="control-group">
                  <div class="form-group">
                    <input
                      type="hidden"
                      class="form-control"
                      id="name"
                      required
                      field="firm"
                      name="firm"
                      value={lhd}
                    />
                  </div>
                </div>

                <div id="success">{err}</div>
                <br />

                <button
                  type="submit"
                  class="btn btn-primary pull-right"
                  onClick={submittExperince}
                >
                  Add
                </button>
                <br />
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EditExpFile;
