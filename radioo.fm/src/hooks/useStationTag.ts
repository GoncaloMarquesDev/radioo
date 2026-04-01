import type { Station } from "../types/station"; 

export function useStationTags(station: Station | null, limit: number = 3) {
  
  if (!station || !station.tags) return [];

  return station.tags
    .split(',')
    .map(t => t.trim())
    .slice(0, limit);
}
