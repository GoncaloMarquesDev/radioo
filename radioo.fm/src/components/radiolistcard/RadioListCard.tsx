import "./RadioListCard.scss";
import type { Station } from "../../types/station";
import React, { useState, useEffect } from "react";
import { useRadio } from "../../context/RadioContext";
import { DEFAULT_RADIO_IMG } from "../../constants/images";

interface RadioListCardProps {
  station: Station;
}

function RadioListCard({ station }: RadioListCardProps) {
  const { playStation } = useRadio();
  //  estado para a imagem final (começa com o favicon ou a default)
  const [currentImg, setCurrentImg] = useState(
    station.favicon || DEFAULT_RADIO_IMG,
  );

  useEffect(() => {
    if (station.favicon) {
      const img = new Image();
      img.src = station.favicon;
      // Se der erro (402, 404, etc)mostra o default
      img.onerror = () => setCurrentImg(DEFAULT_RADIO_IMG);
      // Se carregar bem, usa o favicon
      img.onload = () => setCurrentImg(station.favicon);
    } else {
      setCurrentImg(DEFAULT_RADIO_IMG);
    }
  }, [station.favicon]);

  const shortName = station.name
    ? station.name.split(" ").slice(0, 3).join("  ")
    : "Radio";

  const imgRadio = {
    "--bg-image": `url("${currentImg}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  } as React.CSSProperties;

  return (
    <button className="wrapper-radio-card" onClick={() => playStation(station)}>
      <div style={imgRadio} className="top-radio-card">
        <p> Live </p>
      </div>
      <div className="bottom-radio-card">
        <p className="station-title"> {shortName} </p>
        <p> {station.bitrate} kbps</p>
        <div className="bottom-votes">
          <p>{station.votes} Votes </p>
          <p> Tune In </p>
        </div>
      </div>
    </button>
  );
}

export default RadioListCard;
