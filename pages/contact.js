import Footer from "../components/Footer";
import Form from "../components/Form";
import Navbar from "../components/Navbar";

const contact = () => {
  return (
    <div className="lg:h-screen h-auto bg-bg">
      <Navbar />
      <div className="h-4/5 flex items-center justify-center my-2">
        <main className="w-4/5 xl:w-1170 mx-auto flex items-center justify-between h-4/5 lg:flex-row flex-col">
          <div className="left w-full">
            <h1 className="text-yellow mt-8 text-4xl md:text-left text-center md:text-7xl font-amiri font-bold mb-4">
              Contact Me
            </h1>
            <p className="md:w-3/5 w-full text-center md:text-left text-lynch mb-4 leading-7">
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
