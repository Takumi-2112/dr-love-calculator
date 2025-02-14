import { useState } from "react";
import "../styles/TouchButtonTwo.css";

function TouchButtonTwo({ touchButtonTwoToggler }) {
  const [progressTwo, setProgressTwo] = useState(0);

  const handleTouchTwo = () => {
    setProgressTwo(0); // Reset progress
    let currentProgressTwo = 0;

    const interval = setInterval(() => {
      currentProgressT