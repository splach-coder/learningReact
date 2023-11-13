import Header from "./components/nav";
import Card from "./components/card";

export default function App() {
  return (
    <div className="container dark:bg-[#23272F] dark:text-white font-inter">
      <Header />
      <main className="py-12 flex flex-col items-center md:flex-row md:items-start md:justify-center gap-10">
        <Card />
        <Card />
        <Card />
      </main>
    </div>
  );
}
