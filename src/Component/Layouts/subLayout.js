import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Logo from "../../img/logo.svg";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import LogOut from "../Pages/Login_Register/LogOut";
function getUrl() {
  if (window.location.href == "http://localhost:3000/login") {
    return true;
  } else {
    return false;
  }
}
let url = getUrl();
const SubLayout = () => {
  const push = useNavigate();
  const toKnowRole = useSelector((state) => state.userRole);
  const incomingRole = JSON.stringify(toKnowRole.todoReducer[0]);
  const adminRole = JSON.stringify({ text: "admin" });
  const LogOut = () => {
    localStorage.clear("persist:root");
    window.location.reload("/login");
  };
  console.log(url);
  console.log(adminRole);
  console.log(incomingRole);
  if (url || adminRole !== incomingRole) {
    return (
      <div>
        <header id="header">
          <nav class="navbar navbar-fixed-top" role="banner">
            <div class="container">
              <div class="navbar-header">
                <button
                  type="button"
                  class="navbar-toggle"
                  data-toggle="collapse"
                  data-target=".navbar-collapse"
                >
                  <span class="sr-only">Toggle navigation</span>{" "}
                  <span class="icon-bar"></span> <span class="icon-bar"></span>{" "}
                  <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" thref="/Home">
                  Le-monde
                </a>
              </div>

              <div class="collapse navbar-collapse navbar-right">
                <ul class="nav navbar-nav">
                  <li class="active">
                    <NavLink to="/lhd/Home">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="about-us.html">About Us</NavLink>
                  </li>
                  <li>
                    <NavLink to="services.html">Services</NavLink>
                  </li>
                  <li>
                    <NavLink to="portfolio.html">Experiance</NavLink>
                  </li>
                  <li>
                    <NavLink to="blog.html">Blog</NavLink>
                  </li>
                  <li>
                    <NavLink to="contact-us.html">Contact</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <div>
          <Outlet />
        </div>
      </div>
    );
  } else if (adminRole == incomingRole) {
    return (
      <div>
        <header id="header">
          <div class="container">
            <div id="logo" class="pull-left">
              <h1>
                <a to="/Admin/Home" class="scrollto">
                  <i class="icon">
                    <img width="50" src={Logo} />
                  </i>{" "}
                  Le Monde{" "}
                </a>
              </h1>
            </div>

            <nav id="nav-menu-container">
              <ul class="nav-menu">
                <li>
                  <NavLink to="/Admin/Home">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/Admin/editAbout">abt & testimony</NavLink>
                </li>
                <li>
                  <NavLink to="/Admin/editService">Services</NavLink>
                </li>
                <li>
                  <NavLink to="/Admin/editExperiance">Experience</NavLink>
                </li>
                <li>
                  <NavLink to="/Admin/editClient">Clients</NavLink>
                </li>
                <li class="menu-active menu-has-children">
                  <>More</>
                  <ul>
                    <li>
                      <NavLink to="/Admin/editVaccancy">Edit Vacancy</NavLink>
                    </li>
                    <li>
                      <NavLink to="/Admin/Register">Add Admin</NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink to="/Admin/editContact">Contact</NavLink>
                </li>
                <li>
                  <button onClick={LogOut}>Logout</button>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <div>
          <Outlet />
        </div>
      </div>
    );
  }
};

export default SubLayout;
