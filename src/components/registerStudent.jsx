import React from 'react';
import {Form, FormGroup,FormControl, ControlLabel, Button, Col} from 'react-bootstrap'; 
import { Link } from 'react-router-dom';

import { saveStudent } from '../config';

class RegisterStudent extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            nombre:'',
            apellido:'',
            genero:'',
            identificacion:''
            
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
        const {nombre,apellido,genero,identificacion} = this.state;
        if(nombre == '' || apellido == '' || genero == '' || identificacion == ''){
            alert("Por favor llene todos los campos")
        }else{
            
            saveStudent(identificacion,nombre,apellido,genero);
            
            this.setState({nombre:'',
                           apellido:'',
                           genero:'',
                           identificacion:''
            })
        }
        
    }
    render(){
        return(<div>
               
             
                 
                 <Form horizontal className="centro" onSubmit={(event) => this.handleSubmit(event)}>
                 <Button className="btn-regresar"><Link to="/">Regresar</Link></Button>
                    <FormGroup className="contenido">
                        <h1>Registrar estudiante</h1>
                        <ControlLabel>Identificación</ControlLabel>
                        <FormControl name='identificacion' type="text" value={this.state.identificacion} placeholder="Identificación del estudiante" 
                        onChange={this.handleChange}/>
                        
                        <ControlLabel>Nombre</ControlLabel>
                        <FormControl name='nombre' type="text" value={this.state.nombre} placeholder="Nombre del estudiante" 
                        onChange={this.handleChange}/>
                        
                        <ControlLabel>Apellido</ControlLabel>
                        <FormControl name='apellido' type="text" value={this.state.apellido} placeholder="Apellido del estudiante" 
                        onChange={this.handleChange}/>

                        <ControlLabel>Género</ControlLabel>
                        <FormControl name='genero' type="text" value={this.state.genero} placeholder="Genero del estudiante" 
                        onChange={this.handleChange}/>
                        
                        <Col smOffset={4} mdOffset={4} lgOffset={4} sm={2} md={2} lg={2}>
                            <Button type="submit" className="btn-registrar">Registrar</Button>
                        </Col>
                    </FormGroup>
                    
                </Form>
              </div>);
    }
}

export default RegisterStudent;