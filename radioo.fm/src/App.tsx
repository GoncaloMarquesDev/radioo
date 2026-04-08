import "./App.css";
import "./styles/main.scss";
import LandingPage from "./pages/LandingPage";
import { RadioProvider } from "./context/RadioContext";

import AudioPlayer from "./components/audioplayer/AudioPlayer";
const App = () => {
  return (
    <RadioProvider>
      <div>
        <LandingPage />
      </div>
      <AudioPlayer/>
    </RadioProvider>
  );
};

export default App;
