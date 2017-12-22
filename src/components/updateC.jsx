import React from 'react';
import { Modal, Button, Form,FormGroup,FormControl,ControlLabel,Col} from 'react-bootstrap';

import { updateCourse} from '../config';

class Update extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
                      codigo:'',
                      nombre:'',
                      observacion:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
        }
        
    componentWillReceiveProps(nextProps){
        const {codigo, nombre,observacion} = nextProps;
        this.setState({codigo:codigo,
                       nombre:nombre,
                       observacion:observacion});
    }
    handleChange(event){
        event.preventDefault();
        const entrada = event.target.name;
        const dato = event.target.value;
        this.setState({[entrada]:dato});
        
    }
    //-----------------------------------------------------------------------------------------------------------------------------------
    handleSubmit(event){
        event.preventDefault();
        const {codigo, nombre,observacion} = this.state;
        updateCourse(codigo, nombre,observacion)
        
    }
    
    render(){
         const {show,handleClose,fuente,defaultValues} = this.props
         

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
                          
                            <Form horizontal  className="contenido" onSubmit={(event) => {this.handleSubmit(event);defaultValues()}}>
                                
                                <FormGroup className="formato">
                                
                                    <ControlLabel>Código</ControlLabel>
                                    <FormControl name='codigo' type="text" value={this.state.codigo}  
                                    onChange={this.handleChange}/>
                                    
                                    <ControlLabel>Nombre</ControlLabel>
                                    <FormControl name='nombre' type="text" value={this.state.nombre}
                                    onChange={this.handleChange}/>
                                    
                                    <ControlLabel>Observación</ControlLabel>
                                    <FormControl name='observacion' type="text" value={this.state.observacion} 
                                    onChange={this.handleChange}/>
                      
            
                                    
                                    <Col smOffset={4} mdOffset={4} lgOffset={4} sm={2} md={2} lg={2}>
                                        <Button type="submit" className="btn-registrar">Modificar</Button>
                                    </Col>
                                </FormGroup>
                            </Form>
                          
                            
                          </Modal.Body>
                          <Modal.Footer>
                            <Button onClick={handleClose} bsStyle="danger">Cerrar</Button>
                          </Modal.Footer>
                    </Modal>
               </div>)
    }
}

export default Update;