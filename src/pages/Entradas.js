import React from "react";
import { API_URL, LINK_COMPRA } from "../utils/config";
import TrailerIcon from "../assets/images/play-circle.png";
import ScheduleIcon from "../assets/images/shopping-cart.png";
import ShoppingIcon from "../assets/images/carrito.png";
// import AdvertiseSymbol from "../assets/images/advertise_symbol.png";
import { useParams } from "react-router-dom";
import {
  getMoviesByPage,
  getAllMovies,
  sendMoviesByFilter,
} from "../endpoints";
import ModalMovie from "../components/General/ModalTrailer";
import ModalHorario from "../components/General/ModalHorario";
import SearchMovies from "../components/Entradas/SearchMovies";
import Pagination from "react-js-pagination";
import LeftArrow from "../assets/images/left-arrow.png";
import RightArrow from "../assets/images/right-arrow.png";
import DoubleLeftArrow from "../assets/images/double-left-arrow.png";
import DoubleRightArrow from "../assets/images/double-right-arrow.png";
import { FilterMovies } from "../components/General/FilterMovies";
import { BrowserView, MobileView } from "react-device-detect";
import { ModalFilter } from "../components/General/ModalFilter";
const Pelicula = ({ item, viewTrailer, viewHorario }) => {
  const parsePrecio = (precio) => {
    if (precio.length < 3) return `S/ ${precio.toString()}.00`;
    else {
      return precio;
    }
  };

  const process = (date) => {
    var parts = date.split("/");
    var newdate = new Date(parts[1] + "/" + parts[0] + "/" + parts[2]);
    return newdate.getTime();
  };

  const releaseDate = () => {
    if (item.horario.length > 0) {
      const dates = item.horario.map((i) => i.fecha);
      let min = dates[0];
      dates.forEach((d) => {
        if (process(d) < min) min = d;
      });
      return min;
    }
    return null;
  };

  return (
    <div className="row peliContainer">
      {/* <div className="col-2 col-md-4">
        <FilterMovies />
      </div> */}
      <div className="col-4 col-md-2 col-ms-6 imgSection">
        <img src={`${API_URL}${item.img}`} alt={`${item.title} Cineviajeros`} />
      </div>
      <div className="col-8 col-md-5 col-sm-6 descriptionSection">
        <h4>{item.title}</h4>
        <h5>{item.description}</h5>
        <h4>Duración:</h4>
        <h5>{item.duration}</h5>
        <h4>Precio (desde):</h4>
        <h5 className="precio">{parsePrecio(item.precio_min)}</h5>
        <h5 className="tarjetasMsg">Pagos solo con tarjetas de débito o crédito.</h5>
        <h4>Fecha de estreno: </h4>
        <h5>{releaseDate()}</h5>
        {/* !item.comision && (
          <h5 className="comision">NO INCLUYE COMISIÓN TICKETERA</h5>
        ) */}
      </div>
      <div className="offset-4 col-4 offset-md-0 col-md-4  col-lg-3 btnSection">
        <div className="buttonsDesktopMovie col-md-12">
          <div className="btnHorario" onClick={() => viewHorario(item)}>
            <button>Ver horarios</button>
          </div>
          <div className="btnTrailer" onClick={() => viewTrailer(item)}>
            <button>Ver trailer</button>
          </div>
          <div
            className="btnComprar"
            onClick={() => window.open(LINK_COMPRA, "_blank")}
          >
            <button>Comprar</button>
          </div>
        </div>
        <div className="buttonsMobileMovie col-12 d-md-none d-lg-none d-xl-none">
          <button className="buttonTrailer" onClick={() => viewTrailer(item)}>
            <img src={TrailerIcon} alt={`Trailer - Cineviajeros`} />
          </button>
          <button className="buttonComprar" onClick={() => viewHorario(item)}>
            <img src={ScheduleIcon} alt={`Horario - Cineviajeros`} />
          </button>
          <button
            className="buttonComprar"
            onClick={() => window.open(LINK_COMPRA, "_blank")}
          >
            <img src={ShoppingIcon} alt={`Teleticket - Cineviajeros`} />
          </button>
        </div>
      </div>
    </div>
  );
};
const Entradas = () => {
  const [peliculasPerPage, setPeliculasPerPage] = React.useState(null);
  let { page } = useParams();
  //Modal Trailer
  const [showModal, setShowModal] = React.useState(false);
  const [item, setItem] = React.useState(null);
  //Modal Horario
  const [showModalHorario, setShowModalHorario] = React.useState(false);
  const [itemHorario, setItemHorario] = React.useState(null);
  //Paginador
  const [currentPage, setCurrentPage] = React.useState(null);
  const [totalMovies, setTotalMovies] = React.useState(null);
  const [perPage, setPerPage] = React.useState(null);
  //FilterMovies
  const [moviesToFilter, setMoviesToFilter] = React.useState(null);
  const [filte, setFilte] = React.useState(null);
  const [send, setSendIt] = React.useState(false);
  //Modal FIlter
  const [showModalFilter, setShowModalFilter] = React.useState(false);

  const getMoviesPage = async (page) => {
    let data = await getMoviesByPage(page);
    if (data) {
      setCurrentPage(data.current_page);
      setTotalMovies(data.total);
      setPerPage(data.per_page);
      setPeliculasPerPage(data.data);
    }
  };

  const getMoviesFilterPage = async () => {
    if (filte) {
      let data = await sendMoviesByFilter(filte);
      if (data) {
        setCurrentPage(1);
        setPerPage(null);
        setPeliculasPerPage(data);
      }
    }
  };

  const viewTrailer = (item) => {
    setItem(item);
    setShowModal(true);
  };
  const viewHorario = (item) => {
    setItemHorario(item);
    setShowModalHorario(true);
  };
  const handlePageChange = (pageNumber) => {
    window.location.href = `/entradas/${pageNumber}`;
  };

  const onSubmitFilter = (data) => {
    switch (data) {
      case data.hoy === "hoy":
        setFilte(data.hoy);
        break;
      case data.semanal === "semanal":
        setFilte(data.semanal);
        break;
      case data.proxima === "proxima":
        setFilte(data.proxima);
        break;
      default:
        break;
    }
    if (page === null || page === undefined) {
      filte ? getMoviesFilterPage() : getMoviesPage(1);
    } else {
      filte ? getMoviesFilterPage() : getMoviesPage(page);
    }
    setSendIt(!send);
  };

  React.useEffect(() => {
    if (page === null || page === undefined) {
      filte ? getMoviesFilterPage() : getMoviesPage(1);
    } else {
      filte ? getMoviesFilterPage() : getMoviesPage(page);
    }
  }, [page, send]);

  return (
    <React.Fragment>
      <ModalMovie modalShow={showModal} item={item} handleShow={setShowModal} />
      <ModalHorario
        modalShow={showModalHorario}
        movie={itemHorario}
        handleShow={setShowModalHorario}
      />
      <div className="container-fluid backgroundTrama">
        <div className="containerFlex container">
          <BrowserView>
            {/* <div className="col-3 col-md-3"> */}
            <FilterMovies
              filte={filte}
              setFilte={setFilte}
              onSubmitFilter={onSubmitFilter}
            />
            {/* </div> */}
          </BrowserView>

          <div id="fixedContainer" className="col-12 col-md-10 col-sm-12">
            <div className="entradasPage container">
              <MobileView>
                <ModalFilter
                  showModalFilter={showModalFilter}
                  setShowModalFilter={setShowModalFilter}
                  filte={filte}
                  setFilte={setFilte}
                  onSubmitFilter={onSubmitFilter}
                />
              </MobileView>
              {/* <div className="row advertiseRow text-center">
                <img src={AdvertiseSymbol} alt="Aviso - Cineviajeros" />
                <p>
                Debido a la coyuntura actual no está permitido el ingreso a los
                grupos considerados de riesgo como: personas mayores de 65 años y
                niños menores de 14 años, la empresa se reserva el derecho de
                admisión por medidas de seguridad y protección.
                </p>
              </div> */}
              <SearchMovies />
              <div className="peliculasContainer">
                <h3 style={{ color: "white" }}>Compra tus entradas</h3>
                {/* with this, the filter doesn't work neither. */}
                {peliculasPerPage
                  ? peliculasPerPage.map((pelicula, i) => (
                      <Pelicula
                        item={pelicula}
                        key={i}
                        viewTrailer={viewTrailer}
                        viewHorario={viewHorario}
                      />
                    ))
                  : null}
                {/* With moviesToFilter show all movies and not work. */}
                {/* moviesToFilter
                  ? moviesToFilter.map((pelicula, i) => (
                      <Pelicula
                        item={pelicula}
                        key={i}
                        viewTrailer={viewTrailer}
                        viewHorario={viewHorario}
                      />
                    ))
                  : null */}
              </div>
              <div className="pagSection container text-center">
                {currentPage && totalMovies && perPage ? (
                  <Pagination
                    activePage={currentPage}
                    itemsCountPerPage={perPage}
                    totalItemsCount={totalMovies}
                    pageRangeDisplayed={3}
                    firstPageText={
                      <img
                        src={DoubleLeftArrow}
                        alt="Double Left Arrow - Cineviajeros"
                      />
                    }
                    lastPageText={
                      <img
                        src={DoubleRightArrow}
                        alt="Double Right Arrow - Cineviajeros"
                      />
                    }
                    prevPageText={
                      <img src={LeftArrow} alt="Left Arrow - Cineviajeros" />
                    }
                    nextPageText={
                      <img src={RightArrow} alt="Right Arrow - Cineviajeros" />
                    }
                    onChange={handlePageChange}
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Entradas;
