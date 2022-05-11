import { useState } from "react";
import Education from "../components/Education";
import Experience from "../components/Experience";
import FrontendCard from "../components/Skills";
import Navbar from "../components/Navbar";
import Overview from "../components/Overview";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

const about = () => {
  const [overview, setOverview] = useState(true);
  const [education, setEducation] = useState(false);
  const [experience, setExperience] = useState(false);
  return (
    <div className="w-screen h-auto flex flex-col justify-between items-center lg:h-screen bg-bg">
      <Navbar />
      <div className="h-4/5 flex items-center justify-between my-8">
        <div className="w-4/5 xl:w-1170 mx-auto flex items-center justify-between h-4/5 lg:flex-row flex-col">
          <div className="left w-full lg:w-1/2">
            <h1 className="text-yellow mt-8 text-4xl md:text-left text-center md:text-7xl font-amiri font-bold mb-10">
              About Me
            </h1>
            <div className="btns flex items-center justify-between text-center my-4 border border-lynch rounded-md">
              <h1
                className={`w-1/3  py-4 px-3 cursor-pointer ${
                  overview ? "text-yellow" : "text-lynch"
                } hover:text-text border-r border-lynch `}
                onClick={() => {
                  setOverview(true);
                  setEducation(false);
                  setExperience(false);
                }}
              >
                Overview
              </h1>
              <h1
                className={`
              w-1/3 py-4 px-3 cursor-pointer border-r hover:text-text border-lynch ${
                education ? "text-yellow" : "text-lynch"
              }
              `}
                onClick={() => {
                  setOverview(false);
                  setEducation(true);
                  setExperience(false);
                }}
              >
                Education
              </h1>
              <h1
                className={`w-1/3 py-4 px-3 cursor-pointer border-lynch hover:text-text  whitespace-nowrap ${
                  experience ? "text-yellow" : "text-lynch"
                }`}
                onClick={() => {
                  setOverview(false);
                  setEducation(false);
                  setExperience(true);
                }}
              >
                Experiences
              </h1>
            </div>

            {overview && <Overview />}
            {education && <Education />}
            {experience && <Experience />}
          </div>
          <div className="right w-full my-4 lg:w-2/5">
            <Skills />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default about;
