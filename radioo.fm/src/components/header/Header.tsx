import"./Header.scss"

import { FaHandsClapping } from "react-icons/fa6";
function Header (){

    return(
        <div className="container-header-title">
<h6 className="greeting">Good Morning <FaHandsClapping  className="clap"/> </h6>
<div className="listen-badge">
    <h4 className="listen"> What do you want to listen today?</h4>
    <div className="live-badge">
  8 Live
</div>

</div>

        </div>
    )

}
export default Header;