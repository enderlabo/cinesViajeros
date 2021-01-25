import React from 'react';
import Banner from '../components/Home/Banner'
import WeekendMovies from '../components/Home/WeekendMovies'
import ComingSoonMovies from '../components/Home/ComingSoonMovies'
import PromocionesHome from '../components/Home/PromocionesHome'
import TusCombosHome from '../components/Home/TusCombosHome'

const Home = () => {
    
    return(
       <React.Fragment>
           
           <Banner />
            <div className="container-fluid backgroundTrama">
                <WeekendMovies />
                <ComingSoonMovies />
                <div className="container">
                    <div  className="row pruebaEspacioRow">
                       
                            <div className="col-12 pruebaEspacio">
                                <PromocionesHome />
                            </div>
                            
                            <div className="col-12  pruebaEspacio">
                                <TusCombosHome />
                            </div>
                    </div>
                </div>
           </div>
           
       </React.Fragment>
    );
}

export default Home;