import Footer from "../components/Footer";
import Form from "../components/Form";
import Navbar from "../components/Navbar";
import {
  FaEnvelopeSquare,
  FaGithubSquare,
  FaDribbbleSquare,
  FaLinkedin,
} from "react-icons/fa";
import Link from "next/link";

const contact = () => {
  return (
    <div className="w-screen h-auto lg:h-screen flex flex-col items-center justify-between bg-bg overflow-auto">
      <Navbar />
      <div className="w-4/5 xl:w-1170  h-auto">
        <main className=" mx-auto h-4/5 my-8 left flex items-start justify-between flex-col lg:flex-row gap-24 ">
          <div className="w-full lg:w-3/5 animate__animated animate__fadeIn bg-bg">
            <h1 className="text-yellow text-4xl text-center lg:text-left md:text-7xl font-amiri font-bold my-4">
              Contact Me
            </h1>

            <p className="w-4/5 mx-auto lg:w-full text-center lg:text-left text-lynch mb-4 leading-7">
              I am looking for a job opportunity to utilize my skills. I am a
              fast learner and I am ready to relocate. Please have a look at my
              work and contact me if you think I am a good fit.
            </p>
            <div className="w-full flex items-center lg:items-start justify-center lg:justify-between">
              <Link href="https://drive.google.com/file/d/1rDU2Zj3BGBUaiQRMP-DQdu7NbSSDDEfk/view?usp=sharing">
                <a target="_blank">
                  <button className="border w-auto px-4 py-3 rounded-tr-2xl hover:rounded-tr-none rounded-bl-2xl hover:rounded-bl-none hover:rounded-br-2xl hover:rounded-tl-2xl border-yellow text-yellow hover:bg-yellow hover:text-bg font-semibold duration-500 my-5">
                    Download My Resume
                  </button>
                </a>
              </Link>
            </div>
            <div className="flex lg:justify-start justify-center items-center my-1 lg:my-5">
              <Link href="mailto:zillurdeu@gmail.com">
                <a target="_blank">
                  <FaEnvelopeSquare className="text-lynch bg-bg text-4xl hover:text-white cursor-pointer mx-3" />
                </a>
              </Link>
              <Link href="https://github.com/zillur-rgb">
                <a target="_blank">
                  <FaGithubSquare className="text-lynch bg-bg text-4xl hover:text-white cursor-pointer mx-3" />
                </a>
              </Link>
              <Link href="https://dribbble.com/zillur-rgb">
                <a target="_blank">
                  <FaDribbbleSquare className="text-lynch bg-bg text-4xl hover:text-white cursor-pointer mx-3" />
                </a>
              </Link>
              <Link href="https://www.linkedin.com/in/zillur-rgb/">
                <a target="_blank">
                  <FaLinkedin className="text-lynch bg-bg text-4xl hover:text-white cursor-pointer mx-3" />
                </a>
              </Link>
            </div>
          </div>
          <Form />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default contact;
