import { useState, useEffect } from "react";
import "./styles/App.css";
import welcomeDr from "../public/welcome-dr.png";
import drGene from "../public/dr-gene.png";
import drLove from "../public/dr-love.png";
import VdayModal from "./components/VdayModal";
import TouchButtonOne from "./components/TouchButtonOne";
import TouchButtonTwo from "./components/TouchButtonTwo";

function App() {
  const [vdayModal, setVdayModal] = useState(false);
  const [touchButtonOne, setTouchButtonOne] = useState(0);
  const [touchButtonTwo, setTouchButtonTwo] = useState(0);

  useEffect(() => {
    if ((touchButtonOne === 1 && touchButtonTwo === 1) || (touchButtonOne === 2 && touchButtonTwo === 2)) {
      const timer = setTimeout(() => {
        setVdayModal(true);
      }, 1500); // 2-second delay
  
      return () => clearTimeout(timer); // Cleanup in case state changes before timeout finishes
    }
    console.log(`Touch Button One state updated to: ${touchButtonOne}`);
    console.log(`Touch Button Two state updated to: ${touchButtonTwo}`);
  }, [touchButtonOne, touchButtonTwo]);


  const closeVdayModal = () => {
    setVdayModal((prevState) => !prevState);
  };

  const touchButtonOneToggler = () => {
    setTouchButtonOne((prevState) => prevState + 1);
  };

  const touchButtonTwoToggler = () => {
    setTouchButtonTwo((prevState) => prevState + 1);
  };

  return (
    <div className="app-master">
      {touchButtonOne >= 1 && touchButtonTwo >= 1 ? (
        <>
          {vdayModal && (
            <VdayModal
              touchButtonOne={touchButtonOne}
              touchButtonTwo={touchButtonTwo}
              closeVdayModal={closeVdayModal}
            />
          )}
          <TouchButtonOne
            touchButtonOneToggler={touchButtonOneToggler}
            touchButtonOne={touchButtonOne}
          />
          <div className="content-div">
            <div className="title-div">
              <h1 className="title">
                DR LOVE'S <span className="vday">VDAY</span> CALCULATOR
              </h1>
            </div>
            {touchButtonOne === 0 && touchButtonTwo === 0 ? (
              <div className="welcome-dr-div">
                <img className="welcome-dr-img" src={welcomeDr} alt="" />
              </div>
            ) : null}
            {touchButton