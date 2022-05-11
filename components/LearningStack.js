import { BiBadgeCheck } from "react-icons/bi";
const LearningStack = () => {
  const uis = [
    "TypeScript",
    "NextJS",
    "PostgreSQL",
    "Redux",
    "GraphQL",
    "Sketch App",
  ];

  return (
    <div className="py-5 hover:translate-y-1 duration-300 px-10 my-4 bg-secondary rounded-2xl">
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

export default LearningStack;
