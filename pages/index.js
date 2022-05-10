import Image from "next/image";
import Navbar from "../components/Navbar";
import selfPic from "../assets/imgs/self.svg";
import TypewriterComponent from "typewriter-effect";
import Resume from "../components/Resume";

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
    <div className="lg:h-full h-auto bg-bg">
      {/* <Resume /> */}
      <Navbar />
      <div className="h-4/5 flex items-center justify-center my-6">
        <main className="w-4/5 xl:w-1170 mx-auto flex items-center justify-between h-4/5 lg:flex-row flex-col">
          <div className="left lg:text-left text-center">
            <h1 className="title uppercase text-3xl lg:text-7xl font-amiri font-bold text-text animate__animated animate__fadeInLeft delay-1000">
              hello!
            </h1>
            <h1 className="title text-3xl lg:text-7xl font-amiri font-bold text-text  animate__animated animate__fadeInLeft animate__delay-0.3s">
              {headerText.map((txt, idx) => {
                return (
                  <span key={idx} className="hover:text-yellow">
                    {txt}
                  </span>
                );
              })}
            </h1>
            <div className="text-yellow text-md lg:text-2xl mt-4 tracking-widest">
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
            </div>
          </div>
          <div className=" mt-4 right border-none lg:border-2 rounded-tr-3xl lg:rounded-tr-90 rounded-bl-3xl lg:rounded-bl-90 hover:rounded-tl-3xl lg:hover:rounded-tl-90 hover:rounded-br-3xl lg:hover:rounded-br-90 hover:rounded-tr-none hover:duration-500 hover:rounded-bl-none lg:w-2/5 w-2/5 flex items-center justify-center py-0 lg:py-5 mb-6">
            <Image
              src={selfPic}
              alt="selfPic"
              className=" rounded-tr-3xl lg:rounded-tr-90 rounded-bl-3xl lg:rounded-bl-90 hover:rounded-tl-3xl lg:hover:rounded-tl-90 hover:rounded-br-3xl lg:hover:rounded-br-90  hover:duration-500 hover:rounded-tr-none hover:rounded-bl-none animate__animated animate__fadeInRight delay-150"
            />
          </div>
        </main>
      </div>
    </div>
  );
}
