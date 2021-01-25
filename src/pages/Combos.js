import React from 'react';
import ComboItem from '../components/Combos/ComboItem';
import {useParams} from 'react-router-dom'
import {getCombosByPage} from '../endpoints'
import Pagination from "react-js-pagination";
import LeftArrow from '../assets/images/left-arrow.png'
import RightArrow from '../assets/images/right-arrow.png'
import DoubleLeftArrow from '../assets/images/double-left-arrow.png'
import DoubleRightArrow from '../assets/images/double-right-arrow.png'
import ModalCondiciones from '../components/General/ModalCondiciones'
const Combos = () => {
    const [combosPerPage, setCombosPerPage] = React.useState(null)
    let { page } = useParams()
    //Modal Condiciones
    const [showModal, setShowModal] = React.useState(false)
    const [item, setItem] = React.useState(null)
    //Paginador
    const [currentPage, setCurrentPage] = React.useState(null)
    const [totalMovies, setTotalMovies] = React.useState(null)
    const [perPage, setPerPage] = React.useState(null)

    const getCombosPage = async (page) => {
        let data =  await getCombosByPage(page);
        if(data){
          setCurrentPage(data.current_page);
          setTotalMovies(data.total);
          setPerPage(data.per_page);
          setCombosPerPage(data.data);
        }
    }
    const viewCondicion= (item) => {
        setItem(item);
        setShowModal(true);
    }
    const handlePageChange = (pageNumber) => {
        window.location.href=`/combos/${pageNumber}`;
    }
    React.useEffect(() => {
        if(page === null || page === undefined){
            getCombosPage(1);
        }else{
            getCombosPage(page);
        }
    }, [page])
    return(
        <React.Fragment>
             <ModalCondiciones
                modalShow={showModal}
                item={item}
                handleShow={setShowModal}
            />
        
        <div className="col-12 comboPage backgroundTrama">
            <div className="container">
                <div className="col-12 noPad">
                    <h1>
                        Tus combos
                    </h1>
                </div>
                <div className="row itemCombo">
                {
                    combosPerPage && combosPerPage.map((item,index) => (
                        <div key={index} className="col-12 col-md-6 itemComboSection">
                            <ComboItem item={item} viewCondicion={viewCondicion}/>
                        </div>                       
                    ))
                }
                </div>
                <div className="pagSection row text-center">
                       {
                           currentPage && totalMovies && perPage ? 
                           <Pagination
                            activePage={currentPage}
                            itemsCountPerPage={perPage}
                            totalItemsCount={totalMovies}
                            pageRangeDisplayed={3}
                            firstPageText={<img src={DoubleLeftArrow} alt="Double Left Arrow - Cineviajeros"/>}
                            lastPageText={<img src={DoubleRightArrow} alt="Double Right Arrow - Cineviajeros"/>}
                            prevPageText={<img src={LeftArrow} alt="Left Arrow - Cineviajeros"/>}
                            nextPageText={<img src={RightArrow} alt="Right Arrow - Cineviajeros"/>}
                            onChange={handlePageChange}
                        /> : null
                       } 
                    
                </div>
            </div>
        </div>
        </React.Fragment>
    );
}

export default Combos;