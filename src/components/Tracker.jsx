import React, { useState, useEffect } from "react";
import styles from "../styles/Tracker.module.css";

function Tracker({ addLogEntry }) {
  const [isRunning, setIsRunning] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [distance, setDistance] = useState(0.0);
  const [speed, setSpeed] = useState(0.0);
  const [calories, setCalories] = useState(0);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        const now = new Date();
        const elapsed = now - startTime;
        setElapsedTime(elapsed);

        const seconds = elapsed / 1000;
        const newDistance = (seconds * 0.0028).toFixed(2);
        setDistance(newDistance);
        setSpeed((newDistance / (seconds / 3600)).toFixed(2));
        setCalories((newDistance * 50).toFixed(0));
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning, startTime]);

  const formatTime = (time) => {
    const hours = String(Math.floor(time / 3600000)).padStart(2, "0");
    const minutes = String(Math.floor((time % 3600000) / 60000)).padStart(2, "0");
    const seconds = String(Math.floor((time % 60000) / 1000)).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  const handleStart = () => {
    setIsRunning(true);
    setStartTime(new Date());
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleStop = () => {
    setIsRunning(false);
    addLogEntry({
      distance,
      time: formatTime(elapsedTime),
      speed,
      calories,
    });

    setElapsedTime(0);
    setDistance(0.0);
    setSpeed(0.0);
    setCalories(0);
  };

  return (
    <div className={styles.tracker}>
      <h2>Jogging Tracker</h2>
      <div className={styles.statsContainer}>
        <div className={styles.statsBox}>
          <p className={styles.label}>Total KM</p>
          <p className={styles.value}>{distance}</p>
        </div>
        <div className={styles.statsBox}>
          <p className={styles.label}>Durasi</p>
          <p className={styles.value}>{formatTime(elapsedTime)}</p>
        </div>
        <div className={styles.statsBox}>
          <p className={styles.label}>Kecepatan</p>
          <p className={styles.value}>{speed}</p>
        </div>
        <div className={styles.statsBox}>
          <p className={styles.label}>Kalori</p>
          <p className={styles.value}>{calories}</p>
        </div>
      </div>
      <div className={styles.buttons}>
        <button onClick={handleStart} disabled={isRunning}>Start</button>
        <button onClick={handlePause} disabled={!isRunning}>Pause</button>
        <button onClick={handleStop} disabled={!isRunning && !elapsedTime}>Stop</button>
      </div>
    </div>
  );
}

export default Tracker;
