import type { Station } from "../types/station";
const BASE_URL = "https://de1.api.radio-browser.info/json";

export async function getTopStations(limit: number = 50): Promise<Station[]> {
  // endpoint rádios mais votadas
  const res = await fetch(
    `${BASE_URL}/stations/topvote?limit=${limit}&hidebroken=true`,
  );
  return res.json();
}

export async function getStationsByTag(tag: string): Promise<Station[]> {
  const res = await fetch(`${BASE_URL}/stations/bytag/${tag}?limit=50`);

  return res.json();
}

// funcao para pesquisa
export async function searchStationsByName(
  name: string,
  limit: number = 50,
): Promise<Station[]> {
  if (!name.trim()) return [];

  // endpoint 'byname' da API
  const res = await fetch(
    `${BASE_URL}/stations/byname/${encodeURIComponent(name)}?limit=${limit}&hidebroken=true&order=votes&reverse=true`,
  );

  return res.json();
}
export const getApiStats = async () => {
  try {
    const res = await fetch(`${BASE_URL}/stats`);

    if (!res.ok) return null;

    const data = await res.json();

    return data.stations;
  } catch (error) {
    console.error("Error loading statistics:", error);
    return null;
  }
};

export const getTrendingStations = async (limit = 20): Promise<Station[]> => {
  try {
    const response = await fetch(
      `https://de1.api.radio-browser.info/json/stations/topvote?limit=${limit}`,
    );

    if (!response.ok) throw new Error("Error loading trend");

    return await response.json();
  } catch (error) {
    console.error("Trending API Error", error);
    return [];
  }
};
