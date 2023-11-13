import Header from "./components/nav";
import Card from "./components/card";

export default function App() {
  return (
    <div className="dark:bg-[#23272F] dark:text-white font-inter">
      <Header />
      <main className="pt-20 flex flex-col items-center md:flex-row md:items-start md:justify-center gap-10 z-[-1]">
        <Card />
        <Card />
        <Card />
      </main>
    </div>
  );
}
