import "./SideBarStationCard.scss";
import type { SidebarStationCardProps } from "../../types/station";

import { useRadio } from "../../context/RadioContext";
import { DEFAULT_RADIO_IMG } from "../../constants/images";
import { useEffect, useState } from "react";



function SidebarStationCard({ station }: SidebarStationCardProps) {
  const { playStation, currentStation } = useRadio();

  const isPlaying =
    currentStation?.stationuuid === station.stationuuid;

  const shortName = station.name
    ? station.name.split(" ").slice(0, 2).join(" ")
    : "Radio";

  const [currentImg, setCurrentImg] = useState(
    station.favicon || DEFAULT_RADIO_IMG
  );

  
  useEffect(() => {
    if (station.favicon) {
      const img = new Image();
      img.src = station.favicon;
      img.onerror = () => setCurrentImg(DEFAULT_RADIO_IMG);
      img.onload = () => setCurrentImg(station.favicon);
    } else {
      setCurrentImg(DEFAULT_RADIO_IMG);
    }
  }, [station.favicon]);

  return (
    <div
    
    
      className={`sidebar-station-item ${isPlaying ? "is-playing" : ""}`}
      onClick={() => playStation(station)}
    >
      <div className="img-container">
        <img src={currentImg} alt={station.name} />
      </div>

      <div className="station-in ">
        <p className="side-station-name">{shortName}</p>
        <p className="genre">
          {station.tags?.split(",")[1] || "Radio"}
        </p>
      </div>
    </div>
  );
}

export default SidebarStationCard;