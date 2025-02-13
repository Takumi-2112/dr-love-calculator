import { useRef } from "react";
import "../styles/TouchButtonTwo.css";

function TouchButtonTwo({ touchButtonTwoToggler }) {
  const holdTimer = useRef(null);

  const handleTouchStart = () => {
    holdTimer.current = setTimeout(() => {
      touchButtonTwoToggler(); // Trigger only if held for 1 sec
    }, 3000);
  };

  const handleTouchEnd = () => {
    clearTimeout(holdTimer.current); // Cancel if released early
  };

  return (
    <button
      className="finger-button-two"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Toggle Fingerprint"
    >
      <i className="fa-solid fa-fingerprint finger-two"></i>
    </button>
  );
}

export default TouchButtonTwo;