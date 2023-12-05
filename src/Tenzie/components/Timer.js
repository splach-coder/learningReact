import { useState, useEffect } from "react";

export default function Timer(props) {
  const [timerUI, setTimerUI] = useState("");

  // Function to format the time in HH:mm:ss format
  function formatTime(milliseconds) {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    const formattedSeconds = (seconds % 60).toString().padStart(2, "0");
    const formattedMinutes = (minutes % 60).toString().padStart(2, "0");
    const formattedHours = hours.toString().padStart(2, "0");

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }

  useEffect(
    function () {
      const timer = formatTime(props.timer);
      setTimerUI(timer);
    },
    [props.timer]
  );

  return (
    <div className="absolute top-2 left-2 text-lg font-bold">{timerUI}</div>
  );
}
