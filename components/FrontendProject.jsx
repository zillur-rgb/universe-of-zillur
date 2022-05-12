import { useState } from "react";

const FrontendProject = ({ project }) => {
  const [showWhole, setShowWhole] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const remaining = project.techs.length - 4;

  return (
    <>
      <div className="animate__animated animate__fadeIn w-full p-6 border border-lynch rounded-lg">
        <img src={project.image} alt="project img" />
        <h1 className="text-yellow text-lg font-medium my-7">
          {project.title}
        </h1>
        <div className=" border-b my-5 border-lynch opacity-30"></div>
        <div className="flex justify-between flex-col sm:flex-row my-5">
          <a
            className="py-2 px-6 rounded-lg border-2 text-center my-2 text-white hover:text-bg font-medium hover:bg-yellow hover:border-yellow whitespace-nowrap"
            href={project.githubClient}
            target="_blank"
          >
            Client Side
          </a>
          {project.githubServer && (
            <a
              className="py-2 px-4 rounded-lg border-2 text-center my-2  text-white hover:text-bg font-medium hover:bg-yellow hover:border-yellow whitespace-nowrap"
              target="_blank"
              href={project.githubServer}
            >
              Server Side{" "}
            </a>
          )}

          <a
            className="py-2 px-4 rounded-lg border-2 text-white hover:text-bg text-center my-2  font-medium hover:bg-yellow hover:border-yellow whitespace-nowrap"
            target="_blank"
            href={project.live}
          >
            Live Link{" "}
          </a>
        </div>
        <div className=" border-b my-5 border-lynch opacity-30"></div>
        <p className="text-lynch leading-7">
          {showWhole ? project.desc : `${project.desc.slice(0, 60)}...`}
          <br></br>
          <span
            className=" cursor-pointer hover:text-white"
            onClick={() => setShowWhole(!showWhole)}
          >
            Show {showWhole ? " Less" : " More"}
          </span>
        </p>
        <div className=" border-b my-3 border-lynch opacity-30"></div>
        <div className="grid grid-cols-4">
          {showAll
            ? project.techs.map((tech, idx) => (
                <p
                  className="text-lynch whitespace-nowrap   text-center border-lynch m-2"
                  key={idx}
                >
                  {tech}
                </p>
              ))
            : project.techs.slice(0, 4).map((tech, idx) => (
                <p
                  className="text-lynch whitespace-nowrap   text-center border-lynch m-2"
                  key={idx}
                >
                  {tech}
                </p>
              ))}
        </div>
        <div className="flex items-center justify-center">
          {project.techs.length > 4 && (
            <button
              className="text-center border-b-2 text-white my-4"
              onClick={() => setShowAll(!showAll)}
            >
              Show {showAll ? "Less" : `${remaining} More`}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default FrontendProject;
