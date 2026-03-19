import type { Station } from "../types/station";
const BASE_URL = "https://de1.api.radio-browser.info/json";

export async function getStationsByTag(tag: string): Promise<Station[]> {
  const res = await fetch(`${BASE_URL}/stations/bytag/${tag}?limit=50`);

  return res.json();
}
