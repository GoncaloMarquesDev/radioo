import "./TopBar.scss";
import { IoClose/* , IoRadioOutline */ } from "react-icons/io5";
import { useRadio } from "../../context/RadioContext";
import Logo from "../logo/Logo";
import { FaSearch } from "react-icons/fa";

function TopBar() {
  const { searchQuery, setSearchQuery } = useRadio();

  const handleClear = () => {
    setSearchQuery(""); //apaga o texto
  };

  return (
    <header className="topbar">
      <div className="nav">
        <div className="topbar-logo-container">
          <Logo/>
        </div>
        
        <div className="search-wrapper">
           <FaSearch className="search-icon" />
          <input
            type="text"
            className="search"
            placeholder= "  Search Station ..."
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
