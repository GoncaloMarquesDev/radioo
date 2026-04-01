export type Station = {
  name: string;
  favicon: string;
  url_resolved: string;
  tags: string;
  country: string;
  votes:number;
  countrycode : string;
  stationuuid: string;
  id:number;
  bitrate: number;
};

export interface RadioContextType {
  selectedTag: string;
  setSelectedTag: (tag: string) => void;
  currentStation: Station | null;
  playStation: (station: Station) => void;
}