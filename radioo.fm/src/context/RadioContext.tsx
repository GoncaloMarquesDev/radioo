import { createContext, useState, useContext, useEffect } from "react";
import { type ReactNode } from "react";
import type { Station, RadioContextType } from '../types/station';

const RadioContext = createContext<RadioContextType | undefined>(undefined);

export function RadioProvider({ children }: { children: ReactNode }) {

  
  const [selectedTag, setSelectedTag] = useState("all"); 

  const [currentStation,setCurrentStation]=  useState<Station |  null> ( null);

  const playStation = (station:Station)=>{
    setCurrentStation(station);
  };


  const [favorites, setFavorites] = useState<Station[]>(() => {
  // Tenta carregar do localStorage ao iniciar
  const saved = localStorage.getItem("radioo_favs");
  return saved ? JSON.parse(saved) : [];
});


useEffect(() => {
  localStorage.setItem("radioo_favs", JSON.stringify(favorites));
}, [favorites]);

const toggleFavorite = (station: Station) => {
  setFavorites((prev) => {
    const isFav = prev.find((s) => s.stationuuid === station.stationuuid);
    if (isFav) {
      // Se já é favorito, remove
      return prev.filter((s) => s.stationuuid !== station.stationuuid);
    } else {
      // Se não é, adiciona
      return [...prev, station];
    }
  });
};
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <RadioContext.Provider value={{ selectedTag, setSelectedTag,currentStation, playStation,
     searchQuery, setSearchQuery, favorites, toggleFavorite }}>
      {children}
    </RadioContext.Provider>
  );
}
export const useRadio = () => {
  const context = useContext(RadioContext);
  
  
  if (!context) {
    throw new Error("useRadio must be used inside a radioProvider");
  }
  
  return context; 
};
