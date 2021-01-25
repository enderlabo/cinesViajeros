import React from "react";
import PromocionItem from "../components/Promociones/PromocionItem";
import { useParams } from "react-router-dom";
import { getPromotionsbyPage } from "../endpoints";
import Pagination from "react-js-pagination";
import LeftArrow from "../assets/images/left-arrow.png";
import RightArrow from "../assets/images/right-arrow.png";
import DoubleLeftArrow from "../assets/images/double-left-arrow.png";
import DoubleRightArrow from "../assets/images/double-right-arrow.png";
import ModalCondiciones from "../components/General/ModalCondiciones";
const Promociones = () => {
  const [promotionsPerPage, setPromotionsPerPage] = React.useState(null);
  let { page } = useParams();
  //Modal Condiciones
  const [showModal, setShowModal] = React.useState(false);
  const [item, setItem] = React.useState(null);
  //Paginador
  const [currentPage, setCurrentPage] = React.useState(null);
  const [totalPromotions, setTotalPromotions] = React.useState(null);
  const [perPage, setPerPage] = React.useState(null);
  const getPromotionsPage = async page => {
    let data = await getPromotionsbyPage(page);
    if (data) {
      setCurrentPage(data.current_page);
      setTotalPromotions(data.total);
      setPerPage(data.per_page);
      setPromotionsPerPage(data.data);
    }
  };
  const viewCondicion = item => {
    setItem(item);
    setShowModal(true);
  };
  const handlePageChange = pageNumber => {
    window.location.href = `/promociones/${pageNumber}`;
  };
  React.useEffect(() => {
    if (page === null || page === undefined) {
      getPromotionsPage(1);
    } else {
      getPromotionsPage(page);
    }
  }, [page]);
  return (
    <React.Fragment>
      <ModalCondiciones
        modalShow={showModal}
        item={item}
        handleShow={setShowModal}
      />
      <div className="col-12 comboPage backgroundTrama">
        <div className="container">
          <div className="col-12 noPad">
            <h1>Promociones</h1>
          </div>
          <div className="row itemCombo">
            {promotionsPerPage &&
              promotionsPerPage.map((item, index) => (
                <div key={index} className="col-12 col-md-6 itemComboSection">
                  <PromocionItem item={item} viewCondicion={viewCondicion} />
                </div>
              ))}
          </div>
          <div className="pagSection row text-center">
            {currentPage && totalPromotions && perPage ? (
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={perPage}
                totalItemsCount={totalPromotions}
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
    </React.Fragment>
  );
};

export default Promociones;
