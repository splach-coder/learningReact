import { useState, useRef, useEffect } from "react";
import Start from "./components/Start";
import Board from "./components/gameBorad";
import { nanoid } from "nanoid";

export default function App() {
  const [players, setPlayers] = useState(getPlayer());
  const [gameBegins, setGameBegins] = useState(false);
  const [playerName, setPlayerName] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [tenzies, setTenzies] = useState([]);
  const [timer, setTimer] = useState(0);

  const timerInterval = useRef();

  console.log(gameBegins, gameOver);

  useEffect(() => {
    // Check if all values in the "filed" field are the same
    const isSameValue = tenzies.every((obj) => obj.value === tenzies[0].value);

    // Check if all "check" values are true
    const areAllTrue = tenzies.every((obj) => obj.checked);

    if (isSameValue && areAllTrue && tenzies.length > 0) {
      setGameOver(true);
    }
  }, [tenzies]);

  useEffect(() => {
    console.log("entered");
    if (gameBegins === true && gameOver === false) {
      console.log("entered");
      setTenzies(() => {
        const newTenzies = [];
        for (let i = 0; i < 10; i++) {
          const newTenzie = {
            id: nanoid(),
            value: generateRandomNumber(),
            checked: false,
          };

          newTenzies.push(newTenzie);
        }

        return [...newTenzies];
      });

      beginTimer();
    }

    return () => clearInterval(timerInterval.current);
  }, [gameBegins]);

  useEffect(
    function () {
      if (gameOver) {
        clearInterval(timerInterval.current);
        console.log("save player");
        savePlayer();
        setTimer(0);
      }
    },
    [gameOver]
  );

  function beginTimer() {
    timerInterval.current = setInterval(function () {
      setTimer((oldTimer) => oldTimer + 1000);
    }, 1000);
  }

  function checkTenzie(id) {
    setTenzies((prevTenzies) => {
      return prevTenzies.map((tenzie) => {
        return tenzie.id === id
          ? { ...tenzie, checked: !tenzie.checked }
          : tenzie;
      });
    });
  }

  function generateTenzies() {
    const newTenzies = [];
    tenzies.forEach(function (tenzie) {
      if (!tenzie.checked) {
        const newTenzie = {
          ...tenzie,
          value: generateRandomNumber(),
        };

        newTenzies.push(newTenzie);
      } else {
        newTenzies.push(tenzie);
      }
    });

    setTenzies(newTenzies);
  }

  function generateRandomNumber() {
    const randomNumber = Math.random();
    const scaledNumber = Math.floor(randomNumber * 9) + 1;

    return scaledNumber;
  }

  function newGame() {
    setGameBegins(true);
    setGameOver(false);
    setTenzies(() => {
      const newTenzies = [];
      for (let i = 0; i < 10; i++) {
        const newTenzie = {
          id: nanoid(),
          value: generateRandomNumber(),
          checked: false,
        };

        newTenzies.push(newTenzie);
      }

      return [...newTenzies];
    });
    beginTimer();
  }

  function getPlayer() {
    return JSON.parse(localStorage.getItem("Players")) || [];
  }

  function savePlayer() {
    if (gameOver) {
      const player = {
        id: nanoid(),
        name: playerName,
        score: timer,
      };

      setPlayers((prevPlayers) => {
        return [player, ...prevPlayers];
      });

      localStorage.setItem("Players", JSON.stringify(players));
    }
  }

  return (
    <section className="font-karla">
      {gameBegins ? (
        <Board
          timer={timer}
          tenzies={tenzies}
          checkTenzie={checkTenzie}
          generateTenzies={generateTenzies}
          gameOver={gameOver}
          newGame={newGame}
        />
      ) : (
        <Start setGameBegins={setGameBegins} setPlayerName={setPlayerName} />
      )}
    </section>
  );
}
