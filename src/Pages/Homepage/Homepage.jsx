import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import self from "../../assets/imgs/self.svg";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage-container">
      <Navbar />
      <div className="resume">
        <div className="resumeBorder"></div>
        <p>Download Resume</p>
      </div>
      <main className="contents">
        <div className="details">
          <h1 className="title">HELLO!</h1>
          <h1 className="title">This is Zillur.</h1>
          <p>Frontend Developer & User Interface Designer</p>

          <button>Contact Me</button>
        </div>
        <div className="image">
          <div className="border"></div>
          <img src={self} alt="self" />
        </div>
      </main>
    </div>
  );
};

export default Homepage;
