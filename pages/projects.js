import Navbar from "../components/Navbar";
import FrontendProject from "../components/FrontendProject";
import Footer from "../components/Footer";

const projects = () => {
  const projectsArray = [
    {
      title: "Sawland - The Land of Saws",
      image: "https://i.ibb.co/D57SWPW/sawland.png",
      live: "https://sawland-e5251.web.app/",
      githubClient: "https://github.com/zillur-rgb/sawland-client",
      githubServer: "https://github.com/zillur-rgb/sawland-server",
      techs: [
        "ReactJS",
        "NodeJS",
        "ExpressJS",
        "MongoDB",
        "Firebase Auth",
        "Jsonwebtoken",
        "TailwindCSS",
        "Daisy UI",
        "Figma",
        "Heroku",
        "Stripe Payment",
      ],
      desc: "The task is to create a manufacturer website who manufactures saws. Client can order from them also do a lot of things in the dashboard. user and admin section is seperated. Integrated stripe payment.",
    },
    {
      title: "Invoice Master - A Invoice Management App",
      image:
        "https://i.ibb.co/wKS4zKB/6ea69d6f-cb38-4327-a5dc-50c2318b0edd.jpg",
      live: "https://invoice-master-10e23.web.app/",
      githubClient: "https://github.com/zillur-rgb/Invoice-Master-Client",
      githubServer: "https://github.com/zillur-rgb/Invoice-App",
      techs: [
        "Figma",
        "Balsamiq",
        "ReactJS",
        "NodeJS",
        "ExpressJS",
        "Mongoose",
        "Firebase Auth",
        "TailwindCSS",
        "Heroku",
        "Stripe",
      ],
      desc: "The task is mainly to create a system where user will be able to manage invoice for their client. User will be able to create, delete or update their invoice. User must login to use the system and also to keep the data.",
    },

    {
      title: "Flexytrips - A Website for Tour Agency.",
      image: "https://i.ibb.co/XXHxR1j/Frame-2.png",
      live: "https://flexytrips.web.app/",
      githubClient: "https://github.com/zillur-rgb/flexytrips-client",
      githubServer: "https://github.com/zillur-rgb/flexytrips-server",
      techs: [
        "Figma",
        "Balsamiq",
        "ReactJS",
        "NodeJS",
        "ExpressJS",
        "Mongoose",
        "Firebase Auth",
        "CSS 3",
        "Heroku",
        "Firebase Hosting",
      ],
      desc: "The website is for a tour agency who arranges trip across the Europe with resasonable costs. An user can see trending trips, also check all trips also can see details. User can search for trips with their budget and destinations.",
    },
    {
      title: "Audiophile - A shop for Gadget Lovers",
      image: "https://i.ibb.co/zJQvJ5t/Frame-5.png",
      live: "https://fabulous-melba-86f75b.netlify.app/",
      githubClient: "https://github.com/zillur-rgb/Audiophile",
      techs: ["ReactJS", "Tailwind CSS", "Netlify"],
      desc: "This is a simple website about gadgets such as speaker, eqarphone or headphone. Use rcan see difference products, add them to cart and place an order.",
    },
    {
      title: "Notes App with TypeScript.",
      image: "https://i.ibb.co/kHR6KW5/Frame-7.png",
      live: "https://silly-kulfi-eba079.netlify.app/",
      githubClient: "https://github.com/zillur-rgb/notes-app-react-typescript",
      techs: ["ReactJS", "TypeScript", "Netlify", "Bootstrap 5"],
      desc: "This is a simple website about gadgets such as speaker, eqarphone or headphone. Use rcan see difference products, add them to cart and place an order.",
    },
    {
      title: "Recipe App",
      image: "https://i.ibb.co/tpF7grM/Frame-9.png",
      live: "https://storied-starlight-7f24e7.netlify.app/",
      githubClient: "https://github.com/zillur-rgb/Recipe-App",
      techs: ["ReactJS", "Styled Components", "Netlify", "API", "Bootstrap 5"],
      desc: "The task was to create a recipe app where visitor can see different types of recipe and if they click any recipe they can see details for example preparation, ingredients etc.",
    },
    {
      title: "Rock Paper Scissor game",
      image: "https://i.ibb.co/2PLqKPR/Frame-11.png",
      live: "https://zillur-rgb.github.io/rock-paper-scissor/",
      githubClient: "https://github.com/zillur-rgb/rock-paper-scissor",
      techs: ["JavaScript", "CSS"],
      desc: "This was one of projects when I was learning JavaScript. Tried to create a Rock Paper Scissor game with the capability of restarting the game when someone wins.",
    },
    {
      title: "Resume App",
      image: "https://i.ibb.co/tpJXmdZ/Frame-6.png",
      live: "https://effortless-medovik-dc044c.netlify.app/",
      githubClient: "https://github.com/zillur-rgb/resume-app",
      techs: ["ReactJS", "Styled Components", "Material UI"],
      desc: "Here I have used Material UI for the first time and tried to create a resume app with some routing.",
    },
    {
      title: "Money Master",
      image: "https://i.ibb.co/GJmrNJ7/Frame-4.png",
      live: "https://zillur-rgb.github.io/money-master/",
      githubClient: "https://github.com/zillur-rgb/resume-app",
      techs: ["JavaScript", "Bootstrap 5"],
      desc: "This is a project when I was learning JavaScript. This is a money management tool where one can income and expenses also he can calculate how much he can save.",
    },
    {
      title: "Zillflix - A Movie App",
      image: "https://i.ibb.co/XscBSGZ/Frame-8.png",
      live: "https://delicate-stardust-b57c15.netlify.app/",
      githubClient: "https://github.com/zillur-rgb/zillflix-A-movie-app",
      techs: ["ReactJS", "Tailwind CSS", "Daisy UI", "API"],
      desc: "This app where I became a fan of TailwindCSS. In this app user can see trending movies, tv series and als latest movie, tv series. He can see the details of the show and also can have some recommendation. User also can search for specific movie.",
    },
  ];
  return (
    <div className="w-screen h-auto bg-bg relative">
      <Navbar />
      <div className="h-5/6 flex items-center justify-between mt-20">
        <div className="w-4/5 xl:w-1170 mx-auto flex items-center justify-between h-4/5 lg:flex-row flex-col mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projectsArray.map((project) => (
              <FrontendProject project={project} key={project.title} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default projects;
