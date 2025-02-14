import { useState } from "react";
import "../styles/TouchButtonTwo.css";

function TouchButtonTwo({ touchButtonTwoToggler }) {
  const [progressTwo, setProgressTwo] = useState(0);

  const handleTouchTwo = () => {
    setProgressTwo(0); // Reset progress
    let currentProgressTwo = 0;

    const interval = setInterval(() => {
      currentProgressTwo += 10; // Increase by 10% every 100ms
      setProgressTwo(currentProgressTwo);

      if (currentProgressTwo >= 100) {
        clearInterval(interval);
        touchButtonTwoToggler(); // Trigger action when full
      }
    }, 200);
  };

  return (
    <div className="finger-button-two-container">
      <div className="progress-bar-two">
        <div className="progress-fill-two" style={{ width: `${progressTwo}%` }}></div>
      </div>
      <button
        className="finger-button-two"
        onTouchStart={handleTouchTwo} // No more touch hold needed
        aria-label="Toggle Fingerprint"
      >
        <i className="fa-solid fa-fingerprint finger-two"></i>
      </button>
    </div>
  );
}

export default TouchButtonTwo;