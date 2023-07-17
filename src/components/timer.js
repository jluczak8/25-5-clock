import React, { useEffect } from "react";

function Timer({ timerMode, timeInSeconds, formatTime }) {
  useEffect(() => {
    const beepSound = document.getElementById("beep");
    if (timeInSeconds === 0) {
      beepSound.currentTime = 0;
      beepSound.play();
    }
  }, [timeInSeconds]);
  return (
    <div id="timer">
      <div id="timer-label">{timerMode}</div>
      <div id="time-left">{formatTime(timeInSeconds)}</div>
      <audio
        id="beep"
        src="https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"
      />
    </div>
  );
}

export default Timer;
