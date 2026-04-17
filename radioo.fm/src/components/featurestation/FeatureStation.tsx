import "./FeatureStation.scss";
import { useFeaturedStation } from "../../hooks/useFeaturedStation";
import { CiPlay1 } from "react-icons/ci";
import React, { useEffect, useState } from "react";
import "../../types/station";
import { useRadio } from "../../context/RadioContext";
import { DEFAULT_RADIO_IMG } from "../../constants/images";

function FeatureStation() {
  const bannerColor = "59, 130, 246";
  const { playStation, searchQuery } = useRadio();
  const station = useFeaturedStation();

  const [currentImg, setCurrentImg] = useState(DEFAULT_RADIO_IMG);

  useEffect(() => {
    //versao melhorada q reage á mudanca de resolucao
    if (!station) return;

    const checkImage = () => {
      const isDesktop = window.innerWidth >= 1024;

      if (station.favicon) {
        const img = new Image();
        img.src = station.favicon;

        img.onload = () => {
          if (isDesktop && img.width < 200) {
            setCurrentImg(DEFAULT_RADIO_IMG);
          } else {
            setCurrentImg(station.favicon);
          }
        };

        img.onerror = () => setCurrentImg(DEFAULT_RADIO_IMG);
      } else {
        setCurrentImg(DEFAULT_RADIO_IMG);
      }
    };

    checkImage();
    window.addEventListener("resize", checkImage);

    return () => window.removeEventListener("resize", checkImage);
  }, [station]);

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

  const displayTags = station.tags
    ? station.tags.split(",").slice(0, 2).join(" • ")
    : "No tags available";

  if (searchQuery.length > 0) return null;

  return (
    <div className="container-banner">
      <div
        className="container-feature-banner"
        style={{ "--bg-image": `url("${currentImg}")` } as React.CSSProperties}
      >
        <div className="live-badge">
          <span className="pulse-dot"></span>Featured Station
        </div>

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
              onClick={() => station && playStation(station, bannerColor)}
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
