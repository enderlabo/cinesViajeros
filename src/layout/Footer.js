import React from 'react';
import Suscribete from '../components/Footer/Suscribete'
import ComoLlegar from '../components/Footer/ComoLlegar'
import Marcas from '../components/Footer/Marcas'
import PrincipalFooter from '../components/Footer'
import Copyright from '../components/Footer/Copyright'
const Footer = () => {
    return(
        <React.Fragment>
            <Suscribete />
            <ComoLlegar />
            <Marcas />
            <PrincipalFooter />
            <Copyright />
        </React.Fragment>
    );
}

export default Footer;