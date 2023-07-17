import React, { useState, useEffect } from "react";
import Header from "./header";
import Settings from "./settings";
import Timer from "./timer";
import Controls from "./controls";
import Footer from "./footer";

function Clock() {
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);
  const [timerMode, setTimerMode] = useState("Session");
  const [timeInSeconds, setTimeInSeconds] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);

  const handleIncrement = (type) => {
    if (type === "session") {
      if (sessionLength < 60) {
        setSessionLength(sessionLength + 1);
        if (timerMode === "Session") {
          setTimeInSeconds(timeInSeconds + 60);
        }
      }
    } else {
      if (breakLength < 60) {
        setBreakLength(breakLength + 1);
        if (timerMode === "Break") {
          setTimeInSeconds(timeInSeconds + 60);
        }
      }
    }
  };

  const handleDecrement = (type) => {
    if (type === "session") {
      if (sessionLength > 1) {
        setSessionLength(sessionLength - 1);
        if (timerMode === "Session") {
          setTimeInSeconds(timeInSeconds - 60);
        }
      }
    } else {
      if (breakLength > 1) {
        setBreakLength(breakLength - 1);
        if (timerMode === "Break") {
          setTimeInSeconds(timeInSeconds - 60);
        }
      }
    }
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (timeInSeconds % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  useEffect(() => {
    let countdown;

    if (isRunning && timeInSeconds > 0) {
      countdown = setInterval(() => {
        setTimeInSeconds((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeInSeconds === 0) {
      countdown = setTimeout(() => {
        if (timerMode === "Session") {
          setTimerMode("Break");
          setTimeInSeconds(breakLength * 60); // Set break time to 5 minutes (300 seconds)
        } else {
          setTimerMode("Session");
          setTimeInSeconds(sessionLength * 60); // Set session time to 25 minutes (1500 seconds)
        }
      }, 1000);
    }

    return () => clearInterval(countdown);
  }, [isRunning, timeInSeconds, timerMode]);

  const handleStartPause = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setTimerMode("Session");
    setSessionLength(25);
    setBreakLength(5);
    setTimeInSeconds(25 * 60);
    setIsRunning(false);
    const beepSound = document.getElementById("beep");
    beepSound.pause();
    beepSound.currentTime = 0;
  };

  return (
    <div id="clock">
      <Header />
      <Settings
        sessionLength={sessionLength}
        breakLength={breakLength}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
      <Timer
        timerMode={timerMode}
        timeInSeconds={timeInSeconds}
        formatTime={formatTime}
      />
      <Controls
        isRunning={isRunning}
        handleStartPause={handleStartPause}
        handleReset={handleReset}
      />
      <Footer />
    </div>
  );
}

export default Clock;
