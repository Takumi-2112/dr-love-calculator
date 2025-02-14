import "../styles/VdayModal.css";
import gengar from "../assets/gengar.png";
import kirby from "../assets/kirby.png";

function VdayModal({ touchButtonOne, touchButtonTwo, closeVdayModal }) {
  return (
    <div className="modal">
      <div className="modal-overlay">
        <div className="modal-content">
          <div className="modal-close-container">
            <h3 className="invisible">k</h3>
            {touchButtonOne === 1 && touchButtonTwo === 1 ? <h2 className="login-title">❌2% MATCH...😬</h2> : null}
                    {touchButtonOne > 1 && touchButtonTwo === 1 ? <h2 className="login-title">❌2% MATCH...😬</h2> : null}
                    {touchButtonOne === 1 && touchButtonTwo > 1 ? <h2 className="login-title">❌2% MATCH...😬</h2> : null}
                    {touchButtonOne > 1 && touchButtonTwo > 1 ? <h2 className="login-title"><img className="gengar" src={gengar} alt="" />1000% MATCH BABAY <img className="kirby" src={kirby} alt="" /></h2> : null}
            <i onClick={closeVdayModal} className="fa-solid fa-xmark close-modal"></i>
          </div>
          <div className="modal-assessment-div">
                    {touchButtonOne === 1 && touchButtonTwo === 1 ? <h2>YOU SHOCK ME... YOU'RE PART OF THE PSYCHO CIRCUS IF YOU THINK WE'RE MEANT TO BE</h2> : null}
                    {touchButtonOne > 1 && touchButtonTwo === 1 ? <h2>YOU SHOCK ME... YOU'RE PART OF THE PSYCHO CIRCUS IF YOU THINK WE'RE MEANT TO BE</h2> : null}
                    {touchButtonOne === 1 && touchButtonTwo > 1 ? <h2>YOU SHOCK ME... YOU'RE PART OF THE PSYCHO CIRCUS IF YOU THINK WE'RE MEANT TO BE</h2> : null}
                    {touchButtonOne > 1 && touchButtonTwo > 1 ? <h2>HOTTER THAN HELL, I WAS MADE FOR LOVIN YOU BABY... YOU REALLY GET MY LOVE GUN RUNNIN HOT! WILL YOU BE MINE?</h2> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VdayModal;
