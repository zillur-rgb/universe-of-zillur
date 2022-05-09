import Navbar from "../components/Navbar";

const projects = () => {
  const projectsArray = [
    {
      title: "Invoice Master - A Invoice Management App",
      live: "https://invoice-master-10e23.web.app/",
      githubClient: "https://github.com/zillur-rgb/Invoice-Master-Client",
      githubServer: "https://github.com/zillur-rgb/invoice-master-server",
      techs: [
        "Figma",
        "Balsampiq",
        "ReactJS",
        "NodeJS",
        "ExpressJS",
        "MongoDB",
        "Firebase Auth",
        "TailwindCSS",
        "Heroku",
      ],
      desc: "The task is mainly to create a system where user will be able to manage invoice for their client. User will be able to create, delete or update their invoice. User must login to use the system and also to keep the data.",
    },
    {
      title: "Wheel Wave - Inventory Management Website",
      live: "https://wheel-wave.web.app/",
      githubClient: "https://github.com/zillur-rgb/wheel-wave-client",
      githubServer: "https://github.com/zillur-rgb/wheel-wave-client",
      techs: [
        "Figma",
        "Balsampiq",
        "ReactJS",
        "NodeJS",
        "ExpressJS",
        "Mongoose",
        "Firebase Auth",
        "React-Bootstrap",
        "Heroku",
        "Firebase Hosting",
      ],
      desc: "Wheel Wave is a 3rd party cycle supplier who sells cycle of other companies. So this homepage was mainly for suppliers. Supplier can add new products, delete or can update if a product is delivered. But he/ she must be logged in.",
    },
    {
      title: "Flexytrips - A Website for Tour Agency.",
      live: "https://flexytrips.web.app/",
      githubClient: "https://github.com/zillur-rgb/flexytrips-client",
      githubServer: "https://github.com/zillur-rgb/flexytrips-server",
      techs: [
        "Figma",
        "Balsampiq",
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
      live: "https://fabulous-melba-86f75b.netlify.app/",
      githubClient: "https://github.com/zillur-rgb/Audiophile",
      techs: ["ReactJS", "Tailwind CSS", "Netlify"],
      desc: "This is a simple website about gadgets such as speaker, eqarphone or headphone. Use rcan see difference products, add them to cart and place an order.",
    },
    {
      title: "Notes App with TypeScript.",
      live: "https://silly-kulfi-eba079.netlify.app/",
      githubClient: "https://github.com/zillur-rgb/notes-app-react-typescript",
      techs: ["ReactJS", "TypeScript", "Netlify", "Bootstrap 5"],
      desc: "This is a simple website about gadgets such as speaker, eqarphone or headphone. Use rcan see difference products, add them to cart and place an order.",
    },
    {
      title: "Recipe App",
      live: "https://storied-starlight-7f24e7.netlify.app/",
      githubClient: "https://github.com/zillur-rgb/Recipe-App",
      techs: ["ReactJS", "Styled Components", "Netlify", "API", "Bootstrap 5"],
      desc: "The task was to create a recipe app where visitor can see different types of recipe and if they click any recipe they can see details for example preparation, ingredients etc.",
    },
    {
      title: "Rock Paper Scissor game",
      live: "https://zillur-rgb.github.io/rock-paper-scissor/",
      githubClient: "https://github.com/zillur-rgb/rock-paper-scissor",
      techs: ["JavaScript", "CSS"],
      desc: "This was one of projects when I was learning JavaScript. Tried to create a Rock Paper Scissor game with the capability of restarting the game when someone wins.",
    },
    {
      title: "Recipe App",
      live: "https://effortless-medovik-dc044c.netlify.app/",
      githubClient: "https://github.com/zillur-rgb/resume-app",
      techs: ["ReactJS", "Styled Components", "Material UI"],
      desc: "Here I have used Material UI for the first time and tried to create a resume app with some routing.",
    },
    {
      title: "Money Master",
      live: "https://zillur-rgb.github.io/money-master/",
      githubClient: "https://github.com/zillur-rgb/resume-app",
      techs: ["JavaScript", "Bootstrap 5"],
      desc: "This is a project when I was learning JavaScript. This is a money management tool where one can income and expenses also he can calculate how much he can save.",
    },
    {
      title: "Zillflix - A Movie App",
      live: "https://delicate-stardust-b57c15.netlify.app/",
      githubClient: "https://github.com/zillur-rgb/zillflix-A-movie-app",
      techs: ["ReactJS", "Tailwind CSS", "Daisy UI", "API"],
      desc: "This app where I became a fan of TailwindCSS. In this app user can see trending movies, tv series and als latest movie, tv series. He can see the details of the show and also can have some recommendation. User also can search for specific movie.",
    },
  ];
  return (
    <div className="lg:h-full h-auto bg-bg">
      <Navbar />
      <div className="w-4/5 xl:w-1170 mx-auto">
        <h1>Hello</h1>
      </div>
    </div>
  );
};

export default projects;
