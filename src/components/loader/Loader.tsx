import "./loader.css";
import { loaderType } from "../../types";

function Loader({ isFullScreen }: loaderType) {
  return (
    <div
      className={
        "loader-container " + (isFullScreen ? "loader-full-screen" : "")
      }
    >
      <div className="loader"></div>
    </div>
  );
}

export { Loader };
