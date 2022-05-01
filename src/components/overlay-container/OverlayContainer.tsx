import { ReactChildren } from "../../types";
import "./overlay-container.css";

const OverlayContainer = ({ children }: ReactChildren) => {
  return <div className="overlay-container">{children}</div>;
};

export { OverlayContainer };
