import "./App.css";
import "./styles/main.scss";
import LandingPage from "./pages/LandingPage";
import { RadioProvider } from "./context/RadioContext";
import AudioEngine from "./components/audioengine/AudioEngine";
const App = () => {
  return (
    <RadioProvider>
      <div>
        <LandingPage />
      </div>
      <AudioEngine/>
    </RadioProvider>
  );
};

export default App;
