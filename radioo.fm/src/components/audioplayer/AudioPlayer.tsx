import { useRef, useEffect, useState } from "react";
import { useRadio } from "../../context/RadioContext";
import { IoPause, IoPlay, IoVolumeHigh } from "react-icons/io5";
import "./AudioPlayer.scss";
import { DEFAULT_RADIO_IMG } from "../../constants/images";

function AudioPlayer() {
  const { currentStation, activeColor /* , playStation */ } = useRadio();

  // locais e refs
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentImg, setCurrentImg] = useState(DEFAULT_RADIO_IMG);

  useEffect(() => {
    if (currentStation && audioRef.current) {
      // Lógica do Áudio
      audioRef.current.load();
      audioRef.current.play();
      setIsPlaying(true);

      // Lógica para Android/iOS e Sistema (Media Session)
      if ("mediaSession" in navigator) {
        navigator.mediaSession.metadata = new MediaMetadata({
          title: currentStation.name,
          artist: "Radioo FM",
          album: "Live Stream",
          artwork: [
            {
              src: currentStation.favicon || DEFAULT_RADIO_IMG,
              sizes: "512x512",
              type: "image/png",
            },
          ],
        });

        // Permite que os botões de hardware (fones/carro) controlem a rádio
        navigator.mediaSession.setActionHandler("play", () => {
          audioRef.current?.play();
          setIsPlaying(true);
        });
        navigator.mediaSession.setActionHandler("pause", () => {
          audioRef.current?.pause();
          setIsPlaying(false);
        });
      }

      // Lógica da imagem (Fallback)
      if (currentStation.favicon && currentStation.favicon.trim() !== "") {
        const img = new Image();
        img.src = currentStation.favicon;
        img.onload = () => setCurrentImg(currentStation.favicon);
        img.onerror = () => setCurrentImg(DEFAULT_RADIO_IMG);
      } else {
        setCurrentImg(DEFAULT_RADIO_IMG);
      }
    }
  }, [currentStation]);

  if (!currentStation) return null;

  const handleTogglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const shortName = currentStation.name
    ? currentStation.name.split(" ").slice(0, 3).join(" ")
    : "Radio";

  return (
    <div className="audio-player-fixed">
      <audio ref={audioRef} src={currentStation.url_resolved} />
      <div
        className="neon-line"
      style={{
    // aqui injecto a cor  na variável para o box-shadow usar
    "--neon-color": `rgba(${activeColor}, 0.8)`, 
    background: `linear-gradient(
      90deg,
      transparent 0%,
      rgba(${activeColor}, 1) 50%,
      transparent 100%
    )`
  } as React.CSSProperties}
      />

      <div className="player-content">
        <div className="station-meta">
          <img src={currentImg} alt={currentStation.name} />
          <div className="text">
            <p
              className="station-title"
              /* style={{ color: `rgb(${activeColor})` }} */ //veruificar se é para manter
            >
              {shortName}
            </p>
          </div>
        </div>

        <div className="player-center">
          <button
            className="btn-play-pause"
            onClick={handleTogglePlay}
            style={{
              backgroundColor: `rgb(${activeColor})`,
              boxShadow: `0 4px 15px rgba(${activeColor}, 0.4)`,
            }}
          >
            {isPlaying ? <IoPause /> : <IoPlay />}
          </button>
        </div>

        <div className="player-right">
          <IoVolumeHigh />
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            defaultValue="1"
            style={
              { accentColor: `rgb(${activeColor})` } as React.CSSProperties
            }
            onChange={(e) => {
              if (audioRef.current)
                audioRef.current.volume = Number(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default AudioPlayer;
