import { useState, useRef } from "react";
import "../styles/TouchButtonOne.css";

function TouchButtonOne({ touchButtonOneToggler, touchButtonOne }) {
  const [progress, setProgress] = useState(0);
  const holdTimer = useRef(null);
  const intervalTimer = useRef(null);

  const handleTouchStart = () => {
    setProgress(0);
    intervalTimer.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(intervalTimer.current);
          return 100;
        }
        return prev + 10; // Increments progress every 100ms
      });
    }, 100);

    holdTimer.current = setTimeout(() => {
      touchButtonOneToggler(); // Trigger action after hold
      setProgress(0);
      clearInterval(intervalTimer.current);
    }, 1000); // 1-second hold
  };

  const handleTouchEnd = () => {
    clearTimeout(holdTimer.current);
    clearInterval(intervalTimer.current);
    setProgress(0); // Reset progress if released early
  };

  return (
    <div className="finger-button-one-container">
      {}
      <button
        className="finger-button-one"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        aria-label="Toggle Fingerprint"
      >
        <i className="fa-solid fa-fingerprint finger-one"></i>
      </button>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
}

export default TouchButtonOne;
