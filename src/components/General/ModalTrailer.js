import React from 'react'
import {Modal} from 'react-bootstrap';
const ModalMovie = ({modalShow, item, handleShow}) => {
    const  youtube_parser = (url) => {
        // eslint-disable-next-line
        const regexYoutube = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
        var match = url.match(regexYoutube);
        return (match&&match[7].length===11)?match[7]:false;
    }
    return(
        <div>
            <Modal
                show={modalShow}
                onHide={()=>handleShow(!modalShow)}
                
                keyboard={false}
                className="ModalMovies"
            >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                {
                     item ? (
                        <iframe 
                        width="100%" 
                        height="500px"
                        title={item.title}
                        src={`https://www.youtube.com/embed/${youtube_parser(item.url_trailer)}?autoplay=1&rel=0&showinfo=0&modestbranding=1`}
                        frameBorder="0" 
                        autoPlay="1"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
        
                        </iframe>
                    ) : null
                }
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default ModalMovie;