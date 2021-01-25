import React from 'react'
import {Modal} from 'react-bootstrap';
const ModalHorario = ({modalShow, item, handleShow}) => {
    return(
        <div>
            <Modal
                show={modalShow}
                onHide={()=>handleShow(false)}
                
                keyboard={false}
                className="ModalHorarios"
            >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                {
                     item ? (
                        <div className="condicionesComboContainer row">
                            <div className="col-12">
                                <h1>
                                    Condiciones
                                </h1>
                                <div className="textoLegal">
                                    <div className="description">
                                        {item.legal.split('<br />').map((item, i) => {
                                        return <h4 key={i}>{item}</h4>}
                                        ) 
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : null
                }
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default ModalHorario;