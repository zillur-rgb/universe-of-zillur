import React from "react";
import BackendTech from "../components/BackendTech";
import Footer from "../components/Footer";
import FrontendSkills from "../components/FrontendSkills";
import LearningStack from "../components/LearningStack";
import Navbar from "../components/Navbar";
import UISkills from "../components/UISkills";

const skills = () => {
  return (
    <div className="w-screen overflow-auto h-auto flex item-center justify-between flex-col lg:h-screen bg-bg">
      <Navbar />
      <div>
        <div className="w-4/5 xl:w-1170  mx-auto h-4/5">
          <h1 className="text-5xl font-amiri text-yellow font-semibold my-5 text-center">
            My Skillsets
          </h1>
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="w-full lg:w-1/2">
              <h1 className="text-text text-xl font-nunito font-bold">
                Frontend Technologies
              </h1>
              <FrontendSkills />
            </div>
            <div className="w-full lg:w-2/5">
              <h1 className="text-text text-xl font-nunito font-bold">
                Backend Technologies
              </h1>
              <BackendTech />
              <h1 className="text-text text-xl font-nunito font-bold">
                Learning Stack
              </h1>
              <LearningStack />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default skills;
