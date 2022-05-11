import React from "react";

const Education = () => {
  return (
    <div className="animate__animated animate__zoomIn animate__delay-0.2s">
      <div className=" pt-4 pb-6 border-b border-secondary">
        <p className="text-white font-bold">BA in Business Informatics</p>
        <p className="text-sm text-text font-light">
          Fachhochschule Südwestfalen
        </p>
        <p className="text-lynch font-light mt-4 leading-7">
          I am studying there in my 3rd Semester. But since I am actively
          searching for fulltime job relevant to my skills and previous degree
          therefore I am planning to quitting the study.
        </p>
      </div>
      <div className="pt-4 pb-6 border-b border-secondary">
        <p className="text-white font-bold">
          B.Sc. in Computer Science and Engineering
        </p>
        <p className="text-sm text-text font-light">
          North East University Bangladesh
        </p>
        <p className="text-lynch font-light mt-4 leading-7">
          I have completed my bachelors in Computer Science and Engineering from
          my hoemcountry. Despite having programming skills from my previous
          bachelor, I find Web Development more interesting.
        </p>
      </div>
    </div>
  );
};

export default Education;
