import "../styles/VdayModal.css";
import gengar from "../assets/gengar.png";
import kirby from "../assets/kirby.png";

function VdayModal({ touchButtonOne, touchButtonTwo, vdayModalToggler }) {
  return (
    <div className="modal">
      <div className="modal-overlay">
        <div className="modal-content">
          <div className="modal-close-container">
            <h3>k</h3>
            <h2 className="login-title"><img className="gengar" src={gengar} alt="" />1000% MATCH BABAY <img className="kirby" src={kirby} alt="" /></h2>
            <i onClick={vdayModalToggler} className="fa-solid fa-xmark close-modal"></i>
          </div>
          <div className="modal-assessment-div">
            <h2>I WAS MADE FOR LOVIN YOU BABY... YOU REALLY GET MY LOVE GUN RUNNIN HOT! WILL YOU BE MINE?</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VdayModal;
