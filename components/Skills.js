import { BiBadgeCheck } from "react-icons/bi";

const Skills = () => {
  const Development = [
    "JavaScript(ES7)",
    "ReactJs",
    "NextJs",
    "NodeJs",
    "ExpressJs",
    "MongoDB",
    "Mongoose",
    "Tailwind CSS",
    "Styled Components",
    "Jest",
    "Firebase Auth",
    "SASS",
    "Heroku",
  ];

  const uis = [
    "Wireframing",
    "Prototyping",
    "Figma",
    "Adobe XD",
    "Adobe Photoshop",
    "Invision App",
    "Balsamiq",
  ];
  return (
    <div>
      <div className="p-5 mb-8 bg-secondary rounded-2xl">
        <h1 className="text-text text-xl font-nunito font-bold">
          Development Technologies I have been using
        </h1>
        <ul className="grid grid-cols-1 sm:grid-cols-3">
          {Development.map((front, idx) => (
            <li
              key={idx}
              className="flex items-center sm:text-left text-center"
            >
              <BiBadgeCheck className="text-yellow" />
              <p className="text-lynch my-2 text-lg ml-2">{front}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-5 bg-secondary w-6/7 mt-4 rounded-2xl">
        <h1 className="text-text text-xl font-nunito font-bold">
          UI Technologies I have been using
        </h1>
        <ul className="grid  grid-cols-1 sm:grid-cols-3">
          {uis.map((ui, idx) => (
            <li key={idx} className="flex items-center">
              <BiBadgeCheck className="text-yellow" />
              <p className="text-lynch my-2 text-lg ml-2">{ui}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
