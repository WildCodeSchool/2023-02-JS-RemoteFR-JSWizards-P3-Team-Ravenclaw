// Packages
import React, { useState, useEffect } from "react";

// Style
import styles from "../css/Slider.module.css";

// Components
import Dropdown from "../components/utilities/Dropdown";
import Searchbar from "../components/utilities/Searchbar";
import Button from "../components/utilities/Button";
import Label from "../components/utilities/Label";
import SliderVideo from "../components/utilities/SliderVideo";
import Footer from "../components/utilities/Footer";

// Data
import videosData from "../data/videos.json";

export default function Videos() {
  const [displayCount, setDisplayCount] = useState(10);
  const [totalElements, setTotalElements] = useState(0);

  const fetchTotalElements = () => {
    const totalCount = videosData.length;
    setTotalElements(totalCount);
  };

  useEffect(() => {
    fetchTotalElements();
  }, []);

  const loadMore = () => {
    setDisplayCount((prevCount) => prevCount + 10);
  };

  return (
    <>
      <section className="home">
        <div className="flex flex-wrap gap-4 px-6 pt-12 md:flex-nowrap md:px-0">
          <span className="flex flex-col gap-1.5">
            <Label title="Filter by category" className="text-sm" />
            <Dropdown title="Categories" />
          </span>
          <span className="flex flex-col gap-1.5">
            <Label title="Filter by games" className="text-sm" />
            <Dropdown title="Games" />
          </span>
          <span className="flex w-full flex-col justify-end">
            <Searchbar className="relative" />
          </span>
        </div>
        <article>
          <h1>Premium Videos</h1>
          <SliderVideo />
        </article>
        <article>
          <h1>Freemium Videos</h1>
          <SliderVideo
            customClassSlider={styles.slider__video}
            customClassCard={styles.card__video}
            customClassOverlayWrapper={styles.overlay__wrapper__grid}
            displayCount={displayCount}
            isPaginated
          />
          {displayCount < totalElements && (
            <Button
              customCSS="flex flex-col items-center justify-center"
              onClick={loadMore}
            >
              <img src="../assets/icon/utility/showMore.svg" alt="show more" />
              Load More
            </Button>
          )}
        </article>
        <article>
          <h1>Favorites Videos</h1>
          <SliderVideo />
        </article>
      </section>
      <Footer />
    </>
  );
}
