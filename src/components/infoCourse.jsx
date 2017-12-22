import React from 'react';
import { Modal, Button} from 'react-bootstrap';

class InfoCourse extends React.Component{
    
    constructor(props){
        super(props);
    }
    
    render(){
         const {codigo,nombre,observacion,show,handleClose}= this.props
         console.log(observacion)
        return(<div>
                     <Modal
                          show={show}
                          onHide={handleClose}
                          container={this}
                          aria-labelledby="contained-modal-title"
                        >
                          <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title">Curso</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <h3>Código: </h3><p>{codigo}</p>
                            <h3>Nombre: </h3><p>{nombre}</p>
                            <h3>Observación: </h3><div className="observacion"><p >{observacion}</p></div>
                          </Modal.Body>
                          <Modal.Footer>
                            <Button onClick={handleClose} bsStyle="danger">Cerrar</Button>
                          </Modal.Footer>
                        </Modal>
               </div>)
    }
}

export default InfoCourse;