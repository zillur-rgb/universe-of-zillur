import React from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import logo from "../../assets/imgs/logo.png";
import "./Navbar.css";
import {
  FaGithubSquare,
  FaDribbbleSquare,
  FaLinkedin,
  FaEnvelopeSquare,
} from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const activeRoute = (route) => {
    return route === location.pathname;
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>

          <ul
            className="menu"
            style={{
              display: "flex",
            }}
          >
            <li
              className={activeRoute("/") ? "active" : "normal"}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={activeRoute("/about") ? "active" : "normal"}
              onClick={() => navigate("/about")}
            >
              About
            </li>
            <li
              className={activeRoute("/projects") ? "active" : "normal"}
              onClick={() => navigate("/projects")}
            >
              Projects
            </li>
            <li
              className={activeRoute("/contact") ? "active" : "normal"}
              onClick={() => navigate("/contact")}
            >
              Contact
            </li>
          </ul>
        </div>

        <ul className="social">
          <a href="mailto:zillurdeu@gmail.com">
            <FaEnvelopeSquare className="social-icon" />
          </a>
          <a href="https://www.github.com/zillur-rgb/" target="blank">
            <FaGithubSquare className="social-icon" />
          </a>
          <a href="https:www.//dribbble.com/zillur-rgb" target="blank">
            <FaDribbbleSquare className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/zillur-rgb/" target="blank">
            <FaLinkedin className="social-icon" />
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
