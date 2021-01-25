import React from 'react'
import PromocionesSlider from './PromocionesSlider';
import {Link} from 'react-router-dom'
import {getAllCombos} from '../../endpoints';
const TusCombosHome = () => {
    const [combos, setCombos] = React.useState(null)
    const getDataCombos = async () => {
        const data = await getAllCombos();
        setCombos(data);
    }
    React.useEffect(() => {
        getDataCombos();
      }, []);
    
    const sliderBreakpoints ={
        320: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 0
          },
    }
    return(
        <section id="suscribeteLink" className="sectionTusCombos">
                    <h2>
                        Tus combos
                    </h2>
            <div className="col-12 sliderSection">
                {
                    combos ? 
                    <PromocionesSlider
                 promotions={combos} 
                 object={sliderBreakpoints} 
                 slidesPerView={2} 
                 spaceBetween={0}
                 freeMode={true}
                 speed={350}
                 isPromotion={false}
                 /> : null
                }
            </div>
            <div className="col-12 text-center linkRedirect">
                <Link to="/combos/1">Ver más</Link>
            </div>
            
       </section>
    );
}
export default TusCombosHome;