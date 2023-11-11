import logo from "./logo192.png";

function Header() {
  return (
    <header>
      <nav>
        <img src={logo} alt="React Logo" width="50px" />
        <ul>
          <li>Home</li>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function H1() {
  return (
    <main>
      <h1>Resons I'm excited to learn React : </h1>
      <ul>
        <li>
          React provides a fast and efficient way to build user interfaces,
          making your web applications responsive and highly performant.
        </li>
        <li>
          React's component-based architecture promotes code reusability,
          maintainability, and a clear separation of concerns, making it easier
          to develop and maintain complex applications.
        </li>
        <li>
          React has a large and active community, which means there are numerous
          libraries, tools, and resources available to help you with your
          development, making it a great choice for building modern web
          applications.
        </li>
      </ul>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <code>&copy; 2023 HotSauce development. All rights reserved. </code>
    </footer>
  );
}

export { Header, H1, Footer };
