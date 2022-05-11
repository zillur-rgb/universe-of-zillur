import { BiBadgeCheck } from "react-icons/bi";
const UISkills = () => {
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
    <div className="animate__animated animate__fadeIn py-5 px-10 my-4  bg-secondary rounded-2xl hover:translate-y-1 duration-300">
      <ul className="grid  grid-cols-1 sm:grid-cols-2">
        {uis.map((ui, idx) => (
          <li key={idx} className="flex items-center">
            <BiBadgeCheck className="text-yellow" />
            <p className="text-lynch my-2 text-lg ml-2">{ui}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UISkills;
