import { useRef } from "react";
import "../styles/TouchButtonTwo.css";

function TouchButtonTwo({ touchButtonTwoToggler }) {
  const holdTimer = useRef(null);

  const handleTouchStart = () => {
    holdTimer.current = setTimeout(() => {
      touchButtonTwoToggler(); // Trigger only if held for 1 sec
    }, 3000);
  };

  const handleTouchEnd = () 