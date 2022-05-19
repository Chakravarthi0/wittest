import { Loader } from "../";
import "./loading-modal.css";

const LoadingModal = () => {
  return (
    <div className="modal-bg">
      <div className="modal loading-modal position-rel">
        <div className="modal-actions quit-modal-actions">
          <Loader isFullScreen={true} />
        </div>
      </div>
    </div>
  );
};

export { LoadingModal };
