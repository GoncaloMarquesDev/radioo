import type { Station } from "../types/station";

// O prefixo '/radio-api' será interceptado pelo Vite (Local) ou pelo Vercel (Produção)
const BASE_URL = "/radio-api"; 

export async function getStationsByTag(tag: string): Promise<Station[]> {
  // A URL final será: /radio-api/stations/bytag/lofi?limit=50
  const res = await fetch(`${BASE_URL}/stations/bytag/${tag}?limit=50`);

  if (!res.ok) throw new Error("Falha ao carregar estações");
  return res.json();
}
