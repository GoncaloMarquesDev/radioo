import "./TopBar.scss";
import { IoClose, IoRadioOutline } from "react-icons/io5";
import { useRadio } from "../../context/RadioContext";

function TopBar() {
  const { searchQuery, setSearchQuery } = useRadio();

  const handleClear = () => {
    setSearchQuery(""); //apaga o texto
  };

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
        <div className="search-wrapper">
          <input
            type="text"
            className="search"
            placeholder=" Search Station ..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button className="clear-btn" onClick={handleClear}>
              <IoClose />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
export default TopBar;
