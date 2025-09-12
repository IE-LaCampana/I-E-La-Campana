// ArtsHeroVideo.jsx
import React from "react";
import "../styles/artsHeroVideo.css";

const ArtsHeroVideo = ({ data }) => {
  const videoData = data && data.length > 0 ? data[0] : null;

  if (!videoData) {
    return (
      <section className="artsHeroVideo">
        <div className="arts-hero-video-container">
          <p>No hay video disponible</p>
        </div>
      </section>
    );
  }

  return (
    <section className="artsHeroVideo">
      <div className="arts-hero-video-container">
        <video
          className="artsHeroVideo__background"
          src={videoData.videoUrl}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </section>
  );
};

export default ArtsHeroVideo;
