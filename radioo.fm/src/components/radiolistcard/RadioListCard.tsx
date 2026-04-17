import "./RadioListCard.scss";
import type { Station } from "../../types/station";
import React, { useState, useEffect } from "react";
import { useRadio } from "../../context/RadioContext";
import { DEFAULT_RADIO_IMG } from "../../constants/images";
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";

interface RadioListCardProps {
  station: Station;
}

function RadioListCard({ station }: RadioListCardProps) {
  const { toggleFavorite, favorites, playStation, currentStation } = useRadio();

  const isPlaying = currentStation?.stationuuid === station.stationuuid;

  const [currentImg, setCurrentImg] = useState(
    station.favicon || DEFAULT_RADIO_IMG,
  );

  const isFavorite = favorites.some(
    (fav) => fav.stationuuid === station.stationuuid,
  );

  // ✅ CORES
  const colors = [
    "0, 255, 198", // aqua neon
    "0, 180, 255", // electric blue
    "120, 80, 255", // purple neon
    "30, 215, 96", // green spotify style
    "0, 210, 255", // cyan
    "180, 0, 255", // cyber purple
    "255, 140, 0", // orange
    "255, 70, 70", // warm red
    "90, 200, 250", // sky blue
    "140, 255, 140", // soft green
    "255, 180, 90", // warm amber
    "0, 120, 255", // deep blue
    "255, 0, 120", // hot pink
    "100, 255, 220", // mint cyan
    "170, 170, 255", // soft indigo
  ];

  // gera uma cor random
  const colorIndex =
    station.stationuuid
      .split("")
      .reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length;

  const accentColor = colors[colorIndex];

  // VALIDA A IMAGEM
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

  const shortName = station.name
    ? station.name.split(" ").slice(0, 3).join(" ")
    : "Radio";

  // STYLE FINAL(gradient e  a imagem)
  const imgRadio: React.CSSProperties = {
    backgroundImage: `
    linear-gradient(
      to top,
      rgba(${accentColor}, 0.85),
      rgba(${accentColor}, 0.4),
      rgba(${accentColor}, 0.1),
      transparent
    ),
    url("${currentImg}")
  `,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <button
      style={{ "--accent-color": `rgb(${accentColor})` } as React.CSSProperties}
      className={`wrapper-radio-card ${isPlaying ? "is-playing" : ""}`}
      onClick={() => playStation(station, accentColor)}
    >
      <div style={imgRadio} className="top-radio-card"></div>

      <div className="bottom-radio-card">
        <div className=""></div>
        <p className="station-title">{shortName}</p>
        <p>{station.bitrate} kbps</p>

        <div className="bottom-votes">
          <p>{station.votes} Votes</p>

          <div
            className={`fav-button ${isFavorite ? "is-fav" : ""}`}
            onClick={(e) => {
              e.stopPropagation();
              toggleFavorite(station);
            }}
          >
            {isFavorite ? <IoBookmark /> : <IoBookmarkOutline />}
          </div>
        </div>
      </div>
    </button>
  );
}

export default RadioListCard;
