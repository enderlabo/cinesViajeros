import React from 'react';
import MoviesSlider from './MoviesSlider';
import ModalMovie from '../General/ModalTrailer'
import {getWeekMovies} from '../../endpoints'
const WeekendMovies = () => {
  const [showModal, setShowModal] = React.useState(false)
  const [item, setItem] = React.useState(null)
  const [weekendMovies, setWeekendMovies] = React.useState(null)

  const getDataWeekendMovies = async () => {
    const data = await getWeekMovies();
    setWeekendMovies(data);
  }

  React.useEffect(() => {
    getDataWeekendMovies();
  }, []);

  const viewTrailer = (item) => {
    setItem(item);
    setShowModal(true);
  }
    const sliderBreakpoints ={
        320: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 15
          }
    }
    return(
      <React.Fragment>
        <ModalMovie
          modalShow={showModal}
          item={item}
          handleShow={setShowModal}
        />
        <section className="sectionWeekendMovies row">
           <div className="container">
            <div className="col-12 noPad">
                    <h2>
                        Películas de la semana
                    </h2>
            </div>
            <div className="col-12 sliderSection">
                {
                 weekendMovies ? (
                  <MoviesSlider
                  movies={weekendMovies} 
                  object={sliderBreakpoints} 
                  slidesPerView={4} 
                  spaceBetween={15}
                  freeMode={false}
                  viewTrailer={viewTrailer}
                  />
                 ) : null
                }
            </div>
           </div>
       </section>
      </React.Fragment>
       
    );
}

export default WeekendMovies;