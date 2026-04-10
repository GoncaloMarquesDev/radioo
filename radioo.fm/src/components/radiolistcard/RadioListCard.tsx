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
    "137, 200, 21",
    "59, 130, 246",
    "231, 76, 60",
    "155, 89, 182",
    "241, 196, 15",
  ];

  // ✅ GERAR COR CONSISTENTE E VARIADA
  const colorIndex =
    station.stationuuid
      .split("")
      .reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length;

  const accentColor = colors[colorIndex];

  // ✅ VALIDAR IMAGEM
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

  // ✅ STYLE FINAL (GRADIENT + IMAGEM)
  const imgRadio = {
    backgroundImage: `
    linear-gradient(
  to top,
  rgba(${accentColor}, 1) 0%,
  rgba(${accentColor}, 0.4) 30%,
  rgba(${accentColor}, 0.3) 50%,
  rgba(${accentColor}, 0) 100%
),
    url("${currentImg}")
  `,
    backgroundSize: "cover",
    backgroundPosition: "center",
  } as React.CSSProperties;

  return (
    <button
      style={{ "--accent-color": `rgb(${accentColor})` } as React.CSSProperties}
  className={`wrapper-radio-card ${isPlaying ? "is-playing" : ""}`}
  onClick={() => playStation(station, accentColor)}
    >
      <div style={imgRadio} className="top-radio-card"></div>

      <div className="bottom-radio-card">
        <p className="station-title">{shortName}</p>
        <p>{station.bitrate} kbps</p>

        <div className="bottom-votes">
          <p>{station.votes} Votes</p>

          {/* ✅ CORRIGIDO: div em vez de button */}
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
