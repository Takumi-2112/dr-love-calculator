import { useState } from "react";
import "../styles/TouchButtonOne.css";

function TouchButtonOne({ touchButtonOneToggler, touchButtonOne }) {
  const [progress, setProgress] = useState(0);

  const handleTouch = () => {
    setProgress(0); // Reset progress
    let currentProgress = 0;

    const interval = setInterval(() => {
      currentProgress += 10; // Increase by 10% every 100ms
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(interval);
        touchButtonOneToggler(); // Trigger action when full
      }
    }, 200);
  };

  return (
    <div className="finger-button-one-container">
      <button
        className="finger-button-one"
        onTouchStart={handleTouch} // No more touch hold needed
        aria-label="Toggle Fingerprint"
      >
        <i className="fa-solid fa-fingerprint finger-one"></i>
      </button>
      <div className="progress-bar-one">
        <div className="progress-fill-one" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
}

export default TouchButtonOne;
