import { BiBadgeCheck } from "react-icons/bi";

const FrontendSkills = () => {
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

  return (
    <div className="py-5 hover:translate-y-1 duration-300 px-10 my-4 bg-secondary rounded-2xl">
      <ul className="grid  grid-cols-1 sm:grid-cols-2">
        {Development.map((front, idx) => (
          <li key={idx} className="flex items-center">
            <BiBadgeCheck className="text-yellow" />
            <p className="text-lynch p-2 my-2 text-lg ml-2">{front}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FrontendSkills;
