import React from 'react';
import { Modal, Button,Col,Row} from 'react-bootstrap';

import { deleteData } from '../config';

class DeleteWarning extends React.Component{
    
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        
        }
        
    handleDelete(){
        const {fuente,identificacion} = this.props;
        deleteData(fuente,identificacion);
    }
    
    render(){
         const {show,handleClose,nombre,defaultValues} = this.props
         

        return(<div>
                     <Modal
                          show={show}
                          onHide={handleClose}
                          container={this}
                          aria-labelledby="contained-modal-title"
                        >
                          <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title">Eliminar</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                          
                          
                                <Row>
                                    <Col smOffset={1} mdOffset={1} lgOffset={1} sm={10} md={10} lg={10}>
                                        <h1>{"¿Desea eliminar a " + nombre + "?"}</h1>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col smOffset={3} mdOffset={3} lgOffset={3} sm={3} md={3} lg={3}>
                                        <Button bsStyle="success" onClick={()=>{this.handleDelete();defaultValues()}}>Eliminar</Button>
                                    </Col>
                                    
                                    <Col sm={3} md={3} lg={3}>
                                        <Button bsStyle="danger" onClick={()=>{handleClose()}}>No Eliminar</Button>
                                    </Col>
                                </Row>
                                
                          </Modal.Body>
                          <Modal.Footer>
                            
                          </Modal.Footer>
                    </Modal>
               </div>)
    }
}

export default DeleteWarning;