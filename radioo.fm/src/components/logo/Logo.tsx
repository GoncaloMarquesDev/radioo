import { IoRadioOutline } from "react-icons/io5";
import "./Logo.scss"

function Logo() {
  return (
    <div className="icon-wrapper">
      <div className="icon-radioo">
        <IoRadioOutline aria-label="Broadcast icon" className="icon-radio" />
      </div>
      <div className="radioo-text">
        RADIOO<span className="fm">FM</span>
      </div>
    </div>
  );
}
export default Logo;
