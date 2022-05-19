import { useNavigate } from "react-router-dom";

const TimeUPModal = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="modal-bg">
        <div className="modal position-rel">
          <h2 className="text-large list-head">Times Up!!!</h2>

          <p>Check out the reseults</p>
          <div className="modal-actions quit-modal-actions">
            <button
              className="btn btn-primary modal-close-btn"
              onClick={() => navigate("/result")}
            >
              Results
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { TimeUPModal };
