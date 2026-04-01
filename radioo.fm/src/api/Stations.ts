import type { Station } from "../types/station";
const BASE_URL = "https://de1.api.radio-browser.info/json";


export async function getTopStations(limit: number = 50): Promise<Station[]> {
  // Este endpoint traz as rádios mais votadas de toda a base de dados
  const res = await fetch(`${BASE_URL}/stations/topvote?limit=${limit}&hidebroken=true`);
  return res.json();
}



export async function getStationsByTag(tag: string): Promise<Station[]> {
  const res = await fetch(`${BASE_URL}/stations/bytag/${tag}?limit=50`);

  return res.json();


}
