import { useState } from "react";
import "./BottomNav.scss";
import {
  IoHome,
  IoTrendingUp,
  IoRadioOutline,
  IoBookmarkOutline,
  IoSettingsOutline,
} from "react-icons/io5";

function BottomNav() {

    const [activeTab,setActiveTab]=useState('home');
    console.log("activeTab", activeTab);
    const navItems = [
        { id:"home", label:"Home", icon:<IoHome/>},
        { id:"trending", label:"Trending", icon:<IoTrendingUp />},
        { id:"live", label:"Live", icon:<IoRadioOutline />},
        { id:"saved", label:"Saved", icon:<IoBookmarkOutline />},
        { id: "settings", label: "Settings", icon: <IoSettingsOutline /> },
    ];


  return (
    <nav className="bottom-nav">
      {navItems.map((item) => (
        <button
          key={item.id}
          type="button"
          // aqui adiciona a classe active
          className={`nav-item ${activeTab === item.id ? "active" : ""}`}
          //  atualiza o usestate onclick
          onClick={() => setActiveTab(item.id)}
        >
          <span className="nav-icon">{item.icon}</span>
          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  );
}

export default BottomNav;
