import "../styles/TouchButtonTwo.css";
function TouchButtonTwo({ touchButtonTwoToggler }) {
  return (
    <button className="finger-button-two" onClick={touchButtonTwoToggler}><i className="fa-solid fa-fingerprint finger-two"></i></button>
  );
}

export default TouchButtonTwo;