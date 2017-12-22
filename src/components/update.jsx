import React from 'react';
import { Modal, Button, Form,FormGroup,FormControl,ControlLabel,Col} from 'react-bootstrap';

import { updateSorT } from '../config';

class Update extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
                      identificacion:'',
                      nombre:'',
                      apellido:'',
                      genero:'',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
        }
        
    componentWillReceiveProps(nextProps){
        const {identificacion,nombre,apellido,genero} = nextProps;
        this.setState({identificacion:identificacion,
                      nombre:nombre,
                      apellido:apellido,
                      genero:genero});
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
        const {nombre,apellido,genero,identificacion} = this.state;
        const { fuente } = this.props
        updateSorT(identificacion,nombre,apellido,genero,fuente)
        
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
                            <Modal.Title id="contained-modal-title">{(fuente == 'estudiantes') ? 'Estudiante' : 'Profesor'}</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                          
                            <Form horizontal  className="contenido" onSubmit={(event) => {this.handleSubmit(event);defaultValues()}}>
                                
                                <FormGroup className="formato">
                                    <ControlLabel>Identificación</ControlLabel>
                                    <FormControl name="identificacion" type="text" value={this.state.identificacion} 
                                    onChange={this.handleChange}/>
                                    
                                    <ControlLabel>Nombre</ControlLabel>
                                    <FormControl name='nombre' type="text" value={this.state.nombre}  
                                    onChange={this.handleChange}/>
                                    
                                    <ControlLabel>Apellido</ControlLabel>
                                    <FormControl name="apellido" type="text" value={this.state.apellido}  
                                    onChange={this.handleChange}/>
                                
                                    <ControlLabel>Género</ControlLabel>
                                    <FormControl name='genero' type="text" value={this.state.genero} 
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