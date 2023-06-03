import React, { useState } from "react";
import Axios from "axios";
import "./style.css";
import { useDispatch } from "react-redux";
import { addRole } from "../../../Redux/Slice";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const dispatch = useDispatch();
  const push = useNavigate();
  const [errors, setErr] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const getEmail = (e) => {
    setEmail(e.target.value);
  };
  const getPassword = (e) => {
    setPassword(e.target.value);
  };
  const submitt = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    Axios.post("http://localhost:1111/login", formData, {
      withCredentials: true,
    }).then((response) => {
      if (response.data.msg === "admin") {
        setErr(false);
        //  sessionStorage.setItem("userId", response.data.id);
        dispatch(addRole(response.data.msg)); //redux
        push("/Admin/Home");
        return window.location.reload();
      } else {
        setErr(response.data);
      }
    });
  };

  return (
    <div className="loginpage">
      <section
        className="site-hero site-hero-innerpage overlay"
        data-stellar-background-ratio="0.5"
        // style="background-image: url(images/big_image_1.jpg);"
      >
        <div className="container">
          <div className="row align-items-center site-hero-inner justify-content-center">
            <div className="col-md-12 text-center"></div>
          </div>
        </div>
      </section>
      <section className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="mb-5">login Form</h2>
              <form>
                {errors ? (
                  <div classNameName="alert alert-danger">
                    Invalid username or password.
                  </div>
                ) : (
                  <div></div>
                )}

                {/* <div th:if="${param.logout}">
                    <div className="alert alert-info">
                      You have been logged out.
                    </div>
                  </div> */}
                <div className="row">
                  <div className="col-md-12 form-group">
                    <label for="username">Email</label>:
                    <input
                      type="email"
                      id="username"
                      name="email"
                      className="form-control"
                      autofocus="autofocus"
                      placeholder="Email"
                      autoComplete="off"
                      onChange={getEmail}
                      value={email}
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 form-group">
                    <label for="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="form-control"
                      placeholder="**********"
                      required
                      minlength="8"
                      onChange={getPassword}
                      value={password}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 form-group">
                    {/* <!-- <input type="submit" value="login" className="btn btn-primary"> --> */}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="submit"
                      name="login-submit"
                      id="login-submit"
                      className="form-control btn btn-primary"
                      value="Log In"
                      onClick={submitt}
                    />{" "}
                    {/* <input
                      type="hidden"
                      name="${_csrf.parameterName}"
                      value="${_csrf.token}"
                    /> */}
                  </div>
                </div>
              </form>
              <div className="col-md-1"></div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section-cover"
        data-stellar-background-ratio="0.5"
        // style="background-image: url(images/img_5.jpg);"
      >
        <div className="container">
          <div className="row justify-content-center align-items-center intro">
            <div className="col-md-9 text-center element-animate">
              <div className="btn-play-wrap">
                <a
                  href="https://vimeo.com/channels/staffpicks/93951774"
                  className="btn-play popup-vimeo "
                >
                  <span className="ion-ios-play"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer id="footer" className="midnight-blue">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              &copy; Gp Theme. All Rights Reserved.
              <div className="credits"></div>
            </div>
            <div className="col-sm-6">
              <ul className="pull-right">
                <li>
                  <a href="/lhd/about">Home</a>
                </li>
                <li>
                  <a href="/">About Us</a>
                </li>
                <li>
                  <a href="/">Faq</a>
                </li>
                <li>
                  <a href="/">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Login;
