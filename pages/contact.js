import Footer from "../components/Footer";
import Form from "../components/Form";
import Navbar from "../components/Navbar";

const contact = () => {
  return (
    <div className="w-screen h-auto lg:h-screen bg-bg">
      <Navbar />
      <div className="h-4/5 flex items-center justify-center">
        <main className="w-4/5 xl:w-1170 mx-auto flex items-center justify-between h-4/5 lg:flex-row flex-col my-8">
          <div className="left w-full">
            <h1 className="text-yellow text-4xl text-center md:text-7xl font-amiri font-bold my-4 mx-auto">
              Contact Me
            </h1>
            <p className="w-full sm:w-3/5 text-center text-lynch mb-4 leading-7 mx-auto">
              I am looking for a job opportunity to utilize my skills. I am a
              fast learner and I am ready to relocate. Beside, I am a team
              player and most importantly I am self motivated. If you have any
              question, feel free to contact me.
            </p>
            <Form className="w-full" />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default contact;
