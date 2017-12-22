import React from 'react';
import { Modal, Button} from 'react-bootstrap';

class InfoSorT extends React.Component{
    
    constructor(props){
        super(props);
    }
    
    render(){
         const {identificacion,nombre,apellido,genero,show,handleClose,fuente}= this.props
        return(<div>
                     <Modal
                          show={show}
                          onHide={handleClose}
                          container={this}
                          aria-labelledby="contained-modal-title"
                        >
                          <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title">{(fuente == 'estudiante') ? 'Estudiante' : 'Profesor'}</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <h3>Identificación: </h3><p>{identificacion}</p>
                            <h3>Nombre: </h3><p>{nombre}</p>
                            <h3>Apellido: </h3><p>{apellido}</p>
                            <h3>Género: </h3><p>{genero}</p>
                          </Modal.Body>
                          <Modal.Footer>
                            <Button onClick={handleClose} bsStyle="danger">Cerrar</Button>
                          </Modal.Footer>
                        </Modal>
               </div>)
    }
}

export default InfoSorT;