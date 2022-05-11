import { useState } from "react";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Navbar from "../components/Navbar";
import Overview from "../components/Overview";
import Footer from "../components/Footer";

const about = () => {
  const [overview, setOverview] = useState(true);
  const [education, setEducation] = useState(false);
  const [experience, setExperience] = useState(false);
  return (
    <div className="w-screen h-auto flex item-center justify-between flex-col lg:h-screen bg-bg">
      <Navbar />
      <div>
        <div className="w-4/5 xl:w-1170  mx-auto h-4/5">
          <div className="flex items-center justify-between w-full flex-col lg:flex-row mx-auto">
            <div className="w-full lg:w-1/4">
              <h1 className="text-yellow mt-8 text-4xl lg:text-left text-center md:text-7xl font-amiri font-bold mb-10 whitespace-nowrap">
                About Me
              </h1>
              <div className="btns flex items-center justify-between flex-col sm:flex-row lg:flex-col text-center my-4 rounded-md">
                <h1
                  className={`w-full  py-6 px-3 cursor-pointer ${
                    overview ? "text-yellow" : "text-lynch"
                  } hover:text-text border-b ${
                    overview ? "border-b-2 border-yellow" : "border-secondary"
                  }  `}
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
              w-full py-6 px-3 cursor-pointer border-b hover:text-text  ${
                education ? "border-b-2 border-yellow" : "border-secondary"
              } ${education ? "text-yellow" : "text-lynch"}
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
                  className={`
              w-full py-6 px-3 cursor-pointer border-b hover:text-text  ${
                experience ? "border-b-2 border-yellow" : "border-secondary"
              } ${experience ? "text-yellow" : "text-lynch"}
              `}
                  onClick={() => {
                    setOverview(false);
                    setEducation(false);
                    setExperience(true);
                  }}
                >
                  Experiences
                </h1>
              </div>
            </div>

            <div className="w-full lg:w-3/5">
              {overview && <Overview />}
              {education && <Education />}
              {experience && <Experience />}
            </div>
          </div>
          {/* <div className="right w-full my-4 lg:w-2/5">
            <Skills />
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default about;
