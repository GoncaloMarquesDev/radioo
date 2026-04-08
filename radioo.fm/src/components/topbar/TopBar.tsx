import "./TopBar.scss";
import { IoRadioOutline } from "react-icons/io5";
import { PiBellSimpleThin } from "react-icons/pi";
import { useRadio } from "../../context/RadioContext";

function TopBar() {
   const { searchQuery, setSearchQuery } = useRadio();
  
  return (
    <header className="topbar">
      <div className="nav">
        <div className="icon-wrapper">
          <div className="icon-radioo">
            <IoRadioOutline
              aria-label="Broadcast icon"
              className="icon-radio"
            />
          </div>
          <div className="radioo-text">
            RADIOO<span className="fm">FM</span>
          </div>
        </div>

        <input
          type="text"
          className="search"
          placeholder=" Search Station ..."
           value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <button className="icon-right">
          <PiBellSimpleThin className="icon-bell" />
        </button>
      </div>
    </header>
  );
}
export default TopBar;
