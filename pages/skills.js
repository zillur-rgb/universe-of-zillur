import React from "react";
import Footer from "../components/Footer";
import FrontendSkills from "../components/FrontendSkills";
import LearningStack from "../components/LearningStack";
import Navbar from "../components/Navbar";
import UISkills from "../components/UISkills";

const skills = () => {
  return (
    <div className="w-screen h-auto flex item-center justify-between flex-col lg:h-screen bg-bg">
      <Navbar />
      <div className="w-4/5 xl:w-1170  mx-auto h-4/5 ">
        <h1 className="text-5xl font-amiri text-yellow font-semibold my-5 text-center">
          My Skillsets
        </h1>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-2/5">
            <h1 className="text-text text-xl font-nunito font-bold">
              Development Technologies I have been using
            </h1>
            <FrontendSkills />
          </div>
          <div className="w-full lg:w-2/5">
            <h1 className="text-text text-xl font-nunito font-bold">
              UI Technologies I have been using
            </h1>
            <UISkills />
            <h1 className="text-text text-xl font-nunito font-bold">
              I am Currently or have a plan Learning
            </h1>
            <LearningStack />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default skills;
