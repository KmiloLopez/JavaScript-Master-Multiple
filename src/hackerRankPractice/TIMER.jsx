import React, { useEffect, useState } from "react";

const TIMER = () => {
  const [sec, setSecs] = useState(60);
  const [paused, setPaused] = useState(false);

  const playPause = () => {
    setPaused((prev) => !prev);
  };
  const countDown = () => {
    if (!paused) {
      setSecs((sec) => sec - 1);
    }
  };
  useEffect(() => {
    if (!paused) {
      console.log("First time setInterval");
      const interval = setInterval(() => {
        countDown();
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [paused]);

  return (
    <>
      <h3>TIMER, stop the timer</h3>
      <p>{sec}</p>
      <button onClick={playPause}>STOP</button>
      {paused ? <p>Paused</p> : <p>No paused</p>}
    </>
  );
};

export default TIMER;
