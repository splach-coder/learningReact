import logo from "../imgs/logo192.png";
import Burger from "../svg/burger.svg";
import ThemeSwitcher from "./ThemeSwitcher";
import React, { useState } from "react";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="w-screen flex items-center md:justify-between py-3 px-6 fixed bg-white shadow-md dark:bg-[#23272F] z-[1]">
      <div className="burger cursor-pointer md:hidden" onClick={toggleNav}>
        <img src={Burger} alt="" className="w-[35px] me-3" />
      </div>
      <div className="logo flex items-center gap-3 text-primary">
        <img
          src={logo}
          className="w-[40px] md:w-[40px] object-cover"
          alt="React logo"
        />
        <h2>ReactFacts</h2>
      </div>

      <nav
        className={`md:block fixed md:relative top-16 md:top-0 left-0 px-12 z-50 md:bg-transparent shadow-lg h-screen transition-all ease-in-out duration-250 md:h-auto md:shadow-none bg-white dark:bg-[#23272F] ${
          isNavOpen ? "block" : "hidden"
        } `}>
        <ul className="flex flex-col md:flex-row gap-3 py-6 md:py-0 md:gap-12 text-xl ">
          <li className="cursor-pointer transition ease-in duration-75 hover:border-b-2 border-primary pb-2">
            Home
          </li>
          <li className="cursor-pointer transition ease-in duration-75 hover:border-b-2 border-primary pb-2">
            About
          </li>
          <li className="cursor-pointer transition ease-in duration-75 hover:border-b-2 border-primary pb-2">
            Contact
          </li>
        </ul>
      </nav>

      <ThemeSwitcher />
    </header>
  );
}
