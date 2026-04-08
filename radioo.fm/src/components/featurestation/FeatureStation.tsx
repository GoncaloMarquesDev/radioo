import "./FeatureStation.scss";
import { useFeaturedStation } from "../../hooks/useFeaturedStation";
import { CiPlay1 } from "react-icons/ci";
import React from "react";
import "../../types/station";
import { useRadio } from "../../context/RadioContext";
import { DEFAULT_RADIO_IMG } from "../../constants/images";


function FeatureStation() {
  
  const { playStation } = useRadio();
  const { searchQuery }=useRadio();
  const station = useFeaturedStation();
  /*  const audioRef = React.useRef<HTMLAudioElement | null>(null); */

  if (!station) {
    return (
      <div className="container-feature-banner is-loading">
        <div className="skeleton-badge"></div>
        <div className="skeleton-title"></div>
        <div className="skeleton-text"></div>

        <div className="bottom-info">
          <div className="bottom-info-left">
            <div className="skeleton-small-text"></div>
            <div className="skeleton-small-text"></div>
          </div>
          <div className="bottom-info-right">
            <div className="skeleton-button"></div>
          </div>
        </div>
      </div>
    );
  }

  /* ------ */
  const bannerStyle = {
    "--bg-image": `url("${station.favicon || DEFAULT_RADIO_IMG}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  } as React.CSSProperties;

  const displayTags = station.tags
    ? station.tags.split(",").slice(0, 2).join(" • ")
    : "No tags available";
  console.log("station", station);

  /* funcao para a criacao do player  */
  /*  const handlePlay = () => {
    if (!station?.url_resolved) return;

    if(audioRef.current){
      audioRef.current.pause();
    }
    const audio = new Audio(station.url_resolved);
    audioRef.current=audio;
    audio.play().catch(err=>console.error("Play Error", err));
  
  }; */
 if (searchQuery.length > 0 || !station) return null;
  return (
    <div className="container-banner">
      <div style={bannerStyle} className="container-feature-banner">
        <div className="live-badge"><span className="pulse-dot"></span>Featured Station</div>

        <p className="station-name">{station.name}</p>
        <p className="station-country">{station.countrycode}</p>

        <div className="bottom-info">
          <div className="bottom-info-left">
            <p className="radioo-tags">{displayTags}</p>

            <p className="radioo-votes">{station.votes} Votes</p>
          </div>
          <div className="bottom-info-right">
            <button
              className="radioo-play-btn"
              onClick={() => station && playStation(station)}
            >
              <CiPlay1 className="icon-play-now" /> Play Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureStation;
