import logo from "../assets/imgs/logo.png";
import Link from "next/link";
import Image from "next/image";
import { FaGithubSquare, FaLinkedin, FaDribbbleSquare } from "react-icons/fa";
import { HiMenuAlt4 } from "react-icons/hi";
import { useState } from "react";

const Navbar = () => {
  const [showNavMenu, setShowNavMenu] = useState(false);
  const menus = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Projects",
      url: "/projects",
    },
    {
      name: "Contact",
      url: "/contact",
    },
  ];
  return (
    <div className="w-screen bg-secondary  border-b-2 border-bg">
      <div className="w-4/5 xl:w-1170 mx-auto bg-secondary py-5 flex items-center justify-between">
        <div className="flex items-center">
          <div className="mr-16">
            <Link href="/">
              <a>
                <Image src={logo} alt="Logo" width="32px" height="50px" />
              </a>
            </Link>
          </div>

          <div className="navmenu lg:block hidden">
            {menus.map((menu) => (
              <Link key={menu.url} href={menu.url}>
                <a className="text-text font-medium hover:text-yellow mx-8 last:mb-8">
                  {menu.name}
                </a>
              </Link>
            ))}
          </div>
        </div>
        <div className="right flex">
          <div className="icons hidden lg:flex items-center">
            <a href="https://github.com/zillur-rgb" target="_blank">
              <FaGithubSquare className="text-white text-3xl hover:opacity-80 cursor-pointer mx-2" />
            </a>
            <a href="https://www.linkedin.com/in/zillur-rgb/" target="_blank">
              <FaLinkedin className="text-white text-3.5 hover:opacity-80 cursor-pointer mx-2" />
            </a>
            <a href="https://dribbble.com/zillur-rgb" target="_blank">
              <FaDribbbleSquare className="text-white text-3.5 hover:opacity-80 cursor-pointer mx-2" />
            </a>
          </div>
          <div className="hamburger block lg:hidden">
            <HiMenuAlt4
              className="text-white text-4xl cursor-pointer"
              onClick={() => setShowNavMenu(!showNavMenu)}
            />
          </div>
        </div>
      </div>

      {showNavMenu && (
        <div className="w-5/6 mx-auto">
          <div className="navmenu lg:hidden flex flex-col text-center">
            {menus.map((menu) => (
              <Link key={menu.url} href={menu.url}>
                <a className="text-text font-medium hover:text-yellow py-4 hover:bg-bg">
                  {menu.name}
                </a>
              </Link>
            ))}
          </div>
          <div className="icons lg:hidden flex items-center justify-center my-4">
            <a href="https://github.com/zillur-rgb" target="_blank">
              <FaGithubSquare className="text-white text-3xl hover:opacity-80 cursor-pointer mx-2" />
            </a>
            <a href="https://www.linkedin.com/in/zillur-rgb/" target="_blank">
              <FaLinkedin className="text-white text-3.5 hover:opacity-80 cursor-pointer mx-2" />
            </a>
            <a href="https://dribbble.com/zillur-rgb" target="_blank">
              {" "}
              <FaDribbbleSquare className="text-white text-3.5 hover:opacity-80 cursor-pointer mx-2" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
