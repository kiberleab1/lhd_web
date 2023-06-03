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
  const toKnowRole = useSelector((state) => state.userRole);
  const incomingRole = JSON.stringify(toKnowRole.todoReducer[0]);
  const adminRole = JSON.stringify({ text: "admin" });
  const LogOut = () => {
    localStorage.clear("persist:root");
    window.location.reload("/login");
  };

  if (url || adminRole !== incomingRole) {
    return (
      <div>
        <header id="header">
          <nav className="navbar navbar-fixed-top" role="banner">
            <div className="container">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target=".navbar-collapse"
                >
                  <span className="sr-only">Toggle navigation</span>{" "}
                  <span className="icon-bar"></span>{" "}
                  <span className="icon-bar"></span>{" "}
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" thref="/Home">
                  Le-monde
                </a>
              </div>

              <div className="collapse navbar-collapse navbar-right">
                <ul className="nav navbar-nav">
                  <li className="active">
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
          <div className="container">
            <div id="logo" className="pull-left">
              <h1>
                <a to="/Admin/Home" className="scrollto">
                  <i className="icon">
                    <img width="50" src={Logo} />
                  </i>{" "}
                  Le Monde{" "}
                </a>
              </h1>
            </div>

            <nav id="nav-menu-container">
              <ul className="nav-menu">
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
                <li className="menu-active menu-has-children">
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
