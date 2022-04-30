import logo from "../assets/imgs/logo.png";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
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
    <div>
      <div>
        <Image src={logo} alt="Logo" height="50px" />

        <div className="navmenu">
          {menus.map((menu) => (
            <Link key={menu.url} href={menu.url}>
              <a>{menu.name}</a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
