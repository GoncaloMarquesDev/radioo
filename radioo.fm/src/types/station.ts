export type Station = {
  name: string;
  favicon: string;
  url_resolved: string;
  tags: string;
  country: string;
  votes: number;
  countrycode: string;
  stationuuid: string;
  id: number;
  bitrate: number;
};

export interface RadioContextType {
  selectedTag: string;
  setSelectedTag: (tag: string) => void;
  currentStation: Station | null;
  /* playStation: (station: Station, color: string) => void; */
  playStation: (station: Station, color?: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  favorites: Station[];
  toggleFavorite: (station: Station) => void;
  activeColor: string; 
  stations:Station[];
  topStations:Station[];
}
export interface SidebarStationCardProps {
  station: Station;
  
}