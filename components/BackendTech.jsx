import { BiBadgeCheck } from "react-icons/bi";

const BackendTech = () => {
  const Development = [
    "NodeJs",
    "ExpressJs",
    "MongoDB",
    "Mongoose",
    "REST API",
  ];

  return (
    <div className="animate__animated animate__fadeIn py-5 hover:translate-y-1 duration-300 px-10 my-4 bg-secondary rounded-2xl">
      <ul className="grid  grid-cols-1 sm:grid-cols-2">
        {Development.map((front, idx) => (
          <li key={idx} className="flex items-center">
            <BiBadgeCheck className="text-yellow" />
            <p className="text-lynch py-2 px-4  my-2 text-lg ml-2">{front}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BackendTech;
