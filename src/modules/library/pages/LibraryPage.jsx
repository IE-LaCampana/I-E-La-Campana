import React from "react";
import LibraryCard from "../../../modules/library/components/LibraryCard"
import LibraryCarousel from "../components/LibraryCarousel";
import { libraryCarouselData } from "../data/libraryCarouselData";
import { historyCarouselData } from "../data/historyCarouselData";
import { chemistryCarouselData } from "../../../modules/library/data/chemistryCarouselData";
import { spanishCarouselData } from "../data/spanishCarouselData";
import { musicCarouselData } from "../data/musicCarouselData";
import { ethicsCarouselData } from "../data/ethicsCarouselData";

const LibraryPage = () => {
  return (
    <div>
      <LibraryCard />
      <LibraryCarousel slides={libraryCarouselData} title="INTERACTIVOS" />
      <LibraryCarousel slides={historyCarouselData} title="HISTORIA" />
      <LibraryCarousel slides={chemistryCarouselData} title="MATEMÁTICAS" />
      <LibraryCarousel slides={spanishCarouselData} title="ESPAÑOL" />
      <LibraryCarousel slides={musicCarouselData} title="MÚSICA" />
      <LibraryCarousel slides={ethicsCarouselData} title="ÉTICA" />
    </div>
  );
};

export default LibraryPage;
