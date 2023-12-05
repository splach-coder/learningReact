export default function Start(props) {
  return (
    <div className="w-100 h-screen flex flex-col justify-center items-center gap-7">
      <h1 className="text-4xl font-extrabold">Tenzie Game</h1>
      <button
        className="bg-[#3C1AD4] text-white px-12 py-3 rounded-lg"
        onClick={() => {
          props.setPlayerName(prompt("hello enter your Name"));
          props.setGameBegins(true);
        }}>
        Start
      </button>
    </div>
  );
}
