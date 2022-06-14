import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const blogs = () => {
  return (
    <div className="w-screen overflow-auto h-auto flex item-center justify-between flex-col lg:h-screen bg-bg">
      <Navbar />
      <div className="w-4/5 xl:w-1170  mx-auto h-4/5">
        <h1 className="text-lynch text-4xl ">Blogs coming soon</h1>
      </div>

      <Footer />
    </div>
  );
};

export default blogs;
