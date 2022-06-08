import Link from "next/link";
import React from "react";

const Experience = () => {
  return (
    <div className="animate__animated animate__fadeIn  animate__delay-0.2s border-l-none lg:border-l border-secondary px-4 lg:px-16">
      <div className="pt-4 pb-6 border-b border-secondary">
        <div className="title flex items-center justify-between">
          <div className="">
            <p className="text-white font-bold">Frontend Developer Intern</p>
            <p className="text-sm text-text font-light">Dessein Lab</p>
          </div>
          <p className="text-lynch">Feb 2021 - Jun 2021</p>
        </div>
        <ul>
          <li className="text-lynch font-light leading-7 mt-4">
            Primary task was to write sass for the webpage. And debug JavaScript
            code.
          </li>
          <li className="text-lynch font-light leading-7 mt-4">
            Occasionally contributed creating dynamic webpage with a team.
          </li>
        </ul>
      </div>
      <div className="pt-4 pb-6 border-b border-secondary">
        <div className="title flex items-center justify-between">
          <div className="">
            <p className="text-white font-bold">Frontend Developer Intern</p>
            <Link href="https://www.socialbnb.de">
              <a className="text-sm text-text font-light">Socialbnb</a>
            </Link>
          </div>
          <p className="text-lynch">May 2022 - </p>
        </div>
        <ul>
          <li className="text-lynch font-light leading-7 mt-4">
            Working with a team to redesigning the whole website.
          </li>
          <li className="text-lynch font-light leading-7 mt-4">
            Write React code with plain css for frontend design.
          </li>
          <li className="text-lynch font-light leading-7 mt-4">
            Code reviewing, peer coding.
          </li>
        </ul>
      </div>
      {/* <div className="pt-4 pb-6 border-b border-secondary">
        <div className="title flex items-center justify-between">
          <div className="">
            <p className="text-white font-bold">User Interface Designer</p>
            <p className="text-sm text-text font-light">Dessein Lab</p>
          </div>
          <p className="text-lynch">Mar 2019 - Feb 2021</p>
        </div>
        <p className="text-lynch font-light mt-4">
          I had the privilege to work in one og the leading IT Firms in my city,
          I served the company with my skill of User Interface. Where I along
          with a UX designer implemented some user and eye-catching interfaces.
        </p>
      </div> */}
    </div>
  );
};

export default Experience;
