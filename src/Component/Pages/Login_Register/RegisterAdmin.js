import React, { useState } from "react";
import Axios from "axios";
const RegisterAdmin = () => {
  const [success, setsuccess] = useState("");
  const [err, setErr] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const getemail = (e) => {
    setemail(e.target.value);
  };
  const getpassword = (e) => {
    setpassword(e.target.value);
  };
  const addAdmin = (e) => {
    e.preventDefault();
    let formData = new FormData();

    formData.append("email", email);
    formData.append("password", password);

    Axios.post(`http://localhost:1111/register_user`, formData, {
      withCredentials: true,
    }).then((response) => {
      if (response.data.msg == "User POSTED") {
        setemail("");
        setpassword("");
        setErr("");
        setsuccess("Successfully admin added");
        // return push("/Admin/Home");
      } else {
        setErr(response.data);
      }
    });
  };
  return (
    <div>
      <section
        class="site-hero site-hero-innerpage overlay"
        data-stellar-background-ratio="0.5"
        // style="background-image: url(images/big_image_1.jpg);"
      >
        <div class="container">
          <div class="row align-items-center site-hero-inner justify-content-center">
            <div class="col-md-12 text-center"></div>
          </div>
        </div>
      </section>
      <section class="site-section">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h3 class="mb-5">Register</h3>

              <form
                autocomplete="off"
                method="post"
                class="m-t"
                role="form"
                data-toggle="validator"
              >
                <div class="row">
                  <div class="col-md-12 form-group">
                    <div class="form-group input-group has-feedback">
                      <span class="input-group-addon">
                        {" "}
                        <span class="glyphicon glyphicon-envelope"></span>
                      </span>{" "}
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email Address"
                        class="form-control"
                        onChange={getemail}
                        value={email}
                        required
                      />{" "}
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-12 form-group">
                    <div class="form-group input-group has-feedback">
                      <input
                        type="password"
                        id="password"
                        height="25px"
                        name="password"
                        placeholder="password"
                        class="form-control"
                        onChange={getpassword}
                        value={password}
                        required
                      />{" "}
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6 form-group"></div>

                  <div class="text-success">{success}</div>
                  <div class="text-danger">{err}</div>
                </div>
                <div class="row">
                  <div class="col-md-6 form-group">
                    <button
                      type="submit"
                      class="btn btn-lg btn-primary"
                      style={{ marginLight: 10, width: 274 }}
                      onClick={addAdmin}
                    >
                      Register
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div class="col-md-1"></div>
            <div class="col-md-5">
              <p class="mb-5" />
              <img src="images/img_4.jpg" alt="" class="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default RegisterAdmin;
