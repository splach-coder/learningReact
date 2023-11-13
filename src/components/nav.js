import logo from "../imgs/logo192.png";
import Burger from "../svg/burger.svg";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
  return (
    <header className="w-100 flex items-center md:justify-between py-3 px-6">
      <div className="burger cursor-pointer md:hidden">
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

      <nav>
        <ul className="hidden md:flex gap-12 text-xl ">
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
