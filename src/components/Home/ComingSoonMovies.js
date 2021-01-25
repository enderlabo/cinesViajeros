import React from 'react';
import MoviesSlider from './MoviesSlider';
import ModalMovie from '../General/ModalTrailer'
import {getComingSoonMovies} from '../../endpoints'
const ComingSoonMovies = () => {
  const [showModal, setShowModal] = React.useState(false)
  const [item, setItem] = React.useState(null)
  const [comingMovies, setComingMovies] = React.useState(null)

  const getDataWeekendMovies = async () => {
    const data = await getComingSoonMovies();
    setComingMovies(data);
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
      <section className=" row sectionComingSoonMovies">
        <div className="container">
         <div className="col-12 noPad">
                 <h2>
                     Próximas películas
                 </h2>
         </div>
         <div className="col-12 sliderSection">
             {
               comingMovies ? (
                <MoviesSlider
                movies={comingMovies} 
                object={sliderBreakpoints} 
                slidesPerView={4} 
                spaceBetween={15} 
                speed={400}
                delay={5000}
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

export default ComingSoonMovies;