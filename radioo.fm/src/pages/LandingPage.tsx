import CategoryPills from "../components/categorypills/CategoryPills";
import FeatureStation from "../components/featurestation/FeatureStation";
import Header from "../components/header/Header";
import RadioListFromPills from "../components/radiolistfrompills/RadioListFromPills";
import SideBar from "../components/sidebar/SideBar";

import TopBar from "../components/topbar/TopBar";
import "./LandingPage.scss";

function landingpage() {
  return (
    <div className="container-layout">
      <SideBar />
      <div className="main-viewport">
        <TopBar />
        <div className="content-container">
          <div className="content-scroll">
            <Header />
            <FeatureStation />
            <CategoryPills />
            <RadioListFromPills />
          </div>
        </div>
      </div>
    </div>
  );
}
export default landingpage;
