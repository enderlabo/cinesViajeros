import React from "react";
//Imagenes
import TrailerIcon from "../../assets/images/play-circle.png";
import ShoppingIcon from "../../assets/images/carrito.png";
// import Swiper core and required components
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
// install Swiper components
import ModalMovie from "../General/ModalTrailer";

import { getBanners } from "../../endpoints";
import { API_URL } from "../../utils/config";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const Banner = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [item, setItem] = React.useState(null);
  const [banners, setBanners] = React.useState(null);

  const getDataBanners = async () => {
    const data = await getBanners();
    setBanners(data.filter(banner => banner.actived === 1));
    console.log(data);
  };

  React.useEffect(() => {
    getDataBanners();
  }, []);

  const viewTrailer = item => {
    setItem(item);
    setShowModal(true);
  };

  return (
    <div>
      <ModalMovie modalShow={showModal} item={item} handleShow={setShowModal} />
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        speed={500}
        effect={"fade"}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 0
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 0
          }
        }}
        pagination={{ clickable: true }}
      >
        {banners
          ? banners.map((banner, i) =>
              banners.length <= 1 ? (
                <div
                  className="col-12 bannerSlide"
                  style={{ backgroundImage: `url('${API_URL}${banner.img}')` }}
                >
                  <div className="container">
                    <h2>{banner.title}</h2>
                    {banner.description && (
                        <p> {banner.description.length > 170 ? `${banner.description.slice(0, 170)}...` : banner.description} </p>
                      )}
                    <div className="col-12 buttonsBanner">
                      {banner.url_trailer && (
                        <button
                          className="buttonTrailer"
                          onClick={() => viewTrailer(banner)}
                        >
                          Ver trailer
                        </button>
                      )}

                      {banner.url_compra && (
                        <button
                          className="buttonComprar"
                          onClick={() =>
                            window.open(banner.url_compra, "_blank")
                          }
                        >
                          Comprar
                        </button>
                      )}
                    </div>
                    <div className="col-12 buttonsBannerResponsive">
                      {banner.url_trailer && (
                        <button
                          className="buttonTrailer"
                          onClick={() => viewTrailer(banner)}
                        >
                          <img
                            src={TrailerIcon}
                            alt={`${banner.title} Trailer - Cineviajeros`}
                          />
                        </button>
                      )}
                      {banner.url_compra && (
                        <button
                          className="buttonComprar"
                          onClick={() =>
                            window.open(banner.url_compra, "_blank")
                          }
                        >
                          <img
                            src={ShoppingIcon}
                            alt={`${banner.title} Teleticket - Cineviajeros`}
                          />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <SwiperSlide key={i}>
                  <div
                    className="col-12 bannerSlide"
                    style={{
                      backgroundImage: `url('${API_URL}${banner.img}')`
                    }}
                  >
                    <div className="blackBlur"></div>
                    <div className="container">
                      <h2>{banner.title}</h2>
                      {banner.description && (
                        <p> {banner.description.length > 170 ? `${banner.description.slice(0, 170)}...` : banner.description} </p>
                      )}
                      <div className="col-12 buttonsBanner">
                        {banner.url_trailer && (
                          <button
                            className="buttonTrailer"
                            onClick={() => viewTrailer(banner)}
                          >
                            Ver trailer
                          </button>
                        )}

                        {banner.url_compra && (
                          <button
                            className="buttonComprar"
                            onClick={() =>
                              window.open(banner.url_compra, "_blank")
                            }
                          >
                            Comprar
                          </button>
                        )}
                      </div>
                      <div className="col-12 buttonsBannerResponsive">
                        {banner.url_trailer && (
                          <button
                            className="buttonTrailer"
                            onClick={() => viewTrailer(banner)}
                          >
                            <img
                              src={TrailerIcon}
                              alt={`${banner.title} Trailer - Cineviajeros`}
                            />
                          </button>
                        )}

                        {banner.url_compra && (
                          <button
                            className="buttonComprar"
                            onClick={() =>
                              window.open(banner.url_compra, "_blank")
                            }
                          >
                            <img
                              src={ShoppingIcon}
                              alt={`${banner.title} Teleticket - Cineviajeros`}
                            />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              )
            )
          : null}
      </Swiper>
    </div>
  );
};

export default Banner;
