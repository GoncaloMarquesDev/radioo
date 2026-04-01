import { useEffect, useState } from "react";
import { getTopStations } from "../api/Stations";
import type { Station } from "../types/station";

export function useFeaturedStation() {
  const [station, setStation] = useState<Station | null>(null);

  useEffect(() => {
    
    async function loadStation() {
      const stations = await getTopStations(50);

      const random =
        stations[Math.floor(Math.random() * stations.length)];

      setStation(random);
    }

    loadStation();
  }, []);

  return station;
}