import Image from "next/image";
import Navbar from "../components/Navbar";
import selfPic from "../assets/imgs/self.svg";
import TypewriterComponent from "typewriter-effect";

export default function Home() {
  const headerText = [
    "T",
    "h",
    "i",
    "s",
    " ",
    "i",
    "s",
    " ",
    "Z",
    "i",
    "l",
    "l",
    "u",
    "r",
    ".",
  ];
  return (
    <div className="lg:h-full h-auto">
      <Navbar />
      <div className="h-5/6 flex items-center justify-center">
        <main className="w-4/5 xl:w-1170 mx-auto flex items-center justify-between h-4/5 lg:flex-row flex-col">
          <div className="left lg:text-left text-center">
            <h1 className="title uppercase text-3xl lg:text-7xl font-amiri font-bold text-text">
              hello!
            </h1>
            <h1 className="title text-3xl lg:text-7xl font-amiri font-bold text-text">
              {headerText.map((txt, idx) => {
                return (
                  <span key={idx} className="hover:text-yellow">
                    {txt}
                  </span>
                );
              })}
            </h1>
            <p className="text-yellow text-md lg:text-2xl mt-4 tracking-widest">
              <TypewriterComponent
                options={{
                  strings: [
                    "Frontend Developer",
                    "User Interface Designer",
                    "Problem Solver",
                    "Audiobook Freak",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                }}
              />
            </p>
          </div>
          <div className="right border-none lg:border-2 rounded-tr-90 rounded-bl-90 hover:rounded-tl-90 hover:rounded-br-90 hover:rounded-tr-none hover:duration-500 hover:rounded-bl-none lg:w-2/5 w-2/5 flex items-center justify-center py-0 lg:py-5">
            <Image
              src={selfPic}
              alt="selfPic"
              className="rounded-tr-90 rounded-bl-90 hover:rounded-tl-90 hover:rounded-br-90 hover:duration-500 hover:rounded-tr-none hover:rounded-bl-none"
            />
          </div>
        </main>
      </div>
    </div>
  );
}
