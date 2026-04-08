import"./Header.scss"
import { useState, useEffect } from "react";
import { getApiStats } from "../../api/Stations";

import { FaHandsClapping } from "react-icons/fa6";

function Header (){

    const [totalStations, setTotalStations] = useState<number | null>(null);
    const [getGreeting, setGreeting]=useState("");
  /*   console.log("saudacao", getGreeting); */


    useEffect(() => {

      const calculateGreeting = () =>{
        const hour = new Date().getHours();

        if(hour>=5 && hour <12) return "Good Morning"
        if(hour>=12 && hour < 20) return "Good Afertnoon"
        return "Good Evening"
};
        setGreeting(calculateGreeting());

    getApiStats().then(setTotalStations);
  }, []);
  /* console.log("live radios", totalStations) */


    return(
        <div className="container-header-title">
<h6 className="greeting">{getGreeting} <FaHandsClapping  className="clap"/> </h6>
<div className="listen-badge">
    <h4 className="listen"> What do you want to listen today?</h4>
    <div className="live-badge">
      <span className="pulse-dot"></span>
  {totalStations?.toLocaleString()}
  <span className="live-text"> Live Radios</span>
</div>

</div>

        </div>
    )

}
export default Header;