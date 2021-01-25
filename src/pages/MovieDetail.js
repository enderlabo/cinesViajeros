import React from "react";
import AdvertiseSymbol from "../assets/images/advertise_symbol.png";
import PlayTrailer from "../assets/images/play-circle.png";
import { useParams } from "react-router-dom";
import { getMovie } from "../endpoints/";
import { API_URL, LINK_COMPRA } from "../utils/config";
import ModalMovie from "../components/General/ModalTrailer";
import HorarioMovie from "../components/General/HorarioMovie";
import { FilterMovies } from "../components/General/FilterMovies";
const MovieDetail = () => {
  let { id } = useParams();
  const [search, setSearch] = React.useState(true);
  const [dataMovie, setDataMovie] = React.useState(null);
  const [showModal, setShowModal] = React.useState(false);
  const [item, setItem] = React.useState(null);

  const searchMovie = async () => {
    const data = await getMovie(id);
    if (data.status === "ok" && search) {
      setDataMovie(data.data);
      setSearch(false);
    }
  };
  const parsePrecio = precio => {
    if (precio.length < 3) return `S/ ${precio.toString()}.00`;
    else {
      return precio;
    }
  };
  const viewTrailer = item => {
    setItem(item);
    setShowModal(true);
  };
  React.useEffect(() => {
    searchMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  return (
    <div className="backgroundTrama">
      {!search ? (
        <React.Fragment>
          <ModalMovie
            modalShow={showModal}
            item={item}
            handleShow={setShowModal}
          />
          <div className="container">
            <div className="detailMovieContainer row">
              <div className="col-12">
                <h1>{dataMovie.title}</h1>
              </div>
              <div className="col-5 col-md-4">
                <img
                  src={`${API_URL}${dataMovie.img}`}
                  alt={`${dataMovie.title} - Cineviajeros`}
                />
              </div>
              <div className="col-7 col-md-6 col-lg-5">
                <p>{dataMovie.description}</p>
                <h4>Duración:</h4>
                <h3>{dataMovie.duration}</h3>
                <h4>Precio (desde):</h4>
                <h2>{parsePrecio(dataMovie.precio_min)}</h2>
                <h6>
                  {/* dataMovie && dataMovie.comision === 0
                    ? "NO INCLUYE COMISIÓN TICKETERA"
                    : null */}
                </h6>
                <button onClick={() => viewTrailer(dataMovie)}>
                  Ver traíler
                </button>
                <button
                  className="trailerResponsive"
                  onClick={() => viewTrailer(dataMovie)}
                >
                  <img
                    src={PlayTrailer}
                    alt="Play Trailer Icon - Cineviajeros"
                  />
                </button>
              </div>
            </div>
            {dataMovie ? <HorarioMovie movie={dataMovie} /> : null}
            <div className="row">
              <div className="col-12 comprarButtonDetailMovie text-center">
                <button onClick={() => window.open(LINK_COMPRA, "_blank")}>
                  Comprar
                </button>
              </div>
            </div>
            {/* <div className="row advertiseRow text-center">
              <img src={AdvertiseSymbol} alt="Aviso - Cineviajeros" />
              <p>
                Debido a la coyuntura actual no está permitido el ingreso a los
                grupos considerados de riesgo como: personas mayores de 65 años
                y niños menores de 14 años, la empresa se reserva el derecho de
                admisión por medidas de seguridad y protección.
              </p>
            </div> */}
          </div>
        </React.Fragment>
      ) : null}
    </div>
  );
};
export default MovieDetail;
