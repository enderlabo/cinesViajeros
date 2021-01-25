import React from "react";
import { API_URL } from "../../utils/config";
// import Swiper core and required components
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {Link} from 'react-router-dom'
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const PromocionesSlider = ({
  promotions,
  object,
  slidesPerView,
  spaceBetween,
  speed,
  freeMode,
  isPromotion
}) => {
  return (
    <React.Fragment>
      <Swiper
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        loop={true}
        speed={speed || 400}
        effect={"fade"}
        freeMode={freeMode}
        autoplay={{
          disableOnInteraction: false
        }}
        breakpoints={object}
      >
        {promotions &&
          promotions.map((promotion, index) => (
            <SwiperSlide key={index}>
              <div className="promocionItemContainer">
                <Link to={isPromotion ? `/promociones/1` : `/combos/1`}>
                  <img
                    src={`${API_URL}${promotion.img}`}
                    alt={`${promotion.title} - Cineviajeros`}
                  />
                </Link>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </React.Fragment>
  );
};

export default PromocionesSlider;
