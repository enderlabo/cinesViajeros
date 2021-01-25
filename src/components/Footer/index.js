import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import FacebookIcon from "../../assets/images/FB.png";
import InstagramIcon from "../../assets/images/IG.png";
const PrincipalFooter = () => {

  return (
    <footer className="container">
      <div className="row">
        <div className="col-12 col-md-3 movilAlign">
          <img src={Logo} alt="Logo Footer - Cineviajeros" />
        </div>
        <div className="col-12 d-md-none d-lg-none d-xl-none redesMobileFooter">
          <li>
            <a
              href="https://www.facebook.com/cineviajerosautocinema/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={FacebookIcon} alt="Facebook Cineviajeros" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/cineviajeros/ "
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="instagramLogo"
                src={InstagramIcon}
                alt="Instagram Cineviajeros"
              />
            </a>
          </li>
        </div>
        <div className="col-12 offset-sm-2 col-md-3 col-lg-4 movilAlign">
          <div className="col-12">
            <h4>Mapa del sitio</h4>
          </div>
          <div className="navFooter col-12">
            <li>
              <Link to="/entradas/1">Compra tus entradas</Link>
            </li>
            <li>
              <Link to="/combos/1">Tus combos</Link>
            </li>
            {/* Botón promociones */}
            <li>
              <Link to="/promociones/1">Promociones</Link>
            </li>

            <li>
              <Link to="/terminos-y-condiciones">Términos y condiciones</Link>
            </li>

            <li>
              <Link to="/politicas-de-privacidad">Políticas de privacidad</Link>
            </li>
            <li>
              <Link to="/reclamos">Reclamos</Link>
            </li>
          </div>
        </div>
        <div className="col-12 col-md-4 col-lg-3 movilAlign">
          <div className="d-none d-md-block d-lg-block d-xl-block text-center padExcepLeft">
            <h4>Síguenos</h4>
          </div>
          <div className="navSiguenos d-none d-md-block d-lg-block d-xl-block col-12">
            <li>
              <a
                href="https://www.facebook.com/cineviajerosautocinema/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={FacebookIcon} alt="Facebook Cineviajeros" />{" "}
                cineviajerosautocinema
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/cineviajeros/ "
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={InstagramIcon} alt="Instagram Cineviajeros" />{" "}
                cineviajeros
              </a>
            </li>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PrincipalFooter;
