import CategoryPills from "../components/categorypills/CategoryPills";
import FeatureStation from "../components/featurestation/FeatureStation";
import Header from "../components/header/Header";
import RadioListFromPills from "../components/radiolistfrompills/RadioListFromPills";


import TopBar from "../components/topbar/TopBar";
import "./LandingPage.scss";

function landingpage() {
  return (
    <div className="container">
    
      <TopBar></TopBar>
      <Header/>
      <FeatureStation/>
      <CategoryPills/>
      <RadioListFromPills/>
     
      {/* <BottomNav/> */}
     
      
    </div>
  );
}
export default landingpage;
