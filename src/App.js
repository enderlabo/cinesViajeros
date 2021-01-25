import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import Entradas from "./pages/Entradas";
import Combos from "./pages/Combos";
import Promociones from "./pages/Promociones";
import TerminosyCondiciones from "./pages/TerminosyCondiciones";
import MovieDetail from "./pages/MovieDetail";
import Error from "./pages/Error";
import ScrollToTop from "./components/ScrollToTop";
import PoliticasDePrivacidad from "./pages/PoliticasDePrivacidad";
import { Sandbox } from "./components/sandbox";
import Reclamos from "./components/Reclamos/Reclamos";
const App = () => {
  const routing = (
    <Router>
      <ScrollToTop />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/entradas/:page" component={Entradas} />
        <Route path="/peliculas/:id" component={MovieDetail} />
        <Route path="/combos/:page" component={Combos} />
        <Route path="/promociones/:page" component={Promociones} />
        <Route
          path="/terminos-y-condiciones"
          component={TerminosyCondiciones}
        />
        <Route
          path="/politicas-de-privacidad"
          component={PoliticasDePrivacidad}
        />
        <Route path="/reclamos" component={Reclamos} />
        <Route path="/sandbox" component={Sandbox} />

        <Route component={Error} />
      </Switch>
      <Footer />
    </Router>
  );

  return routing;
};

export default App;
