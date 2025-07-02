import React from "react";

const PlayPauseButton = ({ isPlaying, onToggle }) => {
  return (
    <div className="headquarters-play-pause" onClick={onToggle}>
      {isPlaying ? (
        <>
          <span className="pause-icon"></span>
          Detener
        </>
      ) : (
        <>
          <span className="play-icon"></span>
          Reproducir
        </>
      )}
    </div>
  );
};

export default PlayPauseButton;
