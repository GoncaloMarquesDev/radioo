import { useState, useEffect } from "react";
import { getStationsByTag, searchStationsByName } from "../../api/Stations";
import type { Station } from "../../types/station";
import RadioListCard from "../radiolistcard/RadioListCard";
import { useRadio } from "../../context/RadioContext";
import "./RadioListFromPills.scss";
import { LuRadio } from "react-icons/lu";

function RadioListFromPills() {
  const [visibleCount, setVisibleCount] = useState(10);
  const { selectedTag, searchQuery, favorites } = useRadio();
  const [stations, setStations] = useState<Station[]>([]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  useEffect(() => {
    setVisibleCount(10);
    const fetchData = async () => {
      if (searchQuery.trim().length > 2) {
        const results = await searchStationsByName(searchQuery);
        setStations(results);
      } else if (selectedTag === "favorites") {
        // Confirma se o ID na Pill é "favorite"
        setStations(favorites);
      } else {
        const results = await getStationsByTag(selectedTag);
        setStations(results);
      }
    };

    fetchData();
  }, [selectedTag, searchQuery, favorites]);

   return (
    <div className="radio-list-container">
      
      {/* LÓGICA DE ESTADO VAZIO PARA FAVORITOS */}
      {selectedTag === "favorites" && favorites.length === 0 ? (
        <div className="empty-state">
           <LuRadio  className="empty-icon" />
          <p>No favorite radio selected.</p>
          <span>Explore categories and select favorite radios.</span>
         
        </div>
      ) : (
        /* LISTA NORMAL DE RÁDIOS (Favorites ou pelas  Tags) */
        <div className="radio-list-wrapper">
          {stations.slice(0, visibleCount).map((item: Station, index: number) => (
            <RadioListCard key={item.stationuuid || index} station={item} />
          ))}
        </div>
      )}

      {/* Btn Load More - só é visivel se não estiver nos favoritos e houver mais para carregar */}
      {selectedTag !== "favorites" && visibleCount < stations.length && (
        <button className="load-more-btn" onClick={handleLoadMore}>
          Discover More Stations
        </button>
      )}
    </div>
  );

}

export default RadioListFromPills;
