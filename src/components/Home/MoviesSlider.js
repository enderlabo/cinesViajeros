import React from 'react';
// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Link} from 'react-router-dom'
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y,Autoplay]);

const SliderMovies = ({movies, object,slidesPerView,spaceBetween, speed,freeMode, delay, viewTrailer}) => {
    return(
        <React.Fragment>
            <Swiper
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        loop={true}
        speed={speed || 400}
        effect={'fade'}
        freeMode={freeMode}
        autoplay={
          {
            delay: delay || 2000,
            disableOnInteraction:false
          }
        }
        breakpoints = {object}
        >
            {
              
              movies &&  movies.map((movie, index) => 
                    {
                       return <SwiperSlide key={index}>
                        <div className="movieItemContainer">
                        <Link to={`/peliculas/${movie.id}`}>
                            <img src={`https://cineviajeros.com/api/public${movie.img}`} alt={`${movie.title} - Cineviajeros`} />
                        </Link>
                        <h3>
                            {movie.title}
                        </h3>
                        <button onClick={() => viewTrailer(movie)}>
                            Ver trailer
                        </button>
                    </div>
                    </SwiperSlide>
                    }
                )
            }   
        </Swiper>  

        </React.Fragment>
    );
}

export default SliderMovies