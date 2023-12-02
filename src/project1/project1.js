import logo from "../imgs/logo192.png";
import "./project1.css";
import ThemeSwitcher from "../components/ThemeSwitcher";

function Header() {
  return (
    <header className="bg-white shadow-lg dark:bg-[#21252B]">
      <div className="logo">
        <img src={logo} alt="React logo" />
        <h2>ReactFacts</h2>
      </div>

      <ThemeSwitcher />
    </header>
  );
}

function Main() {
  return (
    <main className="">
      <h1 className="text-3xl font-extrabold mb-5">Fun Facts About Reacts</h1>
      <ul>
        <li>
          <span>&#9679;</span>Was First Released in 2013
        </li>
        <li>
          <span>&#9679;</span>Was Originally created by Jordan walke
        </li>
        <li>
          <span>&#9679;</span>Has Well over 100k stars on github
        </li>
        <li>
          <span>&#9679;</span>Is maintained by Facebook
        </li>
        <li>
          <span>&#9679;</span>Powers thousands of entreprise apps, including
          mobile apps
        </li>
      </ul>
    </main>
  );
}

function App() {
  return (
    <div className="h-screen dark:bg-[#21252B] dark:text-white overflow-hidden">
      <Header />
      <Main />
    </div>
  );
}

export default App;
