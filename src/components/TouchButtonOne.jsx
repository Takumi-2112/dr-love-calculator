import { useState } from "react";
import "../styles/TouchButtonOne.css";

function TouchButtonOne({ touchButtonOneToggler, touchButtonOne }) {
  const [progress, setProgress] = useState(0);

  const handleTouch = () => {
    setProgress(0); // Reset progress
    let currentProgress = 0;

    const interval = setInterval(() => {
      currentProgress