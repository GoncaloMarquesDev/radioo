import { useRadio } from "../../context/RadioContext";
import Logo from "../logo/Logo";
import SidebarStationCard from "../sidebarstationcard/SideBarStationCard";
import "./SideBar.scss";
import { IoTrendingUp, IoBookmarkOutline, IoHome } from "react-icons/io5";

function SideBar() {
  const { selectedTag, setSelectedTag, topStations } = useRadio();

  const navItems = [
    { id: "home", label: "Home", icon: <IoHome /> },
    { id: "trending", label: "Trending", icon: <IoTrendingUp /> },
    { id: "favorites", label: "Saved", icon: <IoBookmarkOutline /> },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <Logo />
      </div>

      <nav className="sidebarnav">
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            // aqui adiciona a classe active
            className={`nav-item ${selectedTag === item.id ? "active" : ""}`}
            //  atualiza o usestate onclick
            onClick={() => setSelectedTag(item.id)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-divider "></div>

        <p className="station-header">STATIONS</p>
      </div>

      <div className="sidebar-stations">
        {topStations.slice(0, 10).map((station) => (
          <SidebarStationCard key={station.stationuuid} station={station} />
        ))}
      </div>
    </aside>
  );
}

export default SideBar;
