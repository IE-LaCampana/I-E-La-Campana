import React, { useState, useRef } from "react";
import "../../styles/himnoCard.css";
import decorativeLine from "../../../../assets/institutional/CENEFA-01.png";

const HimnoCard = ({ title, verses, audioSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e) => {
    const progressBar = e.currentTarget;
    const clickX = e.nativeEvent.offsetX;
    const width = progressBar.offsetWidth;
    const newTime = (clickX / width) * duration;

    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleDownload = () => {
    if (audioSrc) {
      const link = document.createElement("a");
      link.href = audioSrc;
      link.download = "himno-la-campana.mp3";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <section className="himno-card">
      <div className="himno-card-container">
        <div className="himno-card__main-content">
          <div className="audio-player">
            <audio
              ref={audioRef}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onEnded={() => setIsPlaying(false)}
            >
              <source src={audioSrc} type="audio/mp4" />
              Tu navegador no soporta el elemento de audio.
            </audio>

            <div className="audio-controls">
              <button
                className="play-pause-btn"
                onClick={togglePlayPause}
                aria-label={isPlaying ? "Pausar" : "Reproducir"}
              >
                {isPlaying ? (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="6" y="4" width="4" height="16"></rect>
                    <rect x="14" y="4" width="4" height="16"></rect>
                  </svg>
                ) : (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polygon points="5,3 19,12 5,21"></polygon>
                  </svg>
                )}
              </button>

              <div className="progress-container">
                <div className="progress-bar" onClick={handleSeek}>
                  <div
                    className="progress-fill"
                    style={{
                      width: duration
                        ? `${(currentTime / duration) * 100}%`
                        : "0%",
                    }}
                  ></div>
                </div>
                <div className="time-display">
                  <span className="current-time">
                    {formatTime(currentTime)}
                  </span>
                  <span className="duration">{formatTime(duration)}</span>
                </div>
              </div>

              <button
                className="download-btn"
                onClick={handleDownload}
                aria-label="Descargar audio"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5" />
                </svg>
              </button>
            </div>
          </div>
          <div className="himno-card__content">
            <h2 className="himno-card__title">{title}</h2>
            {Array.isArray(verses) &&
              verses.map((verse, index) => (
                <p key={index} className="himno-verse">
                  {verse}
                </p>
              ))}
          </div>
        </div>
      </div>
      <div className="himno-card__divider">
        <img src={decorativeLine} alt="Separador Misak" />
      </div>
    </section>
  );
};

export default HimnoCard;
