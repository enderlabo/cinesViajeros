import React from 'react';
import TeleticketLogo from '../../assets/images/logo_teleticket.png'
import ContactoLogo from '../../assets/images/logo_contacto.png'
import OpenLogo from '../../assets/images/logo_open.png'
import IluminaLogo from '../../assets/images/logo_ilumina.png'
import CineViajeroLogo from '../../assets/images/logo_cineviajeros.png'
const Marcas = () => {
    return(
        <section className="marcasSection">
            <div className="container">
                <div className="row text-center">
                    <div className="col-6">
                        <img src={TeleticketLogo} alt="Teleticket - Cineviajeros" />
                    </div>
                    <div className="col-6">
                        <img src={ContactoLogo} alt="Contacto - Cineviajeros" />
                    </div>
                    <div className="col-6">
                        <img src={CineViajeroLogo} alt="Cineviajeros - Cineviajeros" />
                    </div>
                    <div className="col-6">
                        <img src={OpenLogo} alt="Open - Cineviajeros" />
                    </div>
                    <div className="col-12">
                        <img src={IluminaLogo} alt="Ilumina - Cineviajeros" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Marcas;