import '../styles/VdayModal.css';

function VdayModal() {
  return (
    <div className="modal">
      <div className="modal-overlay">
        <div className="modal-content">
          <div className="modal-close-container">
            <i className="fa-solid fa-xmark close-modal"></i>
          </div>
          <h2 className="login-title">LOGIN</h2>
          <div className="modal-interact">
            <button className="login-button">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VdayModal;