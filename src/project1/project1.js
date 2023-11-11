import logo from "../logo192.png";

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="React logo" />
        <h2>ReactFacts</h2>
      </div>

      <div>React Course - Project 1</div>
    </header>
  );
}

function Main() {
  return (
    <main>
      <h1>Fun Facts About Reacts</h1>
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
    <div>
      <Header />
      <Main />
    </div>
  );
}

export default App;
