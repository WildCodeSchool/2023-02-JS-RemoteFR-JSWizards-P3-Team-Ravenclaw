// Packages
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

// Hooks
import useAxios from "../hooks/useAxios";

// Helpers
import { filterVideos } from "../helpers/filterTable";
import removeDuplicates from "../helpers/groupVideoCategory";

// Components
import Dropdown from "../components/utilities/Dropdown";
import Searchbar from "../components/utilities/Searchbar";
import Label from "../components/utilities/Label";
import Button from "../components/utilities/Button";
import SliderVideo from "../components/utilities/SliderVideo";
import Footer from "../components/utilities/Footer";
import Loader from "../components/utilities/Loader";
import useAuth from "../hooks/useAuth";

// Services
import { getVideos, getFavoriteVideos } from "../services/videos";

// Styles
import styles from "../css/Slider.module.css";
import stylesSearch from "../css/Table.module.css";

export default function Videos() {
  const {
    account: { id_user: userId },
  } = useAuth();

  // states to handle 'add more' gallery
  const [videoNumber, setVideoNumber] = useState(8);

  const [filterText, setFilterText] = useState("");
  const [filterGame, setFilterGame] = useState({});
  const [filterCategory, setFilterCategory] = useState([]);

  const [freemiumVideos, setFreemiumVideos] = useState([]);
  const [premiumVideos, setPremiumVideos] = useState([]);
  const [favoriteVideos, setFavoriteVideos] = useState([]);

  const [areVideosLoading, setAreVideosLoading] = useState(false);
  const [areFavVideosLoading, setAreFavVideosLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [isCatDropOpened, setIsCatDropOpened] = useState(false);
  const [isGameDropOpened, setIsGameDropOpened] = useState(false);

  // fetch data from database to populate dropdown items
  const { data: categories } = useAxios("/categories");
  const { data: games } = useAxios("/games");

  // retrieve query parameters from URL
  const [searchParams] = useSearchParams();

  const isAuthenticated = userId !== undefined;

  const loadMore = () => {
    setVideoNumber((prevCount) => prevCount + 8);
  };

  const handleCategoryChange = (e) => {
    const { value: name } = e.target;
    const id = e.target.getAttribute("data-key");

    const clonedFilterByCategory = [...filterCategory];
    const index = clonedFilterByCategory.findIndex((el) => el.id === id);
    const updatedArray =
      index === -1
        ? [...clonedFilterByCategory, { id, name }]
        : clonedFilterByCategory.filter((category) => category.id !== id);

    setFilterCategory(updatedArray);
  };

  const handleGameChange = (e) => {
    const id = e.target.getAttribute("data-key");
    const { id: name } = e.target;
    setFilterGame({ id, name });
  };

  useEffect(() => {
    setIsLoading(true);
    setAreVideosLoading(true);

    getVideos()
      .then((res) => {
        setFreemiumVideos(
          removeDuplicates(res.data).filter(
            (video) => video.visibility === 0 || video.visibility === 1
          )
        );
        setPremiumVideos(
          removeDuplicates(res.data).filter((video) => video.visibility === 2)
        );
        setAreVideosLoading(false);
      })
      .catch((err) => console.error(err));

    if (userId) {
      setAreFavVideosLoading(true);
      getFavoriteVideos(userId)
        .then((res) => {
          setFavoriteVideos(removeDuplicates(res.data));
          setAreFavVideosLoading(false);
        })
        .catch((err) => console.error(err));
    } else {
      setAreFavVideosLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!areVideosLoading && !areFavVideosLoading) setIsLoading(false);
  }, [areVideosLoading, areFavVideosLoading]);

  useEffect(() => {
    const gameName = searchParams.get("game");
    const requestedGame = games.find((game) => game.name === gameName);
    if (requestedGame) {
      setFilterGame({ id: requestedGame.id, name: requestedGame.name });
    }
  }, [games]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className="home">
          <div className="flex flex-wrap gap-4 px-6 pt-12 md:flex-nowrap md:px-0">
            <div className="relative flex flex-col gap-1.5">
              <Label
                htmlFor="category"
                title="Filter by category"
                className={`${stylesSearch.label__style}`}
              />
              {categories.length && (
                <Dropdown
                  type="checkbox"
                  name="category"
                  title="Select a category"
                  items={categories}
                  isDropdownOpen={isCatDropOpened}
                  handleDropdown={setIsCatDropOpened}
                  handleChange={handleCategoryChange}
                />
              )}
            </div>
            <div className="relative flex flex-col gap-1.5">
              <Label
                htmlFor="game"
                title="Filter by game"
                className={`${stylesSearch.label__style}`}
              />
              {games.length && (
                <Dropdown
                  type="radio"
                  name="game"
                  title="Select a game"
                  items={games}
                  isDropdownOpen={isGameDropOpened}
                  handleDropdown={setIsGameDropOpened}
                  handleChange={handleGameChange}
                />
              )}
            </div>
            <div className="flex w-full flex-col gap-1.5">
              <Label
                htmlFor="search"
                title="Search for a video"
                className={`${stylesSearch.label__style}`}
              />
              <Searchbar
                className="relative"
                filterText={filterText}
                onFilterTextChange={setFilterText}
              />
            </div>
          </div>
          {premiumVideos.length ? (
            <article>
              <h1>Premium Videos</h1>
              <SliderVideo
                videos={filterVideos(
                  premiumVideos,
                  filterText,
                  filterGame,
                  filterCategory
                )}
                customClassSlider={styles.slider__video}
                customClassCard={styles.card__video}
                customClassOverlayWrapper={styles.overlay__wrapper__grid}
              />
            </article>
          ) : null}
          <article>
            <h1>Freemium Videos</h1>
            <SliderVideo
              videos={filterVideos(
                freemiumVideos,
                filterText,
                filterGame,
                filterCategory
              )}
              customClassSlider={styles.slider__video}
              customClassCard={styles.card__video}
              customClassOverlayWrapper={styles.overlay__wrapper__grid}
              videoNumber={videoNumber}
              isPaginated
            />
            {videoNumber < freemiumVideos.length && (
              <Button
                customCSS="flex flex-col items-center justify-center"
                onClick={loadMore}
              >
                <img
                  src="../assets/icon/utility/showMore.svg"
                  alt="show more"
                />
                Load More
              </Button>
            )}
          </article>
          {isAuthenticated && favoriteVideos.length ? (
            <article>
              <h1>Favorites Videos</h1>
              <SliderVideo
                videos={filterVideos(
                  favoriteVideos,
                  filterText,
                  filterGame,
                  filterCategory
                )}
                customClassSlider={styles.slider__video}
                customClassCard={styles.card__video}
                customClassOverlayWrapper={styles.overlay__wrapper__grid}
                videoNumber={videoNumber}
                isPaginated
              />
              {videoNumber < favoriteVideos.length && (
                <Button
                  customCSS="flex flex-col items-center justify-center"
                  onClick={loadMore}
                >
                  <img
                    src="../assets/icon/utility/showMore.svg"
                    alt="show more"
                  />
                  Load More
                </Button>
              )}
            </article>
          ) : null}
        </section>
      )}
      <Footer />
    </>
  );
}
