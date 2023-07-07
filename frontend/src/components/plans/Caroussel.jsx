// Packages
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow, Pagination, Navigation } from "swiper";
import { toast } from "react-toastify";

// Style
import "swiper/swiper-bundle.min.css";
import styles from "../../css/Slider.module.css";
import "react-toastify/dist/ReactToastify.css";

// Components
import Card from "../utilities/Card";

// Helpers
import capitalize from "../../helpers/capitalize";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

export default function Caroussel({ plans, billing }) {
  const handleClick = (name) => {
    toast.success(`Plan ${name} selected!`, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <>
      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        initialSlide={1}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 4.5,
        }}
        pagination={{ el: ".pagination", clickable: true }}
        navigation={{
          nextEl: ".button-next",
          prevEl: ".button-prev",
          clickable: true,
        }}
        className="swiper__container"
      >
        {plans.map((plan) => (
          <SwiperSlide key={plan.id}>
            {({ isActive }) => (
              <Card
                classCSS={`${styles.card__plan} ${
                  isActive ? `${styles.slide__active}` : ""
                }`}
              >
                <div className={styles.card__plan__wrapper__content}>
                  <div>
                    <span className={styles.card__plan__price}>
                      {"$" +
                        `${
                          billing.toLowerCase() === "monthly"
                            ? parseFloat(plan.price_monthly)
                            : parseFloat(plan.price_yearly)
                        }`}
                    </span>
                    <span className={styles.card__plan__billing}>
                      &nbsp;/{billing.toLowerCase()}
                    </span>
                  </div>
                  <span className={styles.card__plan__name}>
                    {capitalize(plan.name)}
                  </span>
                  <p className={styles.card__plan__description}>
                    {plan.description}
                  </p>
                  <ul>
                    {Object.keys(plan)
                      .filter((el) => el.includes("perk"))
                      .map((key) => plan[key])
                      .map((perk) => (
                        <li key={perk} className={styles.card__plan__perk}>
                          <img
                            src="../assets/icon/utility/tick.svg"
                            alt={perk}
                            className={styles.card__plan__bullet}
                          />
                          <span>{capitalize(perk)}</span>
                        </li>
                      ))}
                  </ul>
                </div>
                <button
                  type="button"
                  className={`btn-default ${styles.card__plan__btn}`}
                  onClick={() => handleClick(capitalize(plan.name))}
                >
                  Choose Plan
                </button>
              </Card>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-controller flex items-center justify-center">
        <div className="flex items-center gap-4">
          <div className="pagination flex items-center justify-around gap-1" />
        </div>
      </div>
    </>
  );
}

Caroussel.propTypes = {
  plans: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      price_monthly: PropTypes.string,
      price_yearly: PropTypes.string,
      description: PropTypes.string,
      perk_1: PropTypes.string,
      perk_2: PropTypes.string,
      perk_3: PropTypes.string,
      perk_4: PropTypes.string,
    })
  ).isRequired,
  billing: PropTypes.string.isRequired,
};
