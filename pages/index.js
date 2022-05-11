import Image from "next/image";
import Navbar from "../components/Navbar";
import selfPic from "../assets/imgs/self.svg";
import TypewriterComponent from "typewriter-effect";
import "../styles/Home.module.css";
import Footer from "../components/Footer";
import Link from "next/link";

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
    <div className="w-screen h-auto lg:h-screen bg-bg">
      {/* <Resume /> */}
      <Navbar />
      <div className="h-3/4 flex items-center justify-center my-8">
        <main className="w-4/5 xl:w-1170 mx-auto flex items-center justify-between h-4/5 lg:flex-row flex-col">
          <div className="left lg:text-left text-center">
            <h1 className="title uppercase text-5xl lg:text-7xl font-amiri font-bold text-text animate__animated animate__fadeInLeft">
              hello!
            </h1>
            <h1 className="title text-3xl md:text-5xl lg:text-7xl font-amiri font-bold text-text  animate__animated animate__fadeInLeft animate__delay-0.3s">
              {headerText.map((txt, idx) => {
                return (
                  <span key={idx} className="hover:text-yellow">
                    {txt}
                  </span>
                );
              })}
            </h1>
            <div className="text-yellow text-md lg:text-2xl mt-4 tracking-widest  animate__animated animate__fadeInLeft">
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
            <Link href="https://drive.google.com/file/d/1rDU2Zj3BGBUaiQRMP-DQdu7NbSSDDEfk/view?usp=sharing">
              <a target="_blank">
                <button className="border px-4 py-3 rounded-tr-2xl hover:rounded-tr-none rounded-bl-2xl hover:rounded-bl-none hover:rounded-br-2xl hover:rounded-tl-2xl border-yellow text-yellow hover:bg-yellow hover:text-bg font-semibold duration-500 my-5  animate__animated animate__fadeInLeft">
                  Download My Resume
                </button>
              </a>
            </Link>
          </div>
          <div className=" mt-4 right border-none lg:border-2 rounded-tr-3xl lg:rounded-tr-90 rounded-bl-3xl lg:rounded-bl-90 hover:rounded-tl-3xl lg:hover:rounded-tl-90 hover:rounded-br-3xl lg:hover:rounded-br-90 hover:rounded-tr-none duration-500 hover:rounded-bl-none lg:w-2/5 w-4/5 flex items-center justify-center py-0 lg:py-5 mb-6">
            <Image
              src={selfPic}
              alt="selfPic"
              className=" rounded-tr-3xl lg:rounded-tr-90 rounded-bl-3xl lg:rounded-bl-90 hover:rounded-tl-3xl lg:hover:rounded-tl-90 hover:rounded-br-3xl lg:hover:rounded-br-90  duration-500 hover:rounded-tr-none hover:rounded-bl-none animate__animated animate__fadeInRight delay-150"
            />
          </div>
        </main>
      </div>
      <Link href="mailto:zillurdeu@gmail.com" className=" flex">
        <a className="text-yellow absolute bottom-20 right-0 md:block hidden tracking-widest hover:translate-y-1 duration-300">
          zillurdeu@gmail.com
          <div className="border border-yellow text-lynch"></div>
        </a>
      </Link>
      <Footer />
    </div>
  );
}
