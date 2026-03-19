import { useEffect, useState } from "react";
import { getStationsByTag } from "../api/Stations";
import type { Station } from "../types/station";

export function useFeaturedStation() {
  const [station, setStation] = useState<Station | null>(null);

  useEffect(() => {
    
    async function loadStation() {
      const stations = await getStationsByTag("lofi");

      const random =
        stations[Math.floor(Math.random() * stations.length)];

      setStation(random);
    }

    loadStation();
  }, []);

  return station;
}