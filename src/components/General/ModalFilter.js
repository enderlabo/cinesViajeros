import React from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { faFilter, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ModalFilter = (props) => {
  const { handleSubmit } = useForm();

  function closeModal() {
    return props.setShowModalFilter(false);
  }
  return (
    <>
      <button
        variant="primary"
        className="buttonOpenModalFil"
        onClick={() => props.setShowModalFilter(true)}
      >
        <FontAwesomeIcon id="faAngleLeft" icon={faFilter} />
        Filtros
      </button>

      <Modal
        size="lg"
        show={props.showModalFilter}
        onHide={() => props.setShowModalFilter(false)}
        aria-labelledby="example-custom-modal-styling-title"
      >
        {/* <Modal.Header closeButton>
        </Modal.Header> */}
        <Modal.Body>
          <button className="buttonCloseModalFilter" onClick={closeModal}>
            <FontAwesomeIcon id="faAngleLeft" icon={faAngleLeft} />
            Volver
          </button>

          <div className="cardModalFilter">
            <form onSubmit={handleSubmit(props.onSubmitFilter)}>
              <h6 className="filter-title">Programación </h6>
              <hr className="filter-hr" />
              <div className="filter-inputContain">
                <div className="filter-hoyCheck">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={props.filte === "hoy"}
                    ref={props.register}
                    id="hoy"
                    name="hoy"
                    value="hoy"
                    onChange={(e) =>
                      props.setFilte(
                        props.filte !== "hoy" ? e.target.value : null
                      )
                    }
                  />
                  <label className="form-check" htmlFor="hoy">
                    Hoy
                  </label>
                </div>
                <div className="filter-semanalCheck">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={props.filte === "semanal"}
                    ref={props.register}
                    id="semanal"
                    name="semanal"
                    value="semanal"
                    onChange={(e) =>
                      props.setFilte(
                        props.filte !== "semanal" ? e.target.value : null
                      )
                    }
                  />
                  <label className="form-check" htmlFor="semanal">
                    Esta semana
                  </label>
                </div>

                <div className="filter-proximoCheck">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={props.filte === "proxima"}
                    ref={props.register}
                    id="proxima"
                    name="proxima"
                    value="proxima"
                    onChange={(e) =>
                      props.setFilte(
                        props.filte !== "proxima" ? e.target.value : null
                      )
                    }
                  />
                  <label className="form-check" htmlFor="proxima">
                    Próximamente
                  </label>
                </div>
                <br />
              </div>
              <button
                type="submit"
                //   onClick={closeModal}
                className="buttonApplyFilterModal"
              >
                APLICAR FILTROS
              </button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
