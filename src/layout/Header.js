import React from "react";
import { NavLink } from "react-router-dom";
import Logo from '../assets/images/logo.png'
import FacebookIcon from '../assets/images/FB.png'
import InstagramIcon from '../assets/images/IG.png'
const Header = () => {
  const [scroll, setScroll] = React.useState(false)
  const [sideBar, setSideBar] = React.useState(false)

  React.useEffect(() => {
    document.addEventListener("scroll", () => {
      setScroll(window.scrollY > 30);
    })
  })

  return (
    <React.Fragment>
      <div className="topHeader col-12">
        <button onClick={() => window.location.href="/#suscribeteLink"}>
          Suscríbete
        </button>
        <div className="redes">
          <a href="https://www.facebook.com/cineviajerosautocinema/" target="_blank" rel="noopener noreferrer">
              <img src={FacebookIcon} alt="Facebook Cineviajeros" />
            </a>
            <a href="https://www.instagram.com/cineviajeros/ " target="_blank" rel="noopener noreferrer">
              <img src={InstagramIcon} alt="Instagram Cineviajeros" />
            </a>
        </div>
      </div>
      <div className={ `headerEffect ${scroll ? 'activeHeaderEffect' : ''}`}>
      <header className="container">
        <div className="row">
          <div className="col-6 mobileButtonMenu">
            <button onClick={() => setSideBar(!sideBar)}>
              <div className={`bar ${sideBar ? 'bar1Effect' : ''}`}>

              </div>
              <div className={`bar ${sideBar ? 'bar2Effect' : ''}`}>

              </div>
              <div className={`bar ${sideBar ? 'bar3Effect' : ''}`}>

              </div>
            </button>
          </div>
          <div className="col-6 col-md-3 mobileLogo">
            <NavLink exact to="/"><img className="logoIcon" src={Logo} alt="Logo Cineviajeros" /></NavLink>
          </div>
          <nav className="col-4 col-md-8 col-lg-6">
            <NavLink active="active" to="/entradas/1">
              Compra tus entradas
            </NavLink>
            <NavLink active="active" to="/combos/1">
              Tus combos
            </NavLink>
            <NavLink active="active" to="/promociones/1">
              Promociones
            </NavLink>
          </nav>
          <div className="col-md-1 col-lg-3 alignEndIcons">
            <a href="https://www.facebook.com/cineviajerosautocinema/" target="_blank" rel="noopener noreferrer">
              <img src={FacebookIcon} alt="Facebook Cineviajeros" />
            </a>
            <a href="https://www.instagram.com/cineviajeros/ " target="_blank" rel="noopener noreferrer">
              <img src={InstagramIcon} alt="Instagram Cineviajeros" />
            </a>
          </div>
        </div>
      </header>
      <div className={`sideBarMobile ${!sideBar ? 'sideBarMobileEffect' : ''}`} onClick={() => setSideBar(!sideBar)}> 
        <div className="containerNavHeaderMobile">
        <nav className="col-12">
          <NavLink active="active" to="/entradas/1" onClick={() => setSideBar(!sideBar)}>
            Compra tus entradas
          </NavLink>
          <NavLink active="active" to="/combos/1" onClick={() => setSideBar(!sideBar)}>
            Tus combos
          </NavLink>
          <NavLink active="active" to="/promociones/1" onClick={() => setSideBar(!sideBar)}>
            Promociones
          </NavLink>
          <a href="https://goo.gl/maps/U8JbFq3QuyvdggVJ9" target="_blank" rel="noopener noreferrer">
          ¿ Cómo llegar ?
          </a>
        </nav>
        </div>
      </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
