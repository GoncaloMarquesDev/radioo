import { useState, useEffect } from "react"; 
import { getStationsByTag } from "../../api/Stations"; 
import type { Station } from "../../types/station"; 
import RadioListCard from "../radiolistcard/RadioListCard"; 
import { useRadio } from "../../context/RadioContext"; 
import "./RadioListFromPills.scss"

function RadioListFromPills() {

    const { selectedTag } = useRadio();

  const [stations, setStations] = useState<Station[]>([]);
 

  useEffect(() => {
    getStationsByTag(selectedTag).then(setStations)
  }, [selectedTag]);

  return (
    <div className="radio-list-wrapper">
      {stations.map((item: Station, index:number) => ( 
        <RadioListCard key={item.stationuuid || index} station={item} />
      ))}
    </div>
  );
}

export default RadioListFromPills; 
