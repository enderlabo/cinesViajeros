import React from 'react'
import PromocionesSlider from './PromocionesSlider';
import {Link} from 'react-router-dom'
import {getAllPromotions} from '../../endpoints';
const PromocionesHome = () => {
    const [promociones, setPromociones] = React.useState(null)
    const getDataPromociones = async () => {
        const data = await getAllPromotions();
        setPromociones(data);
    }
    React.useEffect(() => {
        getDataPromociones();
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
        <section className="sectionPromociones">
                    <h2>
                        Promociones
                    </h2>
            <div className="col-12 sliderSection">
                {
                    promociones ? 
                    <PromocionesSlider
                 promotions={promociones} 
                 object={sliderBreakpoints} 
                 slidesPerView={2} 
                 spaceBetween={0}
                 freeMode={true}
                 speed={350}
                 isPromotion={true}
                 /> : null
                }
            </div>
            <div className="col-12 text-center linkRedirect">
                <Link to="/promociones/1">Ver más</Link>
            </div>
            
       </section>
    );
}
export default PromocionesHome;