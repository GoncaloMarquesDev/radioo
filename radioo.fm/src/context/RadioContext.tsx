import { createContext, useState, useContext } from "react";
import { type ReactNode } from "react";
import type { Station, RadioContextType } from '../types/station';

const RadioContext = createContext<RadioContextType | undefined>(undefined);

export function RadioProvider({ children }: { children: ReactNode }) {
  const [selectedTag, setSelectedTag] = useState("lofi"); // a tag selecionada no categoruyPill

  const [currentStation,setCurrentStation]=  useState<Station |  null> ( null);

  const playStation = (station:Station)=>{
    setCurrentStation(station);
  };

  return (
    <RadioContext.Provider value={{ selectedTag, setSelectedTag,currentStation, playStation }}>
      {children}
    </RadioContext.Provider>
  );
}
export const useRadio = () => {
  const context = useContext(RadioContext);
  
  
  if (!context) {
    throw new Error("useRadio deve ser usado dentro de um RadioProvider");
  }
  
  return context; 
};
