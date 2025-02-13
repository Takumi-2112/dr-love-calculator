import '../styles/TouchButtonOne.css';
function TouchButtonOne( { touchButtonOneToggler } ) {
  return (
    <button className="finger-button-one" onClick={touchButtonOneToggler}><i className="fa-solid fa-fingerprint finger-one"></i></button>
  );
}

export default TouchButtonOne;