import Timer from "../components/Timer";

export default function Board(props) {
  const tenziesSquares = props.tenzies.map((tenzie) => (
    <div
      key={tenzie.id}
      onClick={() => {
        if (props.gameOver) {
          return;
        }

        props.checkTenzie(tenzie.id);
      }}
      className={`w-16 h-16  text-2xl font-bold cursor-pointer border border-gray-100 shadow-md flex justify-center items-center ${
        tenzie.checked ? "bg-[#5CF488]" : "bg-white"
      }  ${props.gameOver ? "animate-bounce" : ""}`}>
      {tenzie.value}
    </div>
  ));

  return (
    <main className="h-screen flex justify-center items-center bg-[#0C1C29]">
      <div className="flex flex-col gap-3 items-center justify-center w-[450px] h-[60%] rounded-lg bg-[#E4E4E4] relative">
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-4xl font-extrabold">Tenzies</h1>
          <p className="text-center text-gray-700">
            Roll until all dice are the same. Click <br />
            each die to freeze it at its current value <br /> between rolls.
          </p>
        </div>
        <Timer timer={props.timer} />
        <div className="flex flex-wrap justify-center gap-4 my-3">
          {tenziesSquares}
        </div>
        <button
          className="bg-[#3C1AD4] text-white px-12 py-3 rounded-lg"
          onClick={
            !props.gameOver
              ? () => props.generateTenzies()
              : () => props.newGame()
          }>
          {props.gameOver ? "New Game" : "Roll"}
        </button>
      </div>
    </main>
  );
}
