import React from 'react';
import {Form, FormGroup,FormControl, ControlLabel, Button, Col} from 'react-bootstrap'; 
import { Link } from 'react-router-dom'

import { saveCourse } from '../config';

class RegisterCourse extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            nombre:'',
            observacion:'',
            codigo:''
            
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    //---------------------------------------------------------------------------------------------------------------------------------
    handleChange(event){
        event.preventDefault();
        const entrada = event.target.name;
        const dato = event.target.value;
        this.setState({[entrada]:dato});
        
    }
    //-----------------------------------------------------------------------------------------------------------------------------------
    handleSubmit(event){
        event.preventDefault();
        const {nombre,observacion,codigo} = this.state;
        if(nombre == '' || observacion == '' || codigo == ''){
            alert("Por favor llene todos los campos")
        }else{
            
            saveCourse(codigo,nombre,observacion);
            
            this.setState({nombre:'',
                           observacion:'',
                           codigo:''
            })
        }
        
    }
    render(){
        return(<div>
                 
                <Form horizontal className="centro" onSubmit={(event) => this.handleSubmit(event)}>
                    <Button className="btn-regresar"><Link to="/">Regresar</Link></Button>
                    <FormGroup className="contenido">
                        <h1>Registrar curso</h1>
                        <ControlLabel>Código</ControlLabel>
                        <FormControl name='codigo' type="text" value={this.state.codigo} placeholder="Código del curso" 
                        onChange={this.handleChange}/>
                        
                        <ControlLabel>Nombre</ControlLabel>
                        <FormControl name='nombre' type="text" value={this.state.nombre} placeholder="Nombre del curso" 
                        onChange={this.handleChange}/>
                        
                        <ControlLabel>Observación</ControlLabel>
                        <FormControl name='observacion' type="text" value={this.state.observacion} placeholder="Observación de curso" 
                        onChange={this.handleChange}/>
                        
                        <Col smOffset={4} mdOffset={4} lgOffset={4} sm={2} md={2} lg={2}>
                            <Button type="submit" className="btn-registrar">Registrar</Button>
                        </Col>
                    </FormGroup>
                    
                </Form>
              </div>);
    }
}

export default RegisterCourse;