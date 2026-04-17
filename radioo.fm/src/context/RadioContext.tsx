import { createContext, useState, useContext, useEffect } from "react";
import { type ReactNode } from "react";
import type { Station, RadioContextType } from "../types/station";
import { getTrendingStations,getTopStations } from "../api/Stations";


const RadioContext = createContext<RadioContextType | undefined>(undefined);

export function RadioProvider({ children }: { children: ReactNode }) {
  const [activeColor, setActiveColor] = useState<string>("59, 130, 246");

  const [selectedTag, setSelectedTag] = useState("all");

  const [currentStation, setCurrentStation] = useState<Station | null>(null);

  const [stations, setStations] = useState<Station[]>([]);

  const [topStations, setTopStations] = useState<Station[]>([]);



  const playStation = (station: Station, color?: string) => {
    setCurrentStation(station);
    if (color) setActiveColor(color);
  };

  const [favorites, setFavorites] = useState<Station[]>(() => {
    // Tenta carregar do localStorage ao iniciar
    const saved = localStorage.getItem("radioo_favs");
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
  const loadTop = async () => {
    const data = await getTopStations(10);
    setTopStations(data);
  };

  loadTop();
}, []);

  useEffect(() => {
  const loadTrendingStations = async () => {
    if (selectedTag === "trending") {
      const data = await getTrendingStations(24);
      setStations(data);
    }
  };
  loadTrendingStations();
}, [selectedTag]);


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
    <RadioContext.Provider
      value={{
        selectedTag,
        setSelectedTag,
        currentStation,
        activeColor,
        playStation,
        searchQuery,
        setSearchQuery,
        favorites,
        toggleFavorite,
        stations,
        topStations

      }}
    >
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
