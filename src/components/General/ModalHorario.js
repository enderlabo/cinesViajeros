import React from 'react'
import {Modal} from 'react-bootstrap';
import HorarioMovie from './HorarioMovie';
const ModalHorario = ({modalShow, movie, handleShow}) => {
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
                     movie ? (
                        <HorarioMovie 
                        movie = {movie}
                        />
                    ) : null
                }
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default ModalHorario;